import { NextRequest, NextResponse } from 'next/server';
import {
  checkRateLimit,
  extractToken,
  protectAPI,
  protectPage,
  SecurityConfig,
  verifyToken,
} from './lib/auth';

// Cache simples para rate limiting (em produção, use Redis)
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();

// Configurações de rate limiting
const RATE_LIMIT_CONFIG = {
  // Rotas sensíveis (APIs, formulários, etc.)
  sensitive: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    maxRequests: 100, // 100 requests por IP
  },
  // Rotas de autenticação
  auth: {
    windowMs: 5 * 60 * 1000, // 5 minutos
    maxRequests: 10, // 10 tentativas de login
  },
  // Rotas gerais
  general: {
    windowMs: 60 * 1000, // 1 minuto
    maxRequests: 1000, // 1000 requests por IP
  },
};

// Função para obter IP do cliente
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');

  return forwarded?.split(',')[0] || realIP || cfConnectingIP || 'unknown';
}

// Função para verificar rate limit
function checkRateLimit(
  ip: string,
  config: typeof RATE_LIMIT_CONFIG.sensitive
): boolean {
  const now = Date.now();
  const record = rateLimitCache.get(ip);

  if (!record || now > record.resetTime) {
    // Primeira requisição ou janela expirada
    rateLimitCache.set(ip, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return true;
  }

  if (record.count >= config.maxRequests) {
    return false; // Rate limit excedido
  }

  // Incrementar contador
  record.count++;
  return true;
}

// Função para limpar cache antigo (executar periodicamente)
function cleanupRateLimitCache() {
  const now = Date.now();
  for (const [ip, record] of rateLimitCache.entries()) {
    if (now > record.resetTime) {
      rateLimitCache.delete(ip);
    }
  }
}

// Limpar cache a cada 5 minutos
if (typeof window !== 'undefined') {
  setInterval(cleanupRateLimitCache, 5 * 60 * 1000);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const clientIP = getClientIP(request);

  // Headers de segurança
  const response = NextResponse.next();

  // Aplicar headers de segurança do SecurityConfig
  Object.entries(SecurityConfig.securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Proteção de rotas para páginas
  if (!pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) {
    const pageProtection = await protectPage(request, pathname);
    if (pageProtection) {
      return pageProtection;
    }
  }

  // Proteção de rotas para APIs
  if (pathname.startsWith('/api/')) {
    const { user, isAuthorized } = await protectAPI(request, pathname);

    if (!isAuthorized) {
      return new NextResponse(
        JSON.stringify({
          error: 'Unauthorized',
          message: 'Access denied. Insufficient permissions.',
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Rate limiting por usuário para APIs
    if (user && !checkRateLimit(user.id, 50, 15 * 60 * 1000)) {
      return new NextResponse(
        JSON.stringify({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded for user.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }
  }

  // Rate limiting baseado no tipo de rota
  let rateLimitConfig = RATE_LIMIT_CONFIG.general;

  // Rotas de autenticação
  if (pathname.startsWith('/api/auth') || pathname.includes('login')) {
    rateLimitConfig = RATE_LIMIT_CONFIG.auth;
  }
  // Rotas sensíveis (APIs, formulários)
  else if (
    pathname.startsWith('/api/') ||
    pathname.includes('contact') ||
    pathname.includes('submit') ||
    pathname.includes('admin')
  ) {
    rateLimitConfig = RATE_LIMIT_CONFIG.sensitive;
  }

  // Verificar rate limit
  if (!checkRateLimit(clientIP, rateLimitConfig)) {
    return new NextResponse(
      JSON.stringify({
        error: 'Too Many Requests',
        message: 'Rate limit exceeded. Please try again later.',
        retryAfter: Math.ceil(rateLimitConfig.windowMs / 1000),
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil(rateLimitConfig.windowMs / 1000).toString(),
          'X-RateLimit-Limit': rateLimitConfig.maxRequests.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': (
            Date.now() + rateLimitConfig.windowMs
          ).toString(),
        },
      }
    );
  }

  // Adicionar headers de rate limit
  const record = rateLimitCache.get(clientIP);
  if (record) {
    response.headers.set(
      'X-RateLimit-Limit',
      rateLimitConfig.maxRequests.toString()
    );
    response.headers.set(
      'X-RateLimit-Remaining',
      (rateLimitConfig.maxRequests - record.count).toString()
    );
    response.headers.set('X-RateLimit-Reset', record.resetTime.toString());
  }

  // Throttling para requests pesados
  if (pathname.startsWith('/api/') && request.method !== 'GET') {
    // Adicionar delay mínimo para requests não-GET
    const delay = Math.random() * 100; // 0-100ms delay aleatório
    if (delay > 0) {
      // Em produção, implementar throttling mais sofisticado
      // Por enquanto, apenas adicionar header
      response.headers.set('X-Throttle-Delay', delay.toString());
    }
  }

  // Proteção contra ataques de força bruta
  if (pathname.includes('login') || pathname.includes('password')) {
    response.headers.set('X-Content-Security-Policy', "default-src 'self'");
  }

  // Log de segurança para rotas sensíveis
  if (pathname.startsWith('/admin') || pathname.startsWith('/api/admin')) {
    const token = extractToken(request);
    const user = token ? await verifyToken(token) : null;

    console.log(`[SECURITY] Admin access attempt:`, {
      pathname,
      user: user?.email || 'anonymous',
      ip: clientIP,
      timestamp: new Date().toISOString(),
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};

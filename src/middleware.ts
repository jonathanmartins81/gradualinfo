import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Middleware de Segurança - Aqua9 Boilerplate v2
 *
 * Este middleware implementa várias camadas de segurança:
 * - Headers de segurança essenciais
 * - Rate limiting básico
 * - Proteção contra ataques comuns
 * - Redirecionamentos seguros
 * - Logging de segurança
 */

// ===== CONFIGURAÇÕES DE SEGURANÇA =====
const SECURITY_CONFIG = {
  // Headers de segurança
  headers: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy':
      'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live https://va.vercel-scripts.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.vercel.com https://vitals.vercel-insights.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },

  // Rate limiting (básico)
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    maxRequests: 100, // máximo de 100 requests por IP
  },

  // Rotas protegidas
  protectedRoutes: [
    '/api/auth',
    '/api/admin',
    '/api/users',
    '/dashboard',
    '/admin',
  ],

  // Rotas públicas
  publicRoutes: [
    '/',
    '/about',
    '/portfolio',
    '/contact',
    '/blog',
    '/docs',
    '/tailwind-demo',
  ],

  // User agents maliciosos conhecidos
  maliciousUserAgents: [
    'bot',
    'crawler',
    'spider',
    'scraper',
    'curl',
    'wget',
    'python',
    'java',
    'php',
  ],
};

// ===== UTILITÁRIOS DE SEGURANÇA =====
const SecurityUtils = {
  // Verifica se o user agent é malicioso
  isMaliciousUserAgent: (userAgent: string): boolean => {
    const lowerUA = userAgent.toLowerCase();
    return SECURITY_CONFIG.maliciousUserAgents.some(agent =>
      lowerUA.includes(agent)
    );
  },

  // Verifica se a rota é protegida
  isProtectedRoute: (pathname: string): boolean => {
    return SECURITY_CONFIG.protectedRoutes.some(route =>
      pathname.startsWith(route)
    );
  },

  // Verifica se a rota é pública
  isPublicRoute: (pathname: string): boolean => {
    return SECURITY_CONFIG.publicRoutes.some(
      route => pathname === route || pathname.startsWith(route)
    );
  },

  // Obtém IP real do cliente
  getClientIP: (request: NextRequest): string => {
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const cfConnectingIP = request.headers.get('cf-connecting-ip');

    if (forwarded) {
      return forwarded.split(',')[0].trim();
    }
    if (realIP) {
      return realIP;
    }
    if (cfConnectingIP) {
      return cfConnectingIP;
    }

    return 'unknown';
  },

  // Log de segurança
  logSecurityEvent: (event: string, details: any) => {
    console.log(`[SECURITY] ${event}:`, {
      timestamp: new Date().toISOString(),
      ...details,
    });
  },

  // Sanitiza string para prevenir ataques
  sanitizeString: (str: string): string => {
    return str
      .replace(/[<>]/g, '') // Remove < e >
      .replace(/javascript:/gi, '') // Remove javascript:
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  },
};

// ===== CACHE SIMPLES PARA RATE LIMITING =====
const rateLimitCache = new Map<string, { count: number; resetTime: number }>();

const RateLimiter = {
  // Verifica rate limit
  check: (ip: string): boolean => {
    const now = Date.now();
    const windowMs = SECURITY_CONFIG.rateLimit.windowMs;
    const maxRequests = SECURITY_CONFIG.rateLimit.maxRequests;

    const record = rateLimitCache.get(ip);

    if (!record || now > record.resetTime) {
      // Reset ou primeira requisição
      rateLimitCache.set(ip, {
        count: 1,
        resetTime: now + windowMs,
      });
      return true;
    }

    if (record.count >= maxRequests) {
      return false; // Rate limit excedido
    }

    // Incrementa contador
    record.count++;
    return true;
  },

  // Limpa cache antigo
  cleanup: () => {
    const now = Date.now();
    for (const [ip, record] of rateLimitCache.entries()) {
      if (now > record.resetTime) {
        rateLimitCache.delete(ip);
      }
    }
  },
};

// ===== MIDDLEWARE PRINCIPAL =====
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const clientIP = SecurityUtils.getClientIP(request);

  // Log da requisição
  SecurityUtils.logSecurityEvent('Request', {
    pathname,
    userAgent: userAgent.substring(0, 100),
    clientIP,
    method: request.method,
  });

  // ===== VERIFICAÇÕES DE SEGURANÇA =====

  // 1. Verifica User Agent malicioso
  if (SecurityUtils.isMaliciousUserAgent(userAgent)) {
    SecurityUtils.logSecurityEvent('MaliciousUserAgent', {
      userAgent,
      clientIP,
      pathname,
    });
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 2. Verifica Rate Limiting
  if (!RateLimiter.check(clientIP)) {
    SecurityUtils.logSecurityEvent('RateLimitExceeded', {
      clientIP,
      pathname,
    });
    return new NextResponse('Too Many Requests', { status: 429 });
  }

  // 3. Verifica rota protegida sem autenticação
  if (SecurityUtils.isProtectedRoute(pathname)) {
    const authToken =
      request.headers.get('authorization') ||
      request.cookies.get('auth-token')?.value;

    if (!authToken) {
      SecurityUtils.logSecurityEvent('UnauthorizedAccess', {
        clientIP,
        pathname,
      });
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 4. Verifica ataques de path traversal
  if (pathname.includes('..') || pathname.includes('~')) {
    SecurityUtils.logSecurityEvent('PathTraversalAttempt', {
      clientIP,
      pathname,
    });
    return new NextResponse('Forbidden', { status: 403 });
  }

  // 5. Verifica ataques de SQL Injection (básico)
  const sqlInjectionPatterns = [
    /(\b(union|select|insert|update|delete|drop|create|alter)\b)/i,
    /(\b(or|and)\b\s+\d+\s*=\s*\d+)/i,
    /(\b(union|select)\b.*\bfrom\b)/i,
  ];

  for (const pattern of sqlInjectionPatterns) {
    if (pattern.test(pathname) || pattern.test(userAgent)) {
      SecurityUtils.logSecurityEvent('SQLInjectionAttempt', {
        clientIP,
        pathname,
        userAgent,
      });
      return new NextResponse('Forbidden', { status: 403 });
    }
  }

  // ===== APLICA HEADERS DE SEGURANÇA =====
  const response = NextResponse.next();

  // Aplica todos os headers de segurança
  Object.entries(SECURITY_CONFIG.headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Headers adicionais baseados na rota
  if (SecurityUtils.isProtectedRoute(pathname)) {
    response.headers.set(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
  }

  // ===== REDIRECIONAMENTOS ESPECÍFICOS =====

  // Redireciona HTTP para HTTPS em produção
  if (
    process.env.NODE_ENV === 'production' &&
    request.headers.get('x-forwarded-proto') === 'http'
  ) {
    const httpsUrl = request.nextUrl.clone();
    httpsUrl.protocol = 'https';
    return NextResponse.redirect(httpsUrl);
  }

  // Redireciona www para non-www (opcional)
  if (request.nextUrl.hostname.startsWith('www.')) {
    const nonWwwUrl = request.nextUrl.clone();
    nonWwwUrl.hostname = nonWwwUrl.hostname.replace('www.', '');
    return NextResponse.redirect(nonWwwUrl);
  }

  // ===== LIMPEZA PERIÓDICA =====
  // Limpa cache de rate limiting a cada 100 requisições
  if (Math.random() < 0.01) {
    RateLimiter.cleanup();
  }

  return response;
}

// ===== CONFIGURAÇÃO DO MIDDLEWARE =====
export const config = {
  // Aplica em todas as rotas
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

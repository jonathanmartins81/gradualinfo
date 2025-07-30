/**
 * Sistema de Autenticação e Autorização
 *
 * Implementa proteção de rotas, autenticação JWT e controle de acesso
 * baseado em roles e permissões.
 */

import { jwtVerify, SignJWT } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

// Configurações de segurança
const JWT_SECRET =
  process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';
const JWT_ALGORITHM = 'HS256';
const JWT_EXPIRES_IN = '24h';

// Tipos de usuário e permissões
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: Permission[];
  isActive: boolean;
  lastLogin?: Date;
}

export type UserRole = 'admin' | 'user' | 'moderator' | 'guest';

export type Permission =
  | 'read:posts'
  | 'write:posts'
  | 'delete:posts'
  | 'read:users'
  | 'write:users'
  | 'delete:users'
  | 'admin:system'
  | 'moderate:content';

// Configuração de roles e permissões
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  admin: [
    'read:posts',
    'write:posts',
    'delete:posts',
    'read:users',
    'write:users',
    'delete:users',
    'admin:system',
    'moderate:content',
  ],
  moderator: [
    'read:posts',
    'write:posts',
    'delete:posts',
    'read:users',
    'moderate:content',
  ],
  user: ['read:posts', 'write:posts'],
  guest: ['read:posts'],
};

// Rotas protegidas e suas permissões necessárias
export const PROTECTED_ROUTES: Record<
  string,
  {
    requiredPermissions: Permission[];
    allowedRoles: UserRole[];
  }
> = {
  '/admin': {
    requiredPermissions: ['admin:system'],
    allowedRoles: ['admin'],
  },
  '/admin/users': {
    requiredPermissions: ['read:users'],
    allowedRoles: ['admin', 'moderator'],
  },
  '/admin/posts': {
    requiredPermissions: ['read:posts', 'write:posts'],
    allowedRoles: ['admin', 'moderator'],
  },
  '/api/admin': {
    requiredPermissions: ['admin:system'],
    allowedRoles: ['admin'],
  },
  '/api/users': {
    requiredPermissions: ['read:users'],
    allowedRoles: ['admin', 'moderator'],
  },
  '/api/posts': {
    requiredPermissions: ['read:posts'],
    allowedRoles: ['admin', 'moderator', 'user'],
  },
  '/dashboard': {
    requiredPermissions: ['read:posts'],
    allowedRoles: ['admin', 'moderator', 'user'],
  },
  '/profile': {
    requiredPermissions: ['read:users'],
    allowedRoles: ['admin', 'moderator', 'user'],
  },
};

/**
 * Gera um token JWT para o usuário
 */
export async function generateToken(
  user: Omit<User, 'lastLogin'>
): Promise<string> {
  const token = await new SignJWT({
    id: user.id,
    email: user.email,
    name: user.name,
    role: user.role,
    permissions: user.permissions,
  })
    .setProtectedHeader({ alg: JWT_ALGORITHM })
    .setIssuedAt()
    .setExpirationTime(JWT_EXPIRES_IN)
    .sign(new TextEncoder().encode(JWT_SECRET));

  return token;
}

/**
 * Verifica e decodifica um token JWT
 */
export async function verifyToken(token: string): Promise<User | null> {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(JWT_SECRET)
    );

    return {
      id: payload.id as string,
      email: payload.email as string,
      name: payload.name as string,
      role: payload.role as UserRole,
      permissions: payload.permissions as Permission[],
      isActive: true,
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
}

/**
 * Extrai token do header Authorization
 */
export function extractToken(request: NextRequest): string | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}

/**
 * Verifica se o usuário tem as permissões necessárias
 */
export function hasPermission(
  userPermissions: Permission[],
  requiredPermissions: Permission[]
): boolean {
  return requiredPermissions.every(permission =>
    userPermissions.includes(permission)
  );
}

/**
 * Verifica se o usuário tem o role necessário
 */
export function hasRole(userRole: UserRole, allowedRoles: UserRole[]): boolean {
  return allowedRoles.includes(userRole);
}

/**
 * Middleware de autenticação para rotas protegidas
 */
export async function authenticateRoute(
  request: NextRequest,
  requiredPermissions: Permission[] = [],
  allowedRoles: UserRole[] = []
): Promise<{ user: User | null; isAuthorized: boolean }> {
  const token = extractToken(request);

  if (!token) {
    return { user: null, isAuthorized: false };
  }

  const user = await verifyToken(token);

  if (!user || !user.isActive) {
    return { user: null, isAuthorized: false };
  }

  // Verificar permissões se especificadas
  if (
    requiredPermissions.length > 0 &&
    !hasPermission(user.permissions, requiredPermissions)
  ) {
    return { user, isAuthorized: false };
  }

  // Verificar roles se especificados
  if (allowedRoles.length > 0 && !hasRole(user.role, allowedRoles)) {
    return { user, isAuthorized: false };
  }

  return { user, isAuthorized: true };
}

/**
 * Middleware de proteção para páginas
 */
export async function protectPage(
  request: NextRequest,
  pathname: string
): Promise<NextResponse | null> {
  const routeConfig = PROTECTED_ROUTES[pathname];

  if (!routeConfig) {
    return null; // Rota não protegida
  }

  const { user, isAuthorized } = await authenticateRoute(
    request,
    routeConfig.requiredPermissions,
    routeConfig.allowedRoles
  );

  if (!isAuthorized) {
    // Redirecionar para login ou página de acesso negado
    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    } else {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return null; // Acesso permitido
}

/**
 * Middleware de proteção para APIs
 */
export async function protectAPI(
  request: NextRequest,
  pathname: string
): Promise<{ user: User | null; isAuthorized: boolean }> {
  const routeConfig = PROTECTED_ROUTES[pathname];

  if (!routeConfig) {
    return { user: null, isAuthorized: true }; // API não protegida
  }

  return await authenticateRoute(
    request,
    routeConfig.requiredPermissions,
    routeConfig.allowedRoles
  );
}

/**
 * Rate limiting por usuário
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export function checkRateLimit(
  userId: string,
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000 // 15 minutos
): boolean {
  const now = Date.now();
  const key = `rate_limit:${userId}`;
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    // Primeira requisição ou janela expirada
    rateLimitMap.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return true;
  }

  if (record.count >= maxRequests) {
    return false; // Rate limit excedido
  }

  // Incrementar contador
  record.count++;
  return true;
}

/**
 * Limpeza periódica do cache de rate limiting
 */
setInterval(
  () => {
    const now = Date.now();
    for (const [key, record] of rateLimitMap.entries()) {
      if (now > record.resetTime) {
        rateLimitMap.delete(key);
      }
    }
  },
  5 * 60 * 1000
); // Limpar a cada 5 minutos

/**
 * Utilitários de segurança
 */
export const SecurityUtils = {
  /**
   * Sanitiza dados de entrada
   */
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove < e >
      .replace(/javascript:/gi, '') // Remove javascript:
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  },

  /**
   * Valida email
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Gera senha forte
   */
  generateStrongPassword(): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  },

  /**
   * Verifica força da senha
   */
  checkPasswordStrength(password: string): {
    score: number;
    feedback: string[];
  } {
    const feedback: string[] = [];
    let score = 0;

    if (password.length >= 8) score++;
    else feedback.push('Senha deve ter pelo menos 8 caracteres');

    if (/[a-z]/.test(password)) score++;
    else feedback.push('Senha deve conter letra minúscula');

    if (/[A-Z]/.test(password)) score++;
    else feedback.push('Senha deve conter letra maiúscula');

    if (/[0-9]/.test(password)) score++;
    else feedback.push('Senha deve conter número');

    if (/[^A-Za-z0-9]/.test(password)) score++;
    else feedback.push('Senha deve conter caractere especial');

    return { score, feedback };
  },
};

/**
 * Configurações de segurança
 */
export const SecurityConfig = {
  // Headers de segurança
  securityHeaders: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Content-Security-Policy':
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;",
  },

  // Configurações de sessão
  session: {
    maxAge: 24 * 60 * 60 * 1000, // 24 horas
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
  },

  // Configurações de rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    maxRequests: 100,
    skipSuccessfulRequests: false,
    skipFailedRequests: false,
  },
};

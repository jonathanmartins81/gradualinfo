import { generateToken, ROLE_PERMISSIONS, SecurityUtils } from '@/lib/auth';
import { NextRequest, NextResponse } from 'next/server';

// Simulação de banco de dados de usuários
// Em produção, use um banco de dados real
const USERS_DB = [
  {
    id: '1',
    email: 'admin@aqua9.com.br',
    password: 'admin123', // Em produção, use hash bcrypt
    name: 'Administrador',
    role: 'admin' as const,
    isActive: true,
  },
  {
    id: '2',
    email: 'user@aqua9.com.br',
    password: 'user123',
    name: 'Usuário Padrão',
    role: 'user' as const,
    isActive: true,
  },
  {
    id: '3',
    email: 'moderator@aqua9.com.br',
    password: 'mod123',
    name: 'Moderador',
    role: 'moderator' as const,
    isActive: true,
  },
];

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validação de entrada
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email e senha são obrigatórios' },
        { status: 400 }
      );
    }

    // Sanitizar entrada
    const sanitizedEmail = SecurityUtils.sanitizeInput(email);

    if (!SecurityUtils.isValidEmail(sanitizedEmail)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    // Buscar usuário no banco de dados
    const user = USERS_DB.find(u => u.email === sanitizedEmail);

    if (!user) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Verificar senha (em produção, use bcrypt.compare)
    if (user.password !== password) {
      return NextResponse.json(
        { error: 'Credenciais inválidas' },
        { status: 401 }
      );
    }

    // Verificar se usuário está ativo
    if (!user.isActive) {
      return NextResponse.json({ error: 'Conta desativada' }, { status: 403 });
    }

    // Gerar token JWT
    const token = await generateToken({
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      permissions: ROLE_PERMISSIONS[user.role],
      isActive: user.isActive,
    });

    // Log de login bem-sucedido
    console.log(`[AUTH] Login successful: ${user.email} (${user.role})`);

    // Retornar resposta com token
    return NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        permissions: ROLE_PERMISSIONS[user.role],
      },
    });
  } catch (error) {
    console.error('[AUTH] Login error:', error);

    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

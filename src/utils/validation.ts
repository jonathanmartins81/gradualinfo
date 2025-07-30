/**
 * Sistema de Validação - Aqua9 Boilerplate v2
 *
 * Implementa validações de entrada para garantir segurança
 * e integridade dos dados.
 *
 * @author Jonathan Simão
 * @version 2.0.0
 * @since 2024-01-01
 */

/**
 * Interface para resultado de validação
 */
interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Interface para regras de validação (não utilizada no momento)
 */
// interface ValidationRule {
//   test: (value: unknown) => boolean;
//   message: string;
// }

/**
 * Classe principal de validação
 */
export class InputValidator {
  /**
   * Sanitiza uma string removendo caracteres perigosos
   */
  static sanitizeString(input: string): string {
    if (typeof input !== 'string') {
      return '';
    }

    return input
      .trim()
      .replace(/[<>]/g, '') // Remove < e >
      .replace(/javascript:/gi, '') // Remove javascript:
      .replace(/on\w+=/gi, ''); // Remove event handlers
  }

  /**
   * Valida formato de email
   */
  static validateEmail(email: string): boolean {
    if (typeof email !== 'string') {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  /**
   * Valida formato de URL
   */
  static validateURL(url: string): boolean {
    if (typeof url !== 'string') {
      return false;
    }

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Valida se é uma string não vazia
   */
  static validateRequired(value: unknown): boolean {
    return typeof value === 'string' && value.trim().length > 0;
  }

  /**
   * Valida comprimento mínimo
   */
  static validateMinLength(value: string, minLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength;
  }

  /**
   * Valida comprimento máximo
   */
  static validateMaxLength(value: string, maxLength: number): boolean {
    return typeof value === 'string' && value.length <= maxLength;
  }

  /**
   * Valida se é um número
   */
  static validateNumber(value: unknown): boolean {
    return typeof value === 'number' && !isNaN(value);
  }

  /**
   * Valida se é um número inteiro
   */
  static validateInteger(value: unknown): boolean {
    return Number.isInteger(value);
  }

  /**
   * Valida se está dentro de um intervalo
   */
  static validateRange(value: number, min: number, max: number): boolean {
    return this.validateNumber(value) && value >= min && value <= max;
  }

  /**
   * Valida se contém apenas caracteres alfanuméricos
   */
  static validateAlphanumeric(value: string): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test(value);
  }

  /**
   * Valida se contém apenas letras
   */
  static validateLetters(value: string): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    const lettersRegex = /^[a-zA-Z\s]+$/;
    return lettersRegex.test(value);
  }

  /**
   * Valida formato de telefone brasileiro
   */
  static validatePhoneBR(phone: string): boolean {
    if (typeof phone !== 'string') {
      return false;
    }

    // Remove todos os caracteres não numéricos
    const cleanPhone = phone.replace(/\D/g, '');

    // Valida formatos: (11) 99999-9999, 11999999999, etc.
    return cleanPhone.length >= 10 && cleanPhone.length <= 11;
  }

  /**
   * Valida formato de CPF brasileiro
   */
  static validateCPF(cpf: string): boolean {
    if (typeof cpf !== 'string') {
      return false;
    }

    // Remove caracteres não numéricos
    const cleanCPF = cpf.replace(/\D/g, '');

    // Verifica se tem 11 dígitos
    if (cleanCPF.length !== 11) {
      return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cleanCPF)) {
      return false;
    }

    // Validação dos dígitos verificadores
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
    }
    let remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.charAt(9))) {
      return false;
    }

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cleanCPF.charAt(10))) {
      return false;
    }

    return true;
  }

  /**
   * Valida formato de CNPJ brasileiro
   */
  static validateCNPJ(cnpj: string): boolean {
    if (typeof cnpj !== 'string') {
      return false;
    }

    // Remove caracteres não numéricos
    const cleanCNPJ = cnpj.replace(/\D/g, '');

    // Verifica se tem 14 dígitos
    if (cleanCNPJ.length !== 14) {
      return false;
    }

    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{13}$/.test(cleanCNPJ)) {
      return false;
    }

    // Validação dos dígitos verificadores
    const weights1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const weights2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(cleanCNPJ.charAt(i)) * weights1[i];
    }
    let remainder = sum % 11;
    const digit1 = remainder < 2 ? 0 : 11 - remainder;

    sum = 0;
    for (let i = 0; i < 13; i++) {
      sum += parseInt(cleanCNPJ.charAt(i)) * weights2[i];
    }
    remainder = sum % 11;
    const digit2 = remainder < 2 ? 0 : 11 - remainder;

    return (
      digit1 === parseInt(cleanCNPJ.charAt(12)) &&
      digit2 === parseInt(cleanCNPJ.charAt(13))
    );
  }

  /**
   * Valida formato de CEP brasileiro
   */
  static validateCEP(cep: string): boolean {
    if (typeof cep !== 'string') {
      return false;
    }

    // Remove caracteres não numéricos
    const cleanCEP = cep.replace(/\D/g, '');

    // Verifica se tem 8 dígitos
    return cleanCEP.length === 8;
  }

  /**
   * Valida se é uma data válida
   */
  static validateDate(date: string): boolean {
    if (typeof date !== 'string') {
      return false;
    }

    const dateObj = new Date(date);
    return dateObj instanceof Date && !isNaN(dateObj.getTime());
  }

  /**
   * Valida se é uma data futura
   */
  static validateFutureDate(date: string): boolean {
    if (!this.validateDate(date)) {
      return false;
    }

    const dateObj = new Date(date);
    const now = new Date();
    return dateObj > now;
  }

  /**
   * Valida se é uma data passada
   */
  static validatePastDate(date: string): boolean {
    if (!this.validateDate(date)) {
      return false;
    }

    const dateObj = new Date(date);
    const now = new Date();
    return dateObj < now;
  }

  /**
   * Valida formato de senha forte
   */
  static validateStrongPassword(password: string): boolean {
    if (typeof password !== 'string') {
      return false;
    }

    // Mínimo 8 caracteres, pelo menos uma letra maiúscula,
    // uma minúscula, um número e um caractere especial
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  }

  /**
   * Valida formato de senha média
   */
  static validateMediumPassword(password: string): boolean {
    if (typeof password !== 'string') {
      return false;
    }

    // Mínimo 6 caracteres, pelo menos uma letra e um número
    const mediumPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return mediumPasswordRegex.test(password);
  }
}

/**
 * Utilitários de validação para casos de uso comuns
 */
export const validationUtils = {
  /**
   * Valida formulário de contato
   */
  contactForm: (data: {
    name: string;
    email: string;
    message: string;
  }): ValidationResult => {
    const errors: string[] = [];

    if (!InputValidator.validateRequired(data.name)) {
      errors.push('Nome é obrigatório');
    } else if (!InputValidator.validateLetters(data.name)) {
      errors.push('Nome deve conter apenas letras');
    }

    if (!InputValidator.validateEmail(data.email)) {
      errors.push('Email inválido');
    }

    if (!InputValidator.validateRequired(data.message)) {
      errors.push('Mensagem é obrigatória');
    } else if (!InputValidator.validateMinLength(data.message, 10)) {
      errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  /**
   * Valida dados de usuário
   */
  userData: (data: {
    name: string;
    email: string;
    phone?: string;
    cpf?: string;
  }): ValidationResult => {
    const errors: string[] = [];

    if (!InputValidator.validateRequired(data.name)) {
      errors.push('Nome é obrigatório');
    }

    if (!InputValidator.validateEmail(data.email)) {
      errors.push('Email inválido');
    }

    if (data.phone && !InputValidator.validatePhoneBR(data.phone)) {
      errors.push('Telefone inválido');
    }

    if (data.cpf && !InputValidator.validateCPF(data.cpf)) {
      errors.push('CPF inválido');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },
};

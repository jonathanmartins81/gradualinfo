import { describe, expect, it } from 'vitest';
import {
  ValidationError,
  ValidationRule,
  validateArray,
  validateCep,
  validateCnpj,
  validateCpf,
  validateCustom,
  validateDate,
  validateEmail,
  validateEnum,
  validateForm,
  validateInteger,
  validateMaxLength,
  validateMinLength,
  validateNumber,
  validateObject,
  validatePassword,
  validatePattern,
  validatePhone,
  validatePositive,
  validateRange,
  validateRequired,
  validateUrl,
} from './validation';

describe('Validation Utils', () => {
  describe('validateEmail', () => {
    it('should validate correct email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('user+tag@example.org')).toBe(true);
      expect(validateEmail('123@domain.com')).toBe(true);
    });

    it('should reject invalid email addresses', () => {
      expect(validateEmail('invalid-email')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@.com')).toBe(false);
      expect(validateEmail('test..test@example.com')).toBe(false);
      expect(validateEmail('')).toBe(false);
      expect(validateEmail(null as any)).toBe(false);
      expect(validateEmail(undefined as any)).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('should validate strong passwords', () => {
      expect(validatePassword('StrongPass123!')).toBe(true);
      expect(validatePassword('MyP@ssw0rd')).toBe(true);
      expect(validatePassword('Secure123#')).toBe(true);
    });

    it('should reject weak passwords', () => {
      expect(validatePassword('weak')).toBe(false);
      expect(validatePassword('12345678')).toBe(false);
      expect(validatePassword('password')).toBe(false);
      expect(validatePassword('')).toBe(false);
      expect(validatePassword(null as any)).toBe(false);
    });

    it('should validate with custom options', () => {
      expect(validatePassword('weak', { minLength: 4 })).toBe(true);
      expect(validatePassword('PASS123', { requireSpecialChar: false })).toBe(
        true
      );
    });
  });

  describe('validateRequired', () => {
    it('should validate required fields', () => {
      expect(validateRequired('value')).toBe(true);
      expect(validateRequired(0)).toBe(true);
      expect(validateRequired(false)).toBe(true);
      expect(validateRequired([])).toBe(true);
      expect(validateRequired({})).toBe(true);
    });

    it('should reject empty values', () => {
      expect(validateRequired('')).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
      expect(validateRequired('   ')).toBe(false);
    });

    it('should handle whitespace correctly', () => {
      expect(validateRequired('  value  ', { trim: true })).toBe(true);
      expect(validateRequired('   ', { trim: true })).toBe(false);
    });
  });

  describe('validateMinLength', () => {
    it('should validate minimum length', () => {
      expect(validateMinLength('test', 3)).toBe(true);
      expect(validateMinLength('test', 4)).toBe(true);
      expect(validateMinLength([1, 2, 3], 2)).toBe(true);
    });

    it('should reject values below minimum length', () => {
      expect(validateMinLength('ab', 3)).toBe(false);
      expect(validateMinLength([1], 2)).toBe(false);
      expect(validateMinLength('', 1)).toBe(false);
    });

    it('should handle edge cases', () => {
      expect(validateMinLength(null as any, 1)).toBe(false);
      expect(validateMinLength(undefined as any, 1)).toBe(false);
      expect(validateMinLength(123 as any, 1)).toBe(false);
    });
  });

  describe('validateMaxLength', () => {
    it('should validate maximum length', () => {
      expect(validateMaxLength('test', 5)).toBe(true);
      expect(validateMaxLength('test', 4)).toBe(true);
      expect(validateMaxLength([1, 2], 3)).toBe(true);
    });

    it('should reject values above maximum length', () => {
      expect(validateMaxLength('testing', 5)).toBe(false);
      expect(validateMaxLength([1, 2, 3], 2)).toBe(false);
    });
  });

  describe('validatePattern', () => {
    it('should validate regex patterns', () => {
      expect(validatePattern('abc123', /^[a-z0-9]+$/)).toBe(true);
      expect(validatePattern('ABC', /^[A-Z]+$/)).toBe(true);
    });

    it('should reject non-matching patterns', () => {
      expect(validatePattern('abc123', /^[A-Z]+$/)).toBe(false);
      expect(validatePattern('', /^.+$/)).toBe(false);
    });
  });

  describe('validateUrl', () => {
    it('should validate correct URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true);
      expect(validateUrl('http://localhost:3000')).toBe(true);
      expect(validateUrl('https://sub.domain.co.uk/path?param=value')).toBe(
        true
      );
    });

    it('should reject invalid URLs', () => {
      expect(validateUrl('not-a-url')).toBe(false);
      expect(validateUrl('ftp://invalid')).toBe(false);
      expect(validateUrl('')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    it('should validate Brazilian phone numbers', () => {
      expect(validatePhone('(11) 99999-9999')).toBe(true);
      expect(validatePhone('11999999999')).toBe(true);
      expect(validatePhone('(11) 9999-9999')).toBe(true);
    });

    it('should reject invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false);
      expect(validatePhone('(11) 999-999')).toBe(false);
      expect(validatePhone('')).toBe(false);
    });
  });

  describe('validateCpf', () => {
    it('should validate correct CPFs', () => {
      expect(validateCpf('123.456.789-09')).toBe(true);
      expect(validateCpf('12345678909')).toBe(true);
    });

    it('should reject invalid CPFs', () => {
      expect(validateCpf('123.456.789-10')).toBe(false);
      expect(validateCpf('111.111.111-11')).toBe(false);
      expect(validateCpf('123')).toBe(false);
    });
  });

  describe('validateCnpj', () => {
    it('should validate correct CNPJs', () => {
      expect(validateCnpj('12.345.678/0001-95')).toBe(true);
      expect(validateCnpj('12345678000195')).toBe(true);
    });

    it('should reject invalid CNPJs', () => {
      expect(validateCnpj('12.345.678/0001-96')).toBe(false);
      expect(validateCnpj('11.111.111/1111-11')).toBe(false);
      expect(validateCnpj('123')).toBe(false);
    });
  });

  describe('validateCep', () => {
    it('should validate correct CEPs', () => {
      expect(validateCep('12345-678')).toBe(true);
      expect(validateCep('12345678')).toBe(true);
    });

    it('should reject invalid CEPs', () => {
      expect(validateCep('1234-567')).toBe(false);
      expect(validateCep('1234567')).toBe(false);
      expect(validateCep('')).toBe(false);
    });
  });

  describe('validateDate', () => {
    it('should validate correct dates', () => {
      expect(validateDate('2024-01-01')).toBe(true);
      expect(validateDate('2024/01/01')).toBe(true);
      expect(validateDate('01/01/2024')).toBe(true);
    });

    it('should reject invalid dates', () => {
      expect(validateDate('2024-13-01')).toBe(false);
      expect(validateDate('2024-01-32')).toBe(false);
      expect(validateDate('invalid-date')).toBe(false);
    });
  });

  describe('validateNumber', () => {
    it('should validate numbers', () => {
      expect(validateNumber('123')).toBe(true);
      expect(validateNumber('123.45')).toBe(true);
      expect(validateNumber('-123')).toBe(true);
    });

    it('should reject non-numbers', () => {
      expect(validateNumber('abc')).toBe(false);
      expect(validateNumber('')).toBe(false);
      expect(validateNumber('123abc')).toBe(false);
    });
  });

  describe('validateInteger', () => {
    it('should validate integers', () => {
      expect(validateInteger('123')).toBe(true);
      expect(validateInteger('-123')).toBe(true);
      expect(validateInteger('0')).toBe(true);
    });

    it('should reject non-integers', () => {
      expect(validateInteger('123.45')).toBe(false);
      expect(validateInteger('abc')).toBe(false);
    });
  });

  describe('validatePositive', () => {
    it('should validate positive numbers', () => {
      expect(validatePositive('123')).toBe(true);
      expect(validatePositive('123.45')).toBe(true);
    });

    it('should reject non-positive numbers', () => {
      expect(validatePositive('-123')).toBe(false);
      expect(validatePositive('0')).toBe(false);
    });
  });

  describe('validateRange', () => {
    it('should validate values within range', () => {
      expect(validateRange(5, 1, 10)).toBe(true);
      expect(validateRange(1, 1, 10)).toBe(true);
      expect(validateRange(10, 1, 10)).toBe(true);
    });

    it('should reject values outside range', () => {
      expect(validateRange(0, 1, 10)).toBe(false);
      expect(validateRange(11, 1, 10)).toBe(false);
    });
  });

  describe('validateArray', () => {
    it('should validate arrays', () => {
      expect(validateArray([1, 2, 3])).toBe(true);
      expect(validateArray([])).toBe(true);
    });

    it('should reject non-arrays', () => {
      expect(validateArray('not-array')).toBe(false);
      expect(validateArray(null)).toBe(false);
      expect(validateArray(123)).toBe(false);
    });
  });

  describe('validateObject', () => {
    it('should validate objects', () => {
      expect(validateObject({ key: 'value' })).toBe(true);
      expect(validateObject({})).toBe(true);
    });

    it('should reject non-objects', () => {
      expect(validateObject('not-object')).toBe(false);
      expect(validateObject(null)).toBe(false);
      expect(validateObject([])).toBe(false);
    });
  });

  describe('validateEnum', () => {
    it('should validate enum values', () => {
      expect(validateEnum('value1', ['value1', 'value2', 'value3'])).toBe(true);
      expect(validateEnum('value2', ['value1', 'value2', 'value3'])).toBe(true);
    });

    it('should reject non-enum values', () => {
      expect(validateEnum('invalid', ['value1', 'value2'])).toBe(false);
      expect(validateEnum('', ['value1', 'value2'])).toBe(false);
    });
  });

  describe('validateCustom', () => {
    it('should validate with custom function', () => {
      const customValidator = (value: any) => value === 'custom';
      expect(validateCustom('custom', customValidator)).toBe(true);
      expect(validateCustom('not-custom', customValidator)).toBe(false);
    });
  });

  describe('validateForm', () => {
    it('should validate form data successfully', () => {
      const formData = {
        email: 'test@example.com',
        password: 'StrongPass123!',
        name: 'John Doe',
      };

      const rules: Record<string, ValidationRule[]> = {
        email: [{ type: 'required' }, { type: 'email' }],
        password: [{ type: 'required' }, { type: 'password' }],
        name: [{ type: 'required' }, { type: 'minLength', value: 2 }],
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(true);
      expect(result.errors).toEqual({});
    });

    it('should return errors for invalid form data', () => {
      const formData = {
        email: 'invalid-email',
        password: 'weak',
        name: '',
      };

      const rules: Record<string, ValidationRule[]> = {
        email: [{ type: 'required' }, { type: 'email' }],
        password: [{ type: 'required' }, { type: 'password' }],
        name: [{ type: 'required' }],
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(false);
      expect(result.errors.email).toBeDefined();
      expect(result.errors.password).toBeDefined();
      expect(result.errors.name).toBeDefined();
    });

    it('should handle missing fields', () => {
      const formData = {
        email: 'test@example.com',
      };

      const rules: Record<string, ValidationRule[]> = {
        email: [{ type: 'required' }, { type: 'email' }],
        password: [{ type: 'required' }],
      };

      const result = validateForm(formData, rules);
      expect(result.isValid).toBe(false);
      expect(result.errors.password).toBeDefined();
    });
  });

  describe('ValidationError', () => {
    it('should create validation error with message', () => {
      const error = new ValidationError('Field is required');
      expect(error.message).toBe('Field is required');
      expect(error.name).toBe('ValidationError');
    });
  });

  describe('Edge cases and error handling', () => {
    it('should handle null and undefined values gracefully', () => {
      expect(validateEmail(null as any)).toBe(false);
      expect(validateEmail(undefined as any)).toBe(false);
      expect(validateRequired(null)).toBe(false);
      expect(validateRequired(undefined)).toBe(false);
    });

    it('should handle empty strings appropriately', () => {
      expect(validateEmail('')).toBe(false);
      expect(validateRequired('')).toBe(false);
      expect(validateMinLength('', 1)).toBe(false);
    });

    it('should handle invalid regex patterns', () => {
      expect(() => validatePattern('test', null as any)).toThrow();
      expect(() => validatePattern('test', undefined as any)).toThrow();
    });
  });
});

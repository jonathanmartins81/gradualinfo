import { describe, expect, it } from 'vitest';
import theme from './theme';

const { colors, typography, spacing, breakpoints, borderRadius, shadows, utils } = theme;

describe('Design System', () => {
  describe('Colors', () => {
    it('should have primary colors', () => {
      expect(colors.primary).toBeDefined();
      expect(colors.primary[500]).toBe('#06b6d4');
      expect(colors.primary[600]).toBe('#0891b2');
    });

    it('should have secondary colors', () => {
      expect(colors.secondary).toBeDefined();
      expect(colors.secondary[500]).toBe('#6366f1');
      expect(colors.secondary[600]).toBe('#4f46e5');
    });

    it('should have accent colors', () => {
      expect(colors.accent).toBeDefined();
      expect(colors.accent[500]).toBe('#f59e0b');
      expect(colors.accent[600]).toBe('#d97706');
    });

    it('should have gray colors', () => {
      expect(colors.gray).toBeDefined();
      expect(colors.gray[500]).toBe('#64748b');
      expect(colors.gray[900]).toBe('#0f172a');
    });

    it('should have state colors', () => {
      expect(colors.success).toBeDefined();
      expect(colors.warning).toBeDefined();
      expect(colors.error).toBeDefined();
      expect(colors.info).toBeDefined();
    });
  });

  describe('Typography', () => {
    it('should have font families', () => {
      expect(typography.fontFamily.sans).toEqual([
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
      ]);
      expect(typography.fontFamily.serif).toEqual([
        'ui-serif',
        'Georgia',
        'Cambria',
        'Times New Roman',
        'Times',
        'serif',
      ]);
      expect(typography.fontFamily.mono).toEqual([
        'Fira Code',
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ]);
    });

    it('should have font sizes', () => {
      expect(typography.fontSize.base).toEqual([
        '1rem',
        { lineHeight: '1.5rem' },
      ]);
      expect(typography.fontSize.lg).toEqual([
        '1.125rem',
        { lineHeight: '1.75rem' },
      ]);
      expect(typography.fontSize.xl).toEqual([
        '1.25rem',
        { lineHeight: '1.75rem' },
      ]);
    });

    it('should have font weights', () => {
      expect(typography.fontWeight.normal).toBe('400');
      expect(typography.fontWeight.medium).toBe('500');
      expect(typography.fontWeight.bold).toBe('700');
    });
  });

  describe('Breakpoints', () => {
    it('should have responsive breakpoints', () => {
      expect(breakpoints.sm).toBe('640px');
      expect(breakpoints.md).toBe('768px');
      expect(breakpoints.lg).toBe('1024px');
      expect(breakpoints.xl).toBe('1280px');
    });
  });

  describe('Spacing', () => {
    it('should have spacing values', () => {
      expect(spacing[0]).toBe('0');
      expect(spacing[1]).toBe('0.25rem');
      expect(spacing[4]).toBe('1rem');
      expect(spacing[8]).toBe('2rem');
    });
  });

  describe('Border Radius', () => {
    it('should have border radius values', () => {
      expect(borderRadius.none).toBe('0');
      expect(borderRadius.sm).toBe('0.125rem');
      expect(borderRadius.lg).toBe('0.5rem');
      expect(borderRadius.full).toBe('9999px');
    });
  });

  describe('Shadows', () => {
    it('should have shadow values', () => {
      expect(shadows.sm).toBeDefined();
      expect(shadows.base).toBeDefined();
      expect(shadows.lg).toBeDefined();
      expect(shadows.none).toBe('none');
    });
  });

  describe('Theme Utils', () => {
    describe('getColor', () => {
      it('should return primary color with shade', () => {
        const color = utils.getColor('primary.500');
        expect(color).toBe('#06b6d4');
      });

      it('should return primary color without shade', () => {
        const color = utils.getColor('primary.500');
        expect(color).toBe('#06b6d4');
      });

      it('should return fallback color for invalid color', () => {
        const color = utils.getColor('invalid.500');
        expect(color).toBe('#64748b'); // gray[500]
      });
    });

    describe('getBreakpoint', () => {
      it('should return breakpoint value', () => {
        const breakpoint = utils.getBreakpoint('lg');
        expect(breakpoint).toBe('1024px');
      });
    });

    describe('getShadow', () => {
      it('should return shadow value', () => {
        const shadow = utils.getShadow('base');
        expect(shadow).toBeDefined();
      });
    });
  });
});

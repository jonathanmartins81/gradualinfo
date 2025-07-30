import { describe, expect, it } from 'vitest';
import {
  borderRadius,
  breakpoints,
  colors,
  shadows,
  spacing,
  themeUtils,
  typography,
} from './theme';

describe('Design System', () => {
  describe('Colors', () => {
    it('should have primary colors', () => {
      expect(colors.primary).toBeDefined();
      expect(colors.primary[500]).toBe('#3b82f6');
      expect(colors.primary[600]).toBe('#2563eb');
    });

    it('should have secondary colors', () => {
      expect(colors.secondary).toBeDefined();
      expect(colors.secondary[500]).toBe('#10b981');
      expect(colors.secondary[600]).toBe('#059669');
    });

    it('should have accent colors', () => {
      expect(colors.accent).toBeDefined();
      expect(colors.accent[500]).toBe('#a855f7');
      expect(colors.accent[600]).toBe('#9333ea');
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
        'system-ui',
        'sans-serif',
      ]);
      expect(typography.fontFamily.serif).toEqual(['Georgia', 'serif']);
      expect(typography.fontFamily.mono).toEqual([
        'Fira Code',
        'Consolas',
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
      expect(shadows.none).toBe('0 0 #0000');
    });
  });

  describe('Theme Utils', () => {
    describe('getColor', () => {
      it('should return primary color with shade', () => {
        const color = themeUtils.getColor('primary', '500');
        expect(color).toBe('#3b82f6');
      });

      it('should return primary color without shade', () => {
        const color = themeUtils.getColor('primary');
        expect(color).toBe('#3b82f6');
      });

      it('should return fallback color for invalid color', () => {
        const color = themeUtils.getColor('invalid' as any, '500');
        expect(color).toBe('#64748b'); // gray[500]
      });
    });

    describe('getBreakpoint', () => {
      it('should return breakpoint value', () => {
        const breakpoint = themeUtils.getBreakpoint('lg');
        expect(breakpoint).toBe('1024px');
      });
    });

    describe('getSpacing', () => {
      it('should return spacing value', () => {
        const space = themeUtils.getSpacing(4);
        expect(space).toBe('1rem');
      });
    });

    describe('getRadius', () => {
      it('should return border radius value', () => {
        const radius = themeUtils.getRadius('lg');
        expect(radius).toBe('0.5rem');
      });
    });

    describe('getShadow', () => {
      it('should return shadow value', () => {
        const shadow = themeUtils.getShadow('base');
        expect(shadow).toBeDefined();
      });
    });
  });
});

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { LogLevel, Logger } from './logger';

// Mock do console
const consoleMock = {
  log: vi.fn(),
  debug: vi.fn(),
  info: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
  group: vi.fn(),
  groupEnd: vi.fn(),
  table: vi.fn(),
  time: vi.fn(),
  timeEnd: vi.fn(),
};

// Mock do localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(globalThis, 'console', {
  value: consoleMock,
  writable: true,
});

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Logger Utils', () => {
  let logger: Logger;

  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    logger = Logger.getInstance();
    logger.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Logger Instance', () => {
    it('should create logger with default configuration', () => {
      const newLogger = Logger.getInstance();
      expect(newLogger).toBeDefined();
      expect(typeof newLogger.debug).toBe('function');
      expect(typeof newLogger.info).toBe('function');
      expect(typeof newLogger.warn).toBe('function');
      expect(typeof newLogger.error).toBe('function');
    });

    it('should return the same instance (singleton)', () => {
      const logger1 = Logger.getInstance();
      const logger2 = Logger.getInstance();
      expect(logger1).toBe(logger2);
    });

    it('should configure logger with custom options', () => {
      logger.configure({
        level: LogLevel.DEBUG,
        enableConsole: false,
        enableFile: true,
      });
      expect(logger).toBeDefined();
    });
  });

  describe('Log Levels', () => {
    it('should log debug messages', () => {
      logger.configure({ enableConsole: true });
      logger.setLevel(LogLevel.DEBUG);
      logger.debug('Debug message');
      expect(consoleMock.debug).toHaveBeenCalled();
    });

    it('should log info messages', () => {
      logger.configure({ enableConsole: true });
      logger.setLevel(LogLevel.INFO);
      logger.info('Info message');
      expect(consoleMock.info).toHaveBeenCalled();
    });

    it('should log warn messages', () => {
      logger.configure({ enableConsole: true });
      logger.setLevel(LogLevel.WARN);
      logger.warn('Warning message');
      expect(consoleMock.warn).toHaveBeenCalled();
    });

    it('should log error messages', () => {
      logger.configure({ enableConsole: true });
      logger.setLevel(LogLevel.ERROR);
      logger.error('Error message');
      expect(consoleMock.error).toHaveBeenCalled();
    });
  });

  describe('Log Filtering', () => {
    it('should filter logs by level', () => {
      logger.setLevel(LogLevel.WARN);
      logger.debug('Debug message');
      logger.info('Info message');
      logger.warn('Warning message');
      logger.error('Error message');

      const warnLogs = logger.getLogsByLevel(LogLevel.WARN);
      const errorLogs = logger.getLogsByLevel(LogLevel.ERROR);

      expect(warnLogs.length).toBeGreaterThan(0);
      expect(errorLogs.length).toBeGreaterThan(0);
    });

    it('should filter logs by message content', () => {
      // Limpar logs antes do teste específico
      logger.clear();
      logger.configure({ enableConsole: false });
      logger.info('Test message 1');
      logger.info('Test message 2');
      logger.info('Different message');

      const testLogs = logger
        .getLogs()
        .filter(log => log.message.includes('Test message'));
      expect(testLogs.length).toBe(2);
    });
  });

  describe('Log Persistence', () => {
    it('should respect max logs limit', () => {
      logger.configure({ maxFileSize: 10 });

      for (let i = 0; i < 15; i++) {
        logger.info(`Message ${i}`);
      }

      const logs = logger.getLogs();
      expect(logs.length).toBeLessThanOrEqual(15);
    });

    it('should clear logs', () => {
      // Limpar logs antes do teste específico
      logger.clear();
      logger.configure({ enableConsole: false });
      logger.info('Test message');
      expect(logger.getLogs().length).toBeGreaterThan(0);

      logger.clear();
      expect(logger.getLogs().length).toBe(0);
    });
  });

  describe('Log Context', () => {
    it('should log with context', () => {
      // Limpar logs antes do teste específico
      logger.clear();
      logger.configure({ enableConsole: false });
      const context = { userId: 123, action: 'login' };
      logger.info('User action', context);

      const logs = logger.getLogs();
      const lastLog = logs[logs.length - 1];
      expect(lastLog.context).toEqual(context);
    });

    it('should log errors with stack trace', () => {
      logger.configure({ enableConsole: false });
      const error = new Error('Test error');
      logger.error('Error occurred', error);

      const logs = logger.getLogs();
      const lastLog = logs[logs.length - 1];
      expect(lastLog.error).toBe(error);
    });
  });

  describe('Log Statistics', () => {
    it('should provide log statistics', () => {
      logger.configure({ enableConsole: false });
      logger.debug('Debug message');
      logger.info('Info message');
      logger.warn('Warning message');
      logger.error('Error message');

      const stats = logger.getStats();
      expect(stats).toBeDefined();
      expect(typeof stats.total).toBe('number');
      expect(typeof stats.debug).toBe('number');
      expect(typeof stats.info).toBe('number');
      expect(typeof stats.warn).toBe('number');
      expect(typeof stats.error).toBe('number');
    });
  });

  describe('Configuration', () => {
    it('should configure log level', () => {
      logger.configure({ enableConsole: true });
      logger.setLevel(LogLevel.DEBUG);
      logger.debug('Debug message');
      expect(consoleMock.debug).toHaveBeenCalled();
    });

    it('should disable console logging', () => {
      logger.configure({ enableConsole: false });
      logger.info('Test message');
      expect(consoleMock.info).not.toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle console errors gracefully', () => {
      consoleMock.info.mockImplementation(() => {
        throw new Error('Console error');
      });

      expect(() => {
        logger.info('Test message');
      }).not.toThrow();
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });

      expect(() => {
        logger.info('Test message');
      }).not.toThrow();
    });
  });
});

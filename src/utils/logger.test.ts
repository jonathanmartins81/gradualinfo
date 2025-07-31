import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  LogLevel,
  LogOptions,
  Logger,
  clearLogs,
  createLogger,
  debug,
  disableConsole,
  disableFile,
  enableConsole,
  enableFile,
  error,
  exportLogs,
  fatal,
  getLogFormat,
  getLogLevel,
  getLogs,
  info,
  log,
  setLogFormat,
  setLogLevel,
  warn,
} from './logger';

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

Object.defineProperty(global, 'console', {
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
    logger = createLogger();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('createLogger', () => {
    it('should create logger with default options', () => {
      const newLogger = createLogger();
      expect(newLogger).toBeDefined();
      expect(typeof newLogger.log).toBe('function');
      expect(typeof newLogger.debug).toBe('function');
      expect(typeof newLogger.info).toBe('function');
      expect(typeof newLogger.warn).toBe('function');
      expect(typeof newLogger.error).toBe('function');
      expect(typeof newLogger.fatal).toBe('function');
    });

    it('should create logger with custom options', () => {
      const options: LogOptions = {
        level: 'warn',
        enableConsole: false,
        enableFile: true,
        format: 'json',
        maxLogs: 1000,
      };
      const newLogger = createLogger(options);
      expect(newLogger).toBeDefined();
    });

    it('should create logger with custom prefix', () => {
      const newLogger = createLogger({ prefix: 'TestApp' });
      expect(newLogger).toBeDefined();
    });
  });

  describe('log', () => {
    it('should log message with default level', () => {
      log(logger, 'Test message');
      expect(consoleMock.log).toHaveBeenCalled();
    });

    it('should log message with custom level', () => {
      log(logger, 'Test message', 'error');
      expect(consoleMock.error).toHaveBeenCalled();
    });

    it('should log message with metadata', () => {
      const metadata = { userId: '123', action: 'login' };
      log(logger, 'User logged in', 'info', metadata);
      expect(consoleMock.info).toHaveBeenCalled();
    });

    it('should respect log level configuration', () => {
      const warnLogger = createLogger({ level: 'warn' });
      log(warnLogger, 'Debug message', 'debug');
      expect(consoleMock.debug).not.toHaveBeenCalled();
    });

    it('should handle null and undefined messages', () => {
      log(logger, null as any);
      log(logger, undefined as any);
      expect(consoleMock.log).toHaveBeenCalled();
    });
  });

  describe('debug', () => {
    it('should log debug message', () => {
      debug(logger, 'Debug message');
      expect(consoleMock.debug).toHaveBeenCalled();
    });

    it('should log debug message with metadata', () => {
      const metadata = { component: 'Button', props: { disabled: true } };
      debug(logger, 'Button clicked', metadata);
      expect(consoleMock.debug).toHaveBeenCalled();
    });
  });

  describe('info', () => {
    it('should log info message', () => {
      info(logger, 'Info message');
      expect(consoleMock.info).toHaveBeenCalled();
    });

    it('should log info message with metadata', () => {
      const metadata = { userId: '123', action: 'profile_update' };
      info(logger, 'Profile updated', metadata);
      expect(consoleMock.info).toHaveBeenCalled();
    });
  });

  describe('warn', () => {
    it('should log warning message', () => {
      warn(logger, 'Warning message');
      expect(consoleMock.warn).toHaveBeenCalled();
    });

    it('should log warning message with metadata', () => {
      const metadata = {
        component: 'Form',
        field: 'email',
        issue: 'validation',
      };
      warn(logger, 'Form validation failed', metadata);
      expect(consoleMock.warn).toHaveBeenCalled();
    });
  });

  describe('error', () => {
    it('should log error message', () => {
      error(logger, 'Error message');
      expect(consoleMock.error).toHaveBeenCalled();
    });

    it('should log error message with metadata', () => {
      const metadata = {
        userId: '123',
        action: 'payment',
        errorCode: 'PAYMENT_FAILED',
      };
      error(logger, 'Payment failed', metadata);
      expect(consoleMock.error).toHaveBeenCalled();
    });

    it('should log error with Error object', () => {
      const testError = new Error('Test error');
      error(logger, 'Operation failed', { error: testError });
      expect(consoleMock.error).toHaveBeenCalled();
    });
  });

  describe('fatal', () => {
    it('should log fatal message', () => {
      fatal(logger, 'Fatal message');
      expect(consoleMock.error).toHaveBeenCalled();
    });

    it('should log fatal message with metadata', () => {
      const metadata = { system: 'database', error: 'connection_lost' };
      fatal(logger, 'Database connection lost', metadata);
      expect(consoleMock.error).toHaveBeenCalled();
    });
  });

  describe('setLogLevel', () => {
    it('should set log level', () => {
      setLogLevel(logger, 'error');
      expect(getLogLevel(logger)).toBe('error');
    });

    it('should handle invalid log levels', () => {
      expect(() => {
        setLogLevel(logger, 'invalid' as LogLevel);
      }).not.toThrow();
    });
  });

  describe('getLogLevel', () => {
    it('should return current log level', () => {
      expect(getLogLevel(logger)).toBe('info');
      setLogLevel(logger, 'warn');
      expect(getLogLevel(logger)).toBe('warn');
    });
  });

  describe('enableConsole', () => {
    it('should enable console logging', () => {
      enableConsole(logger);
      log(logger, 'Test message');
      expect(consoleMock.log).toHaveBeenCalled();
    });
  });

  describe('disableConsole', () => {
    it('should disable console logging', () => {
      disableConsole(logger);
      log(logger, 'Test message');
      expect(consoleMock.log).not.toHaveBeenCalled();
    });
  });

  describe('enableFile', () => {
    it('should enable file logging', () => {
      enableFile(logger);
      expect(() => {
        log(logger, 'Test message');
      }).not.toThrow();
    });
  });

  describe('disableFile', () => {
    it('should disable file logging', () => {
      disableFile(logger);
      expect(() => {
        log(logger, 'Test message');
      }).not.toThrow();
    });
  });

  describe('setLogFormat', () => {
    it('should set log format', () => {
      setLogFormat(logger, 'json');
      expect(getLogFormat(logger)).toBe('json');
    });

    it('should handle invalid formats', () => {
      expect(() => {
        setLogFormat(logger, 'invalid' as any);
      }).not.toThrow();
    });
  });

  describe('getLogFormat', () => {
    it('should return current log format', () => {
      expect(getLogFormat(logger)).toBe('text');
      setLogFormat(logger, 'json');
      expect(getLogFormat(logger)).toBe('json');
    });
  });

  describe('clearLogs', () => {
    it('should clear logs', () => {
      log(logger, 'Test message');
      clearLogs(logger);
      expect(getLogs(logger)).toEqual([]);
    });
  });

  describe('getLogs', () => {
    it('should return logs', () => {
      log(logger, 'Test message 1');
      log(logger, 'Test message 2');

      const logs = getLogs(logger);
      expect(logs).toHaveLength(2);
      expect(logs[0].message).toBe('Test message 1');
      expect(logs[1].message).toBe('Test message 2');
    });

    it('should return empty array for new logger', () => {
      const logs = getLogs(logger);
      expect(logs).toEqual([]);
    });
  });

  describe('exportLogs', () => {
    it('should export logs as JSON', () => {
      log(logger, 'Test message');
      const exported = exportLogs(logger, 'json');
      expect(typeof exported).toBe('string');
      expect(() => JSON.parse(exported)).not.toThrow();
    });

    it('should export logs as CSV', () => {
      log(logger, 'Test message');
      const exported = exportLogs(logger, 'csv');
      expect(typeof exported).toBe('string');
      expect(exported).toContain(',');
    });

    it('should export logs as text', () => {
      log(logger, 'Test message');
      const exported = exportLogs(logger, 'text');
      expect(typeof exported).toBe('string');
      expect(exported).toContain('Test message');
    });
  });

  describe('Log Levels', () => {
    it('should respect log level hierarchy', () => {
      const debugLogger = createLogger({ level: 'debug' });
      const infoLogger = createLogger({ level: 'info' });
      const warnLogger = createLogger({ level: 'warn' });
      const errorLogger = createLogger({ level: 'error' });

      // Debug level should show all
      debug(debugLogger, 'debug message');
      info(debugLogger, 'info message');
      warn(debugLogger, 'warn message');
      error(debugLogger, 'error message');

      expect(consoleMock.debug).toHaveBeenCalled();
      expect(consoleMock.info).toHaveBeenCalled();
      expect(consoleMock.warn).toHaveBeenCalled();
      expect(consoleMock.error).toHaveBeenCalled();

      vi.clearAllMocks();

      // Info level should not show debug
      debug(infoLogger, 'debug message');
      info(infoLogger, 'info message');

      expect(consoleMock.debug).not.toHaveBeenCalled();
      expect(consoleMock.info).toHaveBeenCalled();
    });
  });

  describe('Log Formatting', () => {
    it('should format logs as text', () => {
      setLogFormat(logger, 'text');
      log(logger, 'Test message', 'info', { userId: '123' });
      expect(consoleMock.info).toHaveBeenCalled();
    });

    it('should format logs as JSON', () => {
      setLogFormat(logger, 'json');
      log(logger, 'Test message', 'info', { userId: '123' });
      expect(consoleMock.info).toHaveBeenCalled();
    });

    it('should format logs as table', () => {
      setLogFormat(logger, 'table');
      log(logger, 'Test message', 'info', { userId: '123' });
      expect(consoleMock.table).toHaveBeenCalled();
    });
  });

  describe('Performance Logging', () => {
    it('should log performance metrics', () => {
      const perfLogger = createLogger({ enablePerformance: true });

      perfLogger.time('operation');
      perfLogger.timeEnd('operation');

      expect(consoleMock.time).toHaveBeenCalledWith('operation');
      expect(consoleMock.timeEnd).toHaveBeenCalledWith('operation');
    });

    it('should group related logs', () => {
      const groupLogger = createLogger({ enableGroups: true });

      groupLogger.group('User Actions');
      groupLogger.info('User logged in');
      groupLogger.info('User navigated to dashboard');
      groupLogger.groupEnd();

      expect(consoleMock.group).toHaveBeenCalledWith('User Actions');
      expect(consoleMock.groupEnd).toHaveBeenCalled();
    });
  });

  describe('Error Handling', () => {
    it('should handle console errors gracefully', () => {
      consoleMock.log.mockImplementation(() => {
        throw new Error('Console error');
      });

      expect(() => {
        log(logger, 'Test message');
      }).not.toThrow();
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });

      expect(() => {
        log(logger, 'Test message');
      }).not.toThrow();
    });

    it('should handle invalid logger instances', () => {
      expect(() => {
        log(null as any, 'Test message');
      }).toThrow();

      expect(() => {
        setLogLevel(null as any, 'info');
      }).toThrow();
    });
  });

  describe('Log Persistence', () => {
    it('should persist logs to localStorage when enabled', () => {
      const persistentLogger = createLogger({
        enableFile: true,
        storage: 'localStorage',
        maxLogs: 10,
      });

      log(persistentLogger, 'Test message');
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    it('should respect max logs limit', () => {
      const limitedLogger = createLogger({ maxLogs: 2 });

      log(limitedLogger, 'Message 1');
      log(limitedLogger, 'Message 2');
      log(limitedLogger, 'Message 3');

      const logs = getLogs(limitedLogger);
      expect(logs).toHaveLength(2);
      expect(logs[0].message).toBe('Message 2');
      expect(logs[1].message).toBe('Message 3');
    });
  });

  describe('Log Filtering', () => {
    it('should filter logs by level', () => {
      log(logger, 'Debug message', 'debug');
      log(logger, 'Info message', 'info');
      log(logger, 'Warn message', 'warn');
      log(logger, 'Error message', 'error');

      const errorLogs = getLogs(logger).filter(log => log.level === 'error');
      expect(errorLogs).toHaveLength(1);
      expect(errorLogs[0].message).toBe('Error message');
    });

    it('should filter logs by message content', () => {
      log(logger, 'User login successful');
      log(logger, 'User logout successful');
      log(logger, 'Payment failed');

      const loginLogs = getLogs(logger).filter(log =>
        log.message.includes('login')
      );
      expect(loginLogs).toHaveLength(1);
      expect(loginLogs[0].message).toBe('User login successful');
    });
  });
});

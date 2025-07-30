/**
 * Sistema de Logging - Aqua9 Boilerplate v2
 *
 * Implementa um sistema de logging estruturado para facilitar
 * debugging, monitoramento e análise de performance.
 *
 * @author Jonathan Simão
 * @version 2.0.0
 * @since 2024-01-01
 */

/**
 * Níveis de log disponíveis
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
}

/**
 * Interface para configuração do logger
 */
interface LoggerConfig {
  level: LogLevel;
  enableConsole: boolean;
  enableFile: boolean;
  filePath?: string;
  maxFileSize?: number;
  maxFiles?: number;
}

/**
 * Interface para entrada de log
 */
interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: Record<string, unknown>;
  error?: Error;
}

/**
 * Sistema de Logging Singleton
 *
 * Implementa padrão Singleton para garantir uma única instância
 * do logger em toda a aplicação.
 */
export class Logger {
  private static instance: Logger;
  private config: LoggerConfig;
  private logs: LogEntry[] = [];

  private constructor() {
    this.config = {
      level: LogLevel.INFO,
      enableConsole: true,
      enableFile: false,
    };
  }

  /**
   * Obtém a instância única do Logger
   */
  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  /**
   * Configura o logger
   */
  configure(config: Partial<LoggerConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Define o nível de log
   */
  setLevel(level: LogLevel): void {
    this.config.level = level;
  }

  /**
   * Log de debug
   */
  debug(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.DEBUG, message, context);
  }

  /**
   * Log de informação
   */
  info(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.INFO, message, context);
  }

  /**
   * Log de aviso
   */
  warn(message: string, context?: Record<string, unknown>): void {
    this.log(LogLevel.WARN, message, context);
  }

  /**
   * Log de erro
   */
  error(
    message: string,
    error?: Error,
    context?: Record<string, unknown>
  ): void {
    this.log(LogLevel.ERROR, message, context, error);
  }

  /**
   * Método interno para processar logs
   */
  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
    error?: Error
  ): void {
    if (level < this.config.level) {
      return;
    }

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      context,
      error,
    };

    this.logs.push(entry);

    // Limita o número de logs em memória
    if (this.logs.length > 1000) {
      this.logs = this.logs.slice(-500);
    }

    if (this.config.enableConsole) {
      this.writeToConsole(entry);
    }

    if (this.config.enableFile) {
      this.writeToFile(entry);
    }
  }

  /**
   * Escreve log no console
   */
  private writeToConsole(entry: LogEntry): void {
    const { timestamp, level, message, context, error } = entry;
    const levelName = LogLevel[level];
    const prefix = `[${timestamp}] [${levelName}]`;

    switch (level) {
      case LogLevel.DEBUG:
        // eslint-disable-next-line no-console
        console.debug(`${prefix} ${message}`, context || '');
        break;
      case LogLevel.INFO:
        // eslint-disable-next-line no-console
        console.info(`${prefix} ${message}`, context || '');
        break;
      case LogLevel.WARN:
        // eslint-disable-next-line no-console
        console.warn(`${prefix} ${message}`, context || '');
        break;
      case LogLevel.ERROR:
        // eslint-disable-next-line no-console
        console.error(`${prefix} ${message}`, context || '', error || '');
        break;
    }
  }

  /**
   * Escreve log em arquivo (implementação básica)
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private writeToFile(_entry: LogEntry): void {
    // Implementação básica - em produção, considere usar
    // bibliotecas como winston ou pino
    // Desabilitado para evitar problemas de build
  }

  /**
   * Obtém todos os logs
   */
  getLogs(): LogEntry[] {
    return [...this.logs];
  }

  /**
   * Obtém logs por nível
   */
  getLogsByLevel(level: LogLevel): LogEntry[] {
    return this.logs.filter(log => log.level === level);
  }

  /**
   * Limpa todos os logs
   */
  clear(): void {
    this.logs = [];
  }

  /**
   * Obtém estatísticas dos logs
   */
  getStats() {
    const stats = {
      total: this.logs.length,
      debug: 0,
      info: 0,
      warn: 0,
      error: 0,
    };

    this.logs.forEach(log => {
      switch (log.level) {
        case LogLevel.DEBUG:
          stats.debug++;
          break;
        case LogLevel.INFO:
          stats.info++;
          break;
        case LogLevel.WARN:
          stats.warn++;
          break;
        case LogLevel.ERROR:
          stats.error++;
          break;
      }
    });

    return stats;
  }
}

/**
 * Instância global do logger
 */
export const logger = Logger.getInstance();

/**
 * Utilitários de logging para casos de uso comuns
 */
export const logUtils = {
  /**
   * Log de performance
   */
  performance: (
    operation: string,
    duration: number,
    context?: Record<string, unknown>
  ): void => {
    logger.info(`Performance: ${operation} took ${duration}ms`, {
      operation,
      duration,
      ...context,
    });
  },

  /**
   * Log de erro com contexto
   */
  error: (
    message: string,
    error: Error,
    context?: Record<string, unknown>
  ): void => {
    logger.error(message, error, {
      errorName: error.name,
      errorMessage: error.message,
      errorStack: error.stack,
      ...context,
    });
  },

  /**
   * Log de início de operação
   */
  start: (operation: string, context?: Record<string, unknown>): string => {
    const id = Math.random().toString(36).substr(2, 9);
    logger.debug(`Started: ${operation}`, { operationId: id, ...context });
    return id;
  },

  /**
   * Log de fim de operação
   */
  end: (
    operation: string,
    operationId: string,
    context?: Record<string, unknown>
  ): void => {
    logger.debug(`Completed: ${operation}`, { operationId, ...context });
  },
};

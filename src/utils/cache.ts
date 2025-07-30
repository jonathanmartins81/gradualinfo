/**
 * Sistema de Cache - Aqua9 Boilerplate v2
 *
 * Implementa um sistema de cache em memória para otimizar
 * performance e reduzir chamadas desnecessárias.
 *
 * @author Jonathan Simão
 * @version 2.0.0
 * @since 2024-01-01
 */

/**
 * Interface para itens do cache
 */
interface CacheItem<T> {
  value: T;
  ttl: number | null; // Timestamp de expiração
  createdAt: number;
}

/**
 * Gerenciador de Cache Singleton
 *
 * Implementa padrão Singleton para garantir uma única instância
 * do cache em toda a aplicação.
 */
export class CacheManager {
  private static instance: CacheManager;
  private cache = new Map<string, CacheItem<unknown>>();
  private maxSize: number = 1000; // Tamanho máximo do cache

  private constructor() {}

  /**
   * Obtém a instância única do CacheManager
   */
  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager();
    }
    return CacheManager.instance;
  }

  /**
   * Define o tamanho máximo do cache
   */
  setMaxSize(size: number): void {
    this.maxSize = size;
    this.cleanup();
  }

  /**
   * Armazena um valor no cache
   *
   * @param key - Chave única para o item
   * @param value - Valor a ser armazenado
   * @param ttl - Tempo de vida em milissegundos (opcional)
   */
  set<T>(key: string, value: T, ttl?: number): void {
    // Limpa cache se necessário
    if (this.cache.size >= this.maxSize) {
      this.cleanup();
    }

    const now = Date.now();
    const item: CacheItem<T> = {
      value,
      ttl: ttl ? now + ttl : null,
      createdAt: now,
    };

    this.cache.set(key, item);
  }

  /**
   * Obtém um valor do cache
   *
   * @param key - Chave do item
   * @returns Valor armazenado ou null se não encontrado/expirado
   */
  get<T>(key: string): T | null {
    const item = this.cache.get(key);

    if (!item) {
      return null;
    }

    // Verifica se o item expirou
    if (item.ttl && Date.now() > item.ttl) {
      this.cache.delete(key);
      return null;
    }

    return item.value as T;
  }

  /**
   * Verifica se uma chave existe no cache
   */
  has(key: string): boolean {
    const item = this.cache.get(key);

    if (!item) {
      return false;
    }

    // Verifica se o item expirou
    if (item.ttl && Date.now() > item.ttl) {
      this.cache.delete(key);
      return false;
    }

    return true;
  }

  /**
   * Remove um item do cache
   */
  delete(key: string): boolean {
    return this.cache.delete(key);
  }

  /**
   * Limpa todo o cache
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Obtém estatísticas do cache
   */
  getStats() {
    const now = Date.now();
    let expiredCount = 0;
    let validCount = 0;

    for (const [key, item] of this.cache.entries()) {
      if (item.ttl && now > item.ttl) {
        expiredCount++;
        this.cache.delete(key);
      } else {
        validCount++;
      }
    }

    return {
      total: this.cache.size,
      valid: validCount,
      expired: expiredCount,
      maxSize: this.maxSize,
      usage: (this.cache.size / this.maxSize) * 100,
    };
  }

  /**
   * Limpa itens expirados do cache
   */
  private cleanup(): void {
    const now = Date.now();
    const keysToDelete: string[] = [];

    for (const [key, item] of this.cache.entries()) {
      if (item.ttl && now > item.ttl) {
        keysToDelete.push(key);
      }
    }

    keysToDelete.forEach(key => this.cache.delete(key));
  }
}

/**
 * Instância global do cache
 */
export const cache = CacheManager.getInstance();

/**
 * Utilitários de cache para casos de uso comuns
 */
export const cacheUtils = {
  /**
   * Cache com TTL padrão de 5 minutos
   */
  short: <T>(key: string, value: T): void => {
    cache.set(key, value, 5 * 60 * 1000);
  },

  /**
   * Cache com TTL padrão de 1 hora
   */
  medium: <T>(key: string, value: T): void => {
    cache.set(key, value, 60 * 60 * 1000);
  },

  /**
   * Cache com TTL padrão de 24 horas
   */
  long: <T>(key: string, value: T): void => {
    cache.set(key, value, 24 * 60 * 60 * 1000);
  },

  /**
   * Cache sem expiração
   */
  permanent: <T>(key: string, value: T): void => {
    cache.set(key, value);
  },
};

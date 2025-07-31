import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  Cache,
  CacheOptions,
  clearCache,
  createCache,
  deleteCache,
  getCache,
  getCacheKeys,
  getCacheSize,
  getCacheStats,
  hasCache,
  setCache,
} from './cache';

// Mock do localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  key: vi.fn(),
  length: 0,
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('Cache Utils', () => {
  let cache: Cache;

  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
    cache = createCache();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('createCache', () => {
    it('should create cache with default options', () => {
      const newCache = createCache();
      expect(newCache).toBeDefined();
      expect(typeof newCache.get).toBe('function');
      expect(typeof newCache.set).toBe('function');
      expect(typeof newCache.delete).toBe('function');
      expect(typeof newCache.clear).toBe('function');
    });

    it('should create cache with custom options', () => {
      const options: CacheOptions = {
        maxSize: 100,
        ttl: 60000,
        storage: 'memory',
      };
      const newCache = createCache(options);
      expect(newCache).toBeDefined();
    });

    it('should create cache with localStorage storage', () => {
      const options: CacheOptions = {
        storage: 'localStorage',
        prefix: 'test-cache',
      };
      const newCache = createCache(options);
      expect(newCache).toBeDefined();
    });
  });

  describe('setCache', () => {
    it('should set cache item successfully', () => {
      const key = 'test-key';
      const value = { data: 'test-value' };

      setCache(cache, key, value);

      expect(cache.get(key)).toEqual(value);
    });

    it('should set cache item with TTL', () => {
      const key = 'test-key';
      const value = { data: 'test-value' };
      const ttl = 1000; // 1 second

      setCache(cache, key, value, ttl);

      expect(cache.get(key)).toEqual(value);
    });

    it('should overwrite existing cache item', () => {
      const key = 'test-key';
      const value1 = { data: 'value1' };
      const value2 = { data: 'value2' };

      setCache(cache, key, value1);
      setCache(cache, key, value2);

      expect(cache.get(key)).toEqual(value2);
    });

    it('should handle null and undefined values', () => {
      setCache(cache, 'null-key', null);
      setCache(cache, 'undefined-key', undefined);

      expect(cache.get('null-key')).toBeNull();
      expect(cache.get('undefined-key')).toBeUndefined();
    });

    it('should handle complex objects', () => {
      const complexObject = {
        string: 'test',
        number: 123,
        boolean: true,
        array: [1, 2, 3],
        object: { nested: 'value' },
        date: new Date(),
      };

      setCache(cache, 'complex', complexObject);

      expect(cache.get('complex')).toEqual(complexObject);
    });
  });

  describe('getCache', () => {
    it('should get cache item successfully', () => {
      const key = 'test-key';
      const value = { data: 'test-value' };

      setCache(cache, key, value);
      const result = getCache(cache, key);

      expect(result).toEqual(value);
    });

    it('should return undefined for non-existent key', () => {
      const result = getCache(cache, 'non-existent');
      expect(result).toBeUndefined();
    });

    it('should return default value for non-existent key', () => {
      const defaultValue = { default: 'value' };
      const result = getCache(cache, 'non-existent', defaultValue);
      expect(result).toEqual(defaultValue);
    });

    it('should handle expired cache items', async () => {
      const key = 'expired-key';
      const value = { data: 'test-value' };
      const ttl = 1; // 1ms

      setCache(cache, key, value, ttl);

      // Wait for expiration
      await new Promise(resolve => setTimeout(resolve, 10));

      const result = getCache(cache, key);
      expect(result).toBeUndefined();
    });
  });

  describe('deleteCache', () => {
    it('should delete cache item successfully', () => {
      const key = 'test-key';
      const value = { data: 'test-value' };

      setCache(cache, key, value);
      expect(cache.get(key)).toEqual(value);

      deleteCache(cache, key);
      expect(cache.get(key)).toBeUndefined();
    });

    it('should handle deleting non-existent key', () => {
      expect(() => {
        deleteCache(cache, 'non-existent');
      }).not.toThrow();
    });

    it('should return true for successful deletion', () => {
      const key = 'test-key';
      setCache(cache, key, 'value');

      const result = deleteCache(cache, key);
      expect(result).toBe(true);
    });

    it('should return false for non-existent key deletion', () => {
      const result = deleteCache(cache, 'non-existent');
      expect(result).toBe(false);
    });
  });

  describe('clearCache', () => {
    it('should clear all cache items', () => {
      setCache(cache, 'key1', 'value1');
      setCache(cache, 'key2', 'value2');
      setCache(cache, 'key3', 'value3');

      expect(cache.get('key1')).toBe('value1');
      expect(cache.get('key2')).toBe('value2');
      expect(cache.get('key3')).toBe('value3');

      clearCache(cache);

      expect(cache.get('key1')).toBeUndefined();
      expect(cache.get('key2')).toBeUndefined();
      expect(cache.get('key3')).toBeUndefined();
    });

    it('should handle clearing empty cache', () => {
      expect(() => {
        clearCache(cache);
      }).not.toThrow();
    });
  });

  describe('hasCache', () => {
    it('should return true for existing cache item', () => {
      const key = 'test-key';
      setCache(cache, key, 'value');

      expect(hasCache(cache, key)).toBe(true);
    });

    it('should return false for non-existent cache item', () => {
      expect(hasCache(cache, 'non-existent')).toBe(false);
    });

    it('should return false for expired cache item', async () => {
      const key = 'expired-key';
      const ttl = 1; // 1ms

      setCache(cache, key, 'value', ttl);

      // Wait for expiration
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(hasCache(cache, key)).toBe(false);
    });
  });

  describe('getCacheKeys', () => {
    it('should return all cache keys', () => {
      setCache(cache, 'key1', 'value1');
      setCache(cache, 'key2', 'value2');
      setCache(cache, 'key3', 'value3');

      const keys = getCacheKeys(cache);
      expect(keys).toContain('key1');
      expect(keys).toContain('key2');
      expect(keys).toContain('key3');
      expect(keys).toHaveLength(3);
    });

    it('should return empty array for empty cache', () => {
      const keys = getCacheKeys(cache);
      expect(keys).toEqual([]);
    });
  });

  describe('getCacheSize', () => {
    it('should return correct cache size', () => {
      expect(getCacheSize(cache)).toBe(0);

      setCache(cache, 'key1', 'value1');
      expect(getCacheSize(cache)).toBe(1);

      setCache(cache, 'key2', 'value2');
      expect(getCacheSize(cache)).toBe(2);

      deleteCache(cache, 'key1');
      expect(getCacheSize(cache)).toBe(1);
    });
  });

  describe('getCacheStats', () => {
    it('should return cache statistics', () => {
      setCache(cache, 'key1', 'value1');
      setCache(cache, 'key2', 'value2');

      const stats = getCacheStats(cache);

      expect(stats).toHaveProperty('size');
      expect(stats).toHaveProperty('keys');
      expect(stats).toHaveProperty('hits');
      expect(stats).toHaveProperty('misses');
      expect(stats.size).toBe(2);
      expect(stats.keys).toContain('key1');
      expect(stats.keys).toContain('key2');
    });
  });

  describe('TTL (Time To Live)', () => {
    it('should expire cache items after TTL', async () => {
      const key = 'ttl-test';
      const value = 'test-value';
      const ttl = 50; // 50ms

      setCache(cache, key, value, ttl);
      expect(cache.get(key)).toBe(value);

      // Wait for expiration
      await new Promise(resolve => setTimeout(resolve, 60));

      expect(cache.get(key)).toBeUndefined();
    });

    it('should not expire cache items before TTL', async () => {
      const key = 'ttl-test';
      const value = 'test-value';
      const ttl = 100; // 100ms

      setCache(cache, key, value, ttl);

      // Wait less than TTL
      await new Promise(resolve => setTimeout(resolve, 50));

      expect(cache.get(key)).toBe(value);
    });
  });

  describe('Max Size', () => {
    it('should respect max size limit', () => {
      const limitedCache = createCache({ maxSize: 2 });

      setCache(limitedCache, 'key1', 'value1');
      setCache(limitedCache, 'key2', 'value2');
      setCache(limitedCache, 'key3', 'value3'); // Should evict key1

      expect(limitedCache.get('key1')).toBeUndefined();
      expect(limitedCache.get('key2')).toBe('value2');
      expect(limitedCache.get('key3')).toBe('value3');
    });

    it('should evict least recently used items', () => {
      const limitedCache = createCache({ maxSize: 2 });

      setCache(limitedCache, 'key1', 'value1');
      setCache(limitedCache, 'key2', 'value2');

      // Access key1 to make it recently used
      limitedCache.get('key1');

      setCache(limitedCache, 'key3', 'value3'); // Should evict key2

      expect(limitedCache.get('key1')).toBe('value1');
      expect(limitedCache.get('key2')).toBeUndefined();
      expect(limitedCache.get('key3')).toBe('value3');
    });
  });

  describe('localStorage Storage', () => {
    it('should use localStorage when configured', () => {
      const localStorageCache = createCache({
        storage: 'localStorage',
        prefix: 'test',
      });

      setCache(localStorageCache, 'key', 'value');

      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });

      const localStorageCache = createCache({ storage: 'localStorage' });

      expect(() => {
        setCache(localStorageCache, 'key', 'value');
      }).not.toThrow();
    });
  });

  describe('Error Handling', () => {
    it('should handle JSON serialization errors', () => {
      const circularObject: any = {};
      circularObject.self = circularObject;

      expect(() => {
        setCache(cache, 'circular', circularObject);
      }).not.toThrow();
    });

    it('should handle invalid cache instances', () => {
      expect(() => {
        getCache(null as any, 'key');
      }).toThrow();

      expect(() => {
        setCache(null as any, 'key', 'value');
      }).toThrow();
    });
  });

  describe('Performance', () => {
    it('should handle large number of cache operations', () => {
      const iterations = 1000;

      for (let i = 0; i < iterations; i++) {
        setCache(cache, `key${i}`, `value${i}`);
      }

      expect(getCacheSize(cache)).toBe(iterations);

      for (let i = 0; i < iterations; i++) {
        expect(cache.get(`key${i}`)).toBe(`value${i}`);
      }
    });

    it('should handle rapid cache operations', () => {
      const operations = 100;

      for (let i = 0; i < operations; i++) {
        setCache(cache, `key${i}`, `value${i}`);
        cache.get(`key${i}`);
        deleteCache(cache, `key${i}`);
      }

      expect(getCacheSize(cache)).toBe(0);
    });
  });
});

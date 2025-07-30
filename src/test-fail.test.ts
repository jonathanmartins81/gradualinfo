import { describe, expect, it } from 'vitest';

describe('Teste que vai falhar', () => {
  it('deve falhar intencionalmente', () => {
    expect(1 + 1).toBe(3); // Isso vai falhar
  });
});

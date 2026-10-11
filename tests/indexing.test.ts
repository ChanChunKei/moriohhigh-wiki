import { describe, expect, it } from 'vitest';
import { excludeFromIndex } from '../src/config/indexing';

describe('editorial indexing policy', () => {
  it('excludes navigation archives while keeping substantive guides indexable', () => {
    for (const path of [
      '/tags',
      '/tags/roblox/',
      '/recent/',
      '/guides/',
      '/resources/',
    ]) {
      expect(excludeFromIndex(path)).toBe(true);
    }
    for (const path of [
      '/',
      '/faq/',
      '/contact/',
      '/guides/how-to-play/',
      '/resources/release-information/',
      '/resources/community-links/',
    ]) {
      expect(excludeFromIndex(path)).toBe(false);
    }
  });
});

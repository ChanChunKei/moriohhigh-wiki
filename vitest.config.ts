import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
// These retained upstream suites assert Anvil Quest demo assets or removed marketing pages.
export const templateOnlySuites = ['apply-template', 'community-digest', 'landing-paths', 'redirects', 'changelog', 'codes-consistency', 'handbook'];

export default defineConfig({
  resolve: {
    alias: {
      // fileURLToPath 还原 percent-encoding；`.pathname` 在含中文的目录下会得到 %E7... 导致模块解析失败
      '~': fileURLToPath(new URL('./src/', import.meta.url)),
    },
  },
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    exclude: templateOnlySuites.map((name) => `tests/${name}.test.ts`),
  },
});

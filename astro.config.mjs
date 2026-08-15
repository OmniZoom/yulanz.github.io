// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://omnizoom.github.io',
  base: '/yulanz.github.io',
  output: 'static',
  build: { format: 'directory' },
});

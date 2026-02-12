// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // VITAL: Astro necesita esto para generar el sitemap y las URLs canónicas
  site: 'https://surcode.cl',
  integrations: [
    tailwind(), 
    sitemap()
  ],
});
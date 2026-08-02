// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://NicoLas24-bel.github.io',
  base: '/PORTAFOLIO',
  vite: {
    plugins: [tailwindcss()]
  }
});
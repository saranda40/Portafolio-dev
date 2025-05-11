import { defineConfig } from 'vite';
import astro from '@astrojs/vite';

export default defineConfig({
  plugins: [astro()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});
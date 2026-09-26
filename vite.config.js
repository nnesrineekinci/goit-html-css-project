import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  base: '/goit-html-css-project/',
  plugins: [injectHTML()],
});
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Zenfa.AI/',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});

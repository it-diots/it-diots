import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared/ui': path.resolve(__dirname, '../../packages/shared/src/components/ui'),
      '@shared/ui/*': path.resolve(__dirname, '../../packages/shared/src/components/ui/*'),
    },
  },
});

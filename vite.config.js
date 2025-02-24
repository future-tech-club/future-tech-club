import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/future-tech-club/',  
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
  assetsInclude: ['**/*.woff', '**/*.ttf'],
});

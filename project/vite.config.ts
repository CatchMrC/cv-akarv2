import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true // This will automatically open your browser
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
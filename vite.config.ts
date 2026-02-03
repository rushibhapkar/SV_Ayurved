import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change this to '/' for custom domains
  base: '/', 
  
  optimizeDeps: {
    include: ['lucide-react'],
  },
});
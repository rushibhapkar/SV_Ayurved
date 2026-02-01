import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Set the base path to match your GitHub Repository name
  base: '/SV_Ayurved/', 
  
  // 2. Remove the lucide-react exclusion unless you have a very specific reason for it
  // This helps with faster cold-starts during development
  optimizeDeps: {
    include: ['lucide-react'], // 'include' is often better than 'exclude' here
  },
});
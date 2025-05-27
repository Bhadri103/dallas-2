import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
 
export default defineConfig({
  base: '/dallas-2/',  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
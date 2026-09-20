import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio', // add to my website
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@supabase/supabase-js': '@supabase/supabase-js/dist/module'
    }
  },
  optimizeDeps: {
    include: ['@supabase/supabase-js']
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Configuración de Vite para el proyecto Nayla
 * 
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  base: '/nayla-website/', // ¡IMPORTANTE! Esto debe coincidir con el nombre del repositorio
  server: {
    port: 3000,
    open: true // Abre el navegador automáticamente
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
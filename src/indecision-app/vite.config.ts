import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      // Reemplaza 'all: true' forzando a incluir todos tus componentes y archivos de TypeScript
      include: ['src/**/*.ts', 'src/**/*.vue'],
      // Excluye los archivos de pruebas para que no sumen cobertura falsa
      exclude: ['**/*.test.ts', '**/*.spec.ts', '**/tests/**'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})

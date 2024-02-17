import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jill-oreilly-react-portfolio',
  build: {
    outDir: 'build'
  },
  plugins: [react()],
})

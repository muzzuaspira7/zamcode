import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
   server: {
    host: true,
    allowedHosts: ['brave-heads-begin.loca.lt'], // 👈 add your tunnel domain here
  },
  plugins: [
    tailwindcss(),
    react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/confige
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    plugins: [
        tailwindcss(),
        react(),
    ],
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',

            }
        }
    }
})
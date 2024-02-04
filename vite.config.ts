import { resolve } from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/index.ts"),
      ],
      name: "app-builder",
      fileName: (format, name) => {
        return (format === 'es') ? `${name}.js` :`${name}.${format}`
      },
    },
    rollupOptions: {
      external: ['react','react-dom','styled-components'],
    },
    sourcemap:true,
    emptyOutDir: true,
  },
  plugins: [react()],
})

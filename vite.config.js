import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  root: '.',  // the root directory for the server
  base: '/',  // the base URL the server will run on
  build: {
    outDir: 'dist',  // the output directory for the build
    assetsInclude: ['**/manifest.json']
  },
  server: {
    host: '192.168.0.56',
    port: 5500  // the port the dev server will run on
  }
})

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        "short_name": "Spaced Repetition Memorization",
        "name": "Spaced Repetition Memorization",
        "icons": [
          {
              "src": "/green_circle_192.png",
              "sizes": "192x192",
              "type": "image/png"
          },
          {
              "src": "/green_circle_512.png",
              "sizes": "512x512",
              "type": "image/png"
          }
        ],
        "start_url": "index.html",
        "background_color": "#3367D6",
        "display": "standalone",
        "scope": "/",
        "theme_color": "#3367D6"
      },
      workbox: {
        // workbox options for generateSW
      },
    }),
   ],
  root: '.',  // the root directory for the server
  base: '/',  // the base URL the server will run on
  build: {
    outDir: 'dist',  // the output directory for the build
    assetsInclude: ['**/manifest.json']
  },
  // server: {
  //   host: '192.168.0.56',
  //   port: 5500  // the port the dev server will run on
  // }
})

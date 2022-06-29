import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { crx } from '@crxjs/vite-plugin'
import { manifest } from './manifest-json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [crx({ manifest }), svelte({ emitCss: false })],
  optimizeDeps: {
    include: ['svelte', 'svelte/internal'],
  },
})

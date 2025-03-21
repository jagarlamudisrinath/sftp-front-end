# sftp-front-end

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## How I Configured Vuetify Auto-Importing Components

To configure Vuetify for auto-importing components, follow these steps:

1. Install the `vite-plugin-vuetify` package using npm:

   ```sh
   npm install vite-plugin-vuetify
   ```

2. Update the `vite.config.js` file to include the Vuetify plugin with auto-import enabled:

   ```javascript
   // filepath: c:\Users\SrinathJagarlamudi\Documents\codebases\sftp-frontend-vue\sftp-front-end\vite.config.js
   import { fileURLToPath, URL } from 'node:url'
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import vueDevTools from 'vite-plugin-vue-devtools'
   import vuetify from 'vite-plugin-vuetify'

   export default defineConfig({
     plugins: [
       vue(),
       vueDevTools(),
       vuetify({ autoImport: true }),
     ],
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
       },
     },
   })
   ```

By following these steps, Vuetify components will be automatically imported in your project.

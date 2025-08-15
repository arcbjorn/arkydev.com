import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      fallback: 'index.html',
      strict: false
    }),

    prerender: {
      handleMissingId: 'ignore'
    },

    alias: {
      $routes: 'src/routes',
      $components: 'src/components',
      $l18n: 'src/l18n',
      $constants: 'src/constants',
      $types: 'src/types',
      $stores: 'src/stores',
      $lib: 'src/lib'
    }
  }
};

export default config;

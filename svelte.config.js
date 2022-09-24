import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		alias: {
			$routes: 'src/routes',
			$components: 'src/components',
			$l18n: 'src/l18n'
		}
	}
};

export default config;

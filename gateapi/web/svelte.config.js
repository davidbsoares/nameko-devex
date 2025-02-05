import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			'$/*': './src/*',
			'$static/*': './static/*',
		},
	},
}

export default config

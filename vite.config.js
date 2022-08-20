import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;

// import { sveltekit } from '@sveltejs/kit/vite';
// import { kitDocsPlugin } from '@svelteness/kit-docs/node';
// import Icons from 'unplugin-icons/vite';

// /** @type {import('vite').UserConfig} */
// const config = {
// 	plugins: [
// 		Icons({ compiler: 'svelte' }),
// 		kitDocsPlugin({
// 			shiki: {
// 				theme: 'material-ocean'
// 			}
// 		}),
// 		sveltekit()
// 	]
// };

// export default config;

// import adapter from '@sveltejs/adapter-netlify';

// export default {
// 	kit: {
// 		adapter: adapter(), // currently the adapter does not take any options
// 		// target: '#svelte'
// 		vite: {
// 			server: {
// 				fs: {
// 					allow: ['static']
// 				}
// 			}
// 		}
// 	}
// };

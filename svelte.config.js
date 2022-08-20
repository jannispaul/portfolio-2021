/** @type {import('@sveltejs/kit').Config} */
// 3 Versions:
// No adpater
// Static adapter
// Netlify adapter

// const config = {
// 	kit: {
// 		// hydrate the <div id="svelte"> element in src/app.html
// 		target: '#svelte'
// 	}
// };

// export default config;

// SvelteKit static adapter: https://github.com/sveltejs/kit/tree/master/packages/adapter-static
// import adapter from '@sveltejs/adapter-static';

// export default {
// 	kit: {
// 		adapter: adapter({
// 			// default options are shown
// 			pages: 'build',
// 			assets: 'build',
// 			fallback: null
// 		})
// 	}
// };

// SvelteKit netlify adapter: https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify
import adapter from '@sveltejs/adapter-netlify';

export default {
	kit: {
		adapter: adapter() // currently the adapter does not take any options
		// target: '#svelte'
		// vite: {
		// 	server: {
		// 		fs: {
		// 			allow: ['static']
		// 		}
		// 	}
		// }
	}
};

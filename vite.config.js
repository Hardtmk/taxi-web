import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	define: {
		'process.env.NODE_ENV': '"production"',
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});

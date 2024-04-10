import { redirect } from '@sveltejs/kit';
import { locales } from 'svelte-i18n';

/** @type {import('../$types').PageLoad} */
export const load = async ({ locals }) => {
	if (!locals.user) {
		throw redirect(302, 'auth/login');
	}
};

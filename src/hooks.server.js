import { tryCatchPromise } from './utils/promise';
import { request } from './utils/request';
import { redirect } from '@sveltejs/kit';
/** @type {import('@sveltejs/kit').Handle} */
// @ts-ignore

const public_paths = ['/auth/signup', '/auth/login'];
function isPathAllowed(path) {
	return public_paths.some(
		(allowedPath) => path === allowedPath || path.startsWith(allowedPath + '/')
	);
}

export async function handle({ event, resolve }) {
	let url = new URL(event.request.url);
	if (event.cookies.get('userId')) {
		const userId = event.cookies.get('userId');
		const [error, result] = await tryCatchPromise(
			request().get(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/users/${userId}`,
				{ body: { userId } }
			)
		);

		if (!!error && !isPathAllowed(url.pathname)) {
			throw redirect(302, '/auth/login');
		}

		if (!!result?.data?.userInfo) {
			event.locals.user = result.data.userInfo;
			if (url.pathname == '/auth/login' || url.pathname == '/auth/signup' || url.pathname == '/') {
				throw redirect(302, '/protected');
			}
		}
	} else {
		if (!isPathAllowed(url.pathname)) {
			throw redirect(302, '/auth/login');
		}
	}

	return resolve(event);
}

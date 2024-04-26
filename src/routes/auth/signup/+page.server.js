import { request } from '../../../lib/utils/request';
import { tryCatchPromise } from '../../../lib/utils/promise';

export const actions = {
	// @ts-ignore
	default: async (event) => {
		const data = await event.request.formData();
		const email = data.get('email');
		const password = data.get('password');
		const payload = { email, password };

		try {
			const [error, result] = await tryCatchPromise(
				request().post(
					'https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/user',
					{ body: payload }
				)
			);
			if (error) {
				throw error;
			}
			event.cookies.set('token', result.data.token, {
				path: '/',
				httpOnly: true,
				secure: false,
				sameSite: 'strict'
			});
			event.cookies.set('userId', result.data.userInfo._id, {
				path: '/',
				httpOnly: true,
				secure: false,
				sameSite: 'strict'
			});

			event.locals.user = result.data.userInfo;
		} catch (e) {}
	}
};

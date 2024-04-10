import { redirect } from '@sveltejs/kit';
import { goto } from '$app/navigation';
import { request } from '../../../utils/request';
import { tryCatchPromise } from '../../../utils/promise';

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
					'https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/auth/login',
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
		} catch (e) {
			console.log(e, '錯誤是什麼');
		}
	}
};

// 是不是一定要用到server才可以呢
// 只是return user，並沒有return任何其他東西
//

// hooks.server 都是需要整架lol， 那麼user一輸入http://localhost:5173/protected,就可以直接入到畫面

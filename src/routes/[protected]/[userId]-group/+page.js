import { request } from '../../../lib/utils/request';
import { tryCatchPromise } from '../../../lib/utils/promise';
import * as App from '$lib/utils/app';
/** @type {import('./$types').PageLoad} */

export async function load({ params }) {
	const { userId } = params;
	const x = await App.Http.getUserHeader();
	console.log(x, 'x');
	try {
		const [error, result] = await tryCatchPromise(
			// 嘗試將其放在header 裡面
			// depend on 將來的你究竟想要怎樣的工作

			request().get(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/users/${userId}/groups`
			)
		);
		if (error) {
			throw error;
		}

		const response = result.data;
		return { response };
	} catch (e) {}
}
// 不要再和他聊這種前途問題啦

import { request } from '../../../lib/utils/request';
import { tryCatchPromise } from '../../../lib/utils/promise';

/** @type {import('./$types').PageLoad} */

// 什麼時候會禁到呢，就是點選群組的時候
// 註定我不是一個專心的人
// 難道難為每易音
// 
export async function load({ params }) {
	try {
		console.log(params?.slug, 's');
		const [error, result] = await tryCatchPromise(
			request().get(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/users/${params.slug}/groups`
			)
		);
		if (error) {
			throw error;
		}
		const response = result.data;
		return { response };
	} catch (e) {
		throw e;
	}
}
// 不要再和他聊這種前途問題啦

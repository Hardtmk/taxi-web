import { tryCatchPromise } from '../../lib/utils/promise';
import { request } from '../../lib/utils/request';

export async function load(event) {
	try {
		const [error, result] = await tryCatchPromise(
			request().get('https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/groups')
		);

		const response = result.data;

		return { response };
	} catch (error) {
		console.error(`錯誤 是什麼 ${error}`);
	}
}
// 其實應該有一個群組列表，比user看看，自己究竟join 了幾多個群組
export const actions = {
	default: async (event) => {
		console.log('trigger 了創造群組這個function');
		const data = await event.request.formData();

		try {
			const [error, result] = await tryCatchPromise(
				request().post('https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com', {
					body: data
				})
			);
			if (error) {
				throw error;
			}
			return result;
		} catch (e) {}
	}
};

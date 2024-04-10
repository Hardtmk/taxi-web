import { request } from '../../../../utils/request';
import { tryCatchPromise } from '../../../../utils/promise';
// @ts-ignore
export const load = async ({ params }) => {
	try {
		const [error, result] = await tryCatchPromise(
			request().get(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/${params.slug}/group`
			)
		);

		if (error) {
			throw error;
		}
		return result.data;
	} catch (error) {
		console.log(error, 'get到某個group id 的錯誤是什麼');
	}
};

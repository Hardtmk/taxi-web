import { tryCatchPromise } from '../utils/promise';
import { request } from '../utils/request';

export async function createNotification(userId = '', groupId = '', payload = {}) {
	try {
		const [error, result] = await tryCatchPromise(
			request().post(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/users/${userId}/groups/${groupId}/notification`
			)
		);

		if (error) {
			throw error;
		}
		const response = result.data;

		return { response };
	} catch (error) {
		console.error(`錯誤 是什麼 ${error}`);
	}
}

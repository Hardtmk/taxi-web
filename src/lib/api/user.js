import { request } from '../../utils/request';
import { tryCatchPromise } from '../../utils/promise';

const createUser = async (payload = {}) => {
	try {
		// @ts-ignore
		const [error, result] = await tryCatchPromise(
			request().post(
				'https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/user',
				{ body: payload }
			)
		);

		if (error) {
			throw error;
		}
		return result;
	} catch (e) {
		throw e;
	}
};

const getUser = async (payload = {}) => {
	try {
		// @ts-ignore
		const [error, result] = await tryCatchPromise(
			request().post(
				'https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/user',
				{
					body: payload
				}
			)
		);
		if (error) {
			throw error;
		}
		return result;
	} catch (e) {
		throw e;
	}
};
export { createUser, getUser };

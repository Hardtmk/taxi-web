import { request } from '../../utils/request';
import { tryCatchPromise } from '../../utils/promise';

const createGroup = async (payload = {}) => {
	try {
		// @ts-ignore
		const [error, result] = await tryCatchPromise(
			request().post(
				'https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/group',
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

export { createGroup };

// 可以寫住backend 先
// 是做得快，但是未必做得特別好lol
// 根本就是一個long long process
// when you gonna finish it
// i just have no idea
// 起左個大概先
// 遲些再係細執
// 我要有個function出來，再遲些的時候重新再寫過

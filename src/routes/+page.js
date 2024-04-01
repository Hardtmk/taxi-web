// @ts-nocheck
// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { tryCatchPromise } from '../utils/promise';
import { request } from '../utils/request';

/** @type {import('../$types').PageLoad} */
export const load = async () => {
	try {
		const [error, result] = await tryCatchPromise(
			request().get('https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/groups')
		);
		const response = result.data;
		return { response };
	} catch (error) {
		console.error(`錯誤 是什麼 ${error}`);
	}
};

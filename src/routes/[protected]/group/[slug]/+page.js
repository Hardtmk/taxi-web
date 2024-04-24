import { request } from '../../../../lib/utils/request';
import { tryCatchPromise } from '../../../../lib/utils/promise';
// @ts-ignore

// 仙子阿 、
//
//是天而
// 明天或許還好
// 唯
// 發昂慢裡那那個題lol了個額度讀書區被
//我覺得是可以的，不過明天看吧再
//今天確實不是 working mode 
//

export const load = async ({ params }) => {
	try {
		const [error, result] = await tryCatchPromise(
			request().get(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/groups/${params.slug}`
			)
		);

		console.log(result, 's');
		if (error) {
			throw error;
		}

		return { list: result.data, slug: params.slug };
	} catch (error) {
		console.log(error, 'get到某個group id 的錯誤是什麼');
	}
};

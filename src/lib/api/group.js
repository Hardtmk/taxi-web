import { tryCatchPromise } from '../utils/promise';
import { request } from '../utils/request';
import * as App from '$lib/utils/app.js';
export async function dismissGroup(userId = '', groupId = '') {
	try {
		// 如何可以確定自己pass的那樣野是header而不是body呢,這又是一個學問
		const [error, result] = await tryCatchPromise(
			request().delete(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/users/${userId}/group/${groupId}`
			)
		);

		// 那麼就要得知是如何pass的啦
		// 我想就是透過user這樣搞都還是可以的

		// 在嘗試弄一個get de

		// 那麼，就要研究一下究竟如何生成view 的
		if (error) {
			throw error;
		}
		const response = result.data;

		return { response };
	} catch (error) {
		console.error(`錯誤 是什麼 ${error}`);
	}
}
//去到後期會不會有種可能性，就是根本不知道bug在哪裡

// 少了一個銷售
// 行樓梯
// 執野

// 首先要讀取得到userId  才可以lollll

// 首先我要test的是哪一條endpoint好呢
// 首先是list all

// 如何可以做到header這個效果呢，也是要想清楚的問題來做的

export async function updateGroupByAdmin(adminId = '', groupId = '') {
	try {
		const [error, result] = await tryCatchPromise(
			request().patch(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/admins/{adminId}/groups/${groupId}`
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

export async function updateGroupByMember(memberId = '', groupId = '') {
	try {
		const [error, result] = await tryCatchPromise(
			request().patch(
				`https://pclpt5yh53.execute-api.ap-east-1.amazonaws.com/v1/taxi-sharing/members/${memberId}/groups/${groupId}`
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

// 如何去處理呢
//
//

import { get } from 'svelte/store';
import { userStore } from '$lib/store/user';

const Http = {
	getUserHeader: async () => {
		return {
			'user-info': get(userStore)
		};
	}
};

// 因為這個function是async
// 所以怎麼樣都要await



export { Http };

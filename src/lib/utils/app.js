import { get } from 'svelte/store';
import { userStore } from '$lib/store/user';

const Http = {
	getUserHeader: async () => {
		return {
			'user-info': get(userStore)
		};
	}
};

export { Http };

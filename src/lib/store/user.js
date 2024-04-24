import { derived, writable } from 'svelte/store';
const initialState = () => {
	return {
		fullname: '',
		userId: '',
		email: ''
	};
};



// 這個位置是自己retrieve 返D user profile, 但如果是我的話，應該就隨便吧
// 人生不走回頭路
// 
const createUserStore = async () => {
	const { subscribe, set, update } = writable(initialState());

	return {
		subscribe,
		set,
		init: (/** @type {{ fullname: string; password: string; email: string; }} */ values) => {
			update((state) => {
				return { ...state, ...values };
			});
		},
		reset: () => {
			set(initialState());
		}
	};
};

const userStore = await createUserStore();

export { userStore };

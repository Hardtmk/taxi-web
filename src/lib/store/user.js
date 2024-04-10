import { derived, writable } from 'svelte/store';
const initialState = () => {
	return {
		fullname: '',
		userId: '',
		email: ''
	};
};

const createUserStore = async () => {
	const { subscribe, set, update } = writable(initialState());

	return {
		subscribe,
		set,
		update: {},
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

const islogin = writable(false);

export { userStore, islogin };
// 要思考的位置，isLoggin 這個位置應該要放在哪裡呢

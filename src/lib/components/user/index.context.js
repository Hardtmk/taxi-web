import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

const initialState = () => {
	return {
		fullname: '',
		password: '',
		email: ''
	};
};

const setUserContext = ({ isLogin = false }) => {
	const userInfo = writable(initialState());
	const isLoginMode = writable(isLogin);
	setContext('user', userInfo);
	setContext('isLogin', isLoginMode);
};

const getUserContext = () => {
	const user = getContext('user');
	const isLogin = getContext('isLogin');
	return { user, isLogin };
};

export { setUserContext, getUserContext };

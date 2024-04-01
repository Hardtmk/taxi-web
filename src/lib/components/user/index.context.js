import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

const initialState = () => {
	return {
		fullname: '',
		password: '',
		email: ''
	};
};

const setUserContext = ({ isEditing = false }) => {
	const userInfo = writable(initialState());
	const isEditingMode = writable(isEditing);
	setContext('user', userInfo);
	setContext('isEditing', isEditingMode);
};

const getUserContext = () => {
	const user = getContext('user');
	const isEditing = getContext('isEditing');
	return { user, isEditing };
};

export { setUserContext, getUserContext };

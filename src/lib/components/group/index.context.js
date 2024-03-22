import { writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';

const initialState = () => {
	return {
		end_point: '',
		extra_contribution: 0,
		departure_time: '',
		remark: '',
		limit: 5,
		contact_number: null,
		contact_email: '',
		start_point: ''
	};
};

const setTaxiGroupContext = ({ isEditingMode = false }) => {
	const taxiGroup = writable(initialState());
	const isEditing = writable(isEditingMode);

	setContext('taxiGroup', taxiGroup);
	setContext('isEditing', isEditing);
};

const getTaxiGroupContext = () => {
	const taxiGroup = getContext('taxiGroup');
	const isEditing = getContext('isEditing');

	return { taxiGroup, isEditing };
};

export { setTaxiGroupContext, getTaxiGroupContext };

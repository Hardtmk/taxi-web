import { userStore } from '$lib/store/user';

export async function load(event) {
	return event.locals.user;
}

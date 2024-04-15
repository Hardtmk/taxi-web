import { writable } from 'svelte/store';

const isSideMenuOpen = writable(false);

const toggleSideMenu = () => {
	isSideMenuOpen.update((v) => !v);
};

const closeSideMenu = () => {
	isSideMenuOpen.set(false);
	return true;
};

export { isSideMenuOpen, toggleSideMenu, closeSideMenu };

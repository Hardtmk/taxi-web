<script>
	import Profile from '$lib/icons/profile.svg';
	import SidebarMenu from '$lib/components/layout/sidebar-menu.svelte';
	import { closeSideMenu } from '$lib/store/sidebar.js';
	const clickOutside = (node) => {
		console.log('你號嗎');
		const handleClick = (event) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('clickOutside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	};
</script>

<div class="flex" use:clickOutside on:clickOutside={() => closeSideMenu()}>
	<div class="transition-opacit fixed inset-0 z-20 hidden opacity-50 transition-all" />
	<div
		class="fixed inset-y-0 left-0 z-30 w-80 transform overflow-y-auto bg-white transition duration-300 ease-in lg:static lg:inset-0"
	>
		<SidebarMenu />
	</div>
</div>

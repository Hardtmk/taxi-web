<script>
	import { page } from '$app/stores';
	import notification from '$lib/icons/notification.svg';
	import group from '$lib/icons/group.svg';
	import backwardIcon from '$lib/icons/backward.svg';
	import Profile from '$lib/icons/profile.svg';
	import SideBarToggle from '$lib/components/layout/sidebar-toggle.svelte';
	import { isSideMenuOpen, toggleSideMenu } from '$lib/store/sidebar.js';
	import IconSvg from '$lib/components/common/icon-svg.svelte';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		DropdownItem,
		DropdownHeader,
		Dropdown,
		DropdownDivider
	} from 'flowbite-svelte';
	let activeUrl = false;
</script>

<header>
	<Navbar>
		<NavBrand>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>千里共乘的</span
			>
		</NavBrand>
		<div class="">
			{#if $isSideMenuOpen}
				<SideBarToggle />
			{/if}
	
			<div class="flex items-center md:order-2">
				
				<button on:click={() => toggleSideMenu()} type="button">
					<!-- <img src={Profile} alt="group" /> -->
					<Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
					
				</button>
			</div>
		</div>
		<!-- <div class="flex items-center md:order-2">
			<Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
			<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
		</div>
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm">Bonnie Green</span>
				<span class="block truncate text-sm font-medium">name@flowbite.com</span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown> -->
	</Navbar>


</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>

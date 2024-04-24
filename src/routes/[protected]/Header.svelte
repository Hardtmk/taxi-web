<script>
	import {
		Navbar,
		NavBrand,
		NavHamburger,
		Avatar,
		DropdownItem,
		DropdownHeader,
		Dropdown,
		DropdownDivider
	} from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	// 即是不一定要connect在一起
	function handleSignout() {
		dispatch('signout', {
			signout: true
		});
	}
</script>

<header>
	<Navbar>
		<NavBrand>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>千里共乘的</span
			>
		</NavBrand>

		<div class="flex items-center md:order-2">
			<Avatar id="avatar-menu" src="/images/profile-picture-2.webp" />
			<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
		</div>
		<Dropdown placement="bottom" triggeredBy="#avatar-menu">
			<DropdownHeader>
				<span class="block text-sm">Bonnie Green</span>
				<span class="block truncate text-sm font-medium">name@flowbite.com</span>
			</DropdownHeader>
			<DropdownItem><a href="#">個人資料</a></DropdownItem>
			<DropdownItem><a href="/protected/notification"></a>通知</DropdownItem>
			<DropdownItem><a href="/protected/group">群組</a></DropdownItem>
			<DropdownDivider />
			<DropdownItem><button on:click={handleSignout}>登出</button></DropdownItem>
		</Dropdown>
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

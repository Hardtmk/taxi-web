<script>
	import GroupList from '$lib/components/group/group-list.svelte';
	import PresetButton from '$lib/components/common/preset-button.svelte';
	import CreateGroupForm from '$lib/components/form/group/create-group-form.svelte';
	import { goto } from '$app/navigation';
	import SigninReminder from '$lib/components/modal/signin-reminder.svelte';

	/** @type {import('./$types').PageData} */

	export let data;
	let formModal = false;
	let routeToSigninModal = false;

	function openForm() {
		if (!sessionStorage.getItem('token')) {
			routeToSigninModal = true;
			return;
		}

		formModal = true;
	}
	function reload() {
		const thisPage = window.location.pathname;
		goto('/');
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<GroupList {data} />
	<CreateGroupForm bind:formModal on:reload={reload} />
	<SigninReminder
		bind:routeToSigninModal
		on:routeToLogin={() => {
			goto('/auth/login');
		}}
	/>
</section>
<PresetButton extraClass="" content="新建群組" onClick={openForm} />

<!-- 最core的function是什麼呢
create group 
join group
exit group 
group deleted not active 
list group
notification 
這些都是要考慮的
不如你請人幫你搞定
我也是這麼想的

-->

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

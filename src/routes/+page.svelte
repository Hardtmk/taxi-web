<script>
	import GroupList from '$lib/components/dashboard/group-list.svelte';
	import PresetButton from '$lib/components/common/preset-button.svelte';
	import CreateGroupForm from '$lib/components/dashboard/create-group-form.svelte';

	/** @type {import('./$types').PageData} */

	export let data;
	let formModal = false;

	function createTaxiGroup() {
		formModal = true;
	}

	async function handleSubmit() {
		await fetch('/api/group', {
			method: 'POST',
			body: JSON.stringify({ name: 'hardy' }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<GroupList {data} />
	<CreateGroupForm bind:formModal />
</section>
<PresetButton extraClass="" content="新建群組" onClick={createTaxiGroup} />

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

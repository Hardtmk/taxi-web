<script>
	import '../app.pcss';
	import './styles.css';
	import { onMount } from 'svelte';

	/** @type {any} */
	let promptEvent;

	onMount(() => {
		window.addEventListener('beforeinstallprompt', (event) => {
			event.preventDefault();
			promptEvent = event;
		});
	});

	function test() {
		promptEvent.prompt();
	}
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

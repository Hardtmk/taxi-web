<script>
	import Header from './Header.svelte';
	import '../../app.pcss';
	import '../styles.css';
	import { userStore, islogin } from '$lib/store/user';

	const initUserStore = async () => {
		const userId = sessionStorage.getItem('userId');
		userStore.init({ userId });
	};
</script>

{#await initUserStore()}
	{#await import('$lib/components/common/preloader.svelte') then Preloader}
		<Preloader.default />
	{/await}
{:then}
	<div class="app">
		<Header></Header>
		<main>
			<slot />
		</main>

		<footer>
			<div class="text-center">
				<p>
					<a
						href="https://docs.google.com/document/d/1-3nhC-errhQQSo4EUp3DIqTt_7tUEtt8eBYcF2Le25o/edit?usp=sharing"
						>please leave me a comment about how to improve this app</a
					>
				</p>
			</div>
		</footer>
	</div>
{/await}

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	@font-face {
		font-family: 'Gelasio';
		font-style: normal;
		font-weight: 300;
		src:
			local('Gelasio Regular'),
			local('Gelasio-Regular'),
			url(https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
			U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		margin: auto auto;
		max-width: 84rem;
		font-family: 'Lora';
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

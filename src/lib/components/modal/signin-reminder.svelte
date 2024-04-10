<script>
	import { Button, Modal } from 'flowbite-svelte';
	import PresetButton from '../common/preset-button.svelte';
	import { createEventDispatcher } from 'svelte';

	export let routeToSigninModal = false;

	const dispatch = createEventDispatcher();
</script>

<Modal bind:open={routeToSigninModal} size="xs" autoclose>
	<div class="text-center">
		<h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
			你還沒有登入，請在登入之後再建立群組
		</h3>
		<PresetButton
			extraClass="me-2"
			content="前往登入頁面"
			onClick={() => {
				dispatch('routeToLogin');
			}}
		/>
		<Button color="alternative">取消</Button>
	</div>
</Modal>


<!-- 我是覺得去到後期再加都科技園 -->
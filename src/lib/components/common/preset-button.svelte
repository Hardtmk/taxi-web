<script>
	import { Button } from 'flowbite-svelte';
	let predefinedClass = 'rounded-xl outline';
	export let extraClass = '';
	export let content = '按鈕';
</script>

<Button class={predefinedClass}>{content}</Button>

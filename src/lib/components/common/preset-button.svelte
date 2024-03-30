<script>
	import { Button } from 'flowbite-svelte';
	let predefinedClass = 'rounded-xl bg-bgGreen text-black';
	export let extraClass = '';
	export let content = '按鈕';
	export let onClick= function(){}
	export let type="button"
	

</script>

<Button type="submit" on:click={onClick} class="{predefinedClass} {extraClass}">{content}</Button>

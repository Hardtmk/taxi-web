<script>
	import IconSvg from './icon-svg.svelte';
	import { ValidationMessage } from '@felte/reporter-svelte';
	import { Helper } from 'flowbite-svelte';
    import informationCircle from '$lib/icons/information-ciecle.svg'

	/**
	 * @type {string}
	 */
	export let inputClass;
</script>

<ValidationMessage for={inputClass} let:messages>

	<Helper class="py-1" color="red">
		{#if messages}
			<ul>
				{#each messages as message}
					<li class="flex flex-row items-center">
						<IconSvg data={informationCircle} fill="none" class="h-4 w-4" />
						<span class="ml-1">{message}</span>
					</li>
				{/each}
			</ul>
		{/if}
	</Helper>
</ValidationMessage>

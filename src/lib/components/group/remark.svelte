<script>
	import SectionHeader from './section-header.svelte';
	import { Card } from 'flowbite-svelte';
	export let remark = '';
</script>

<SectionHeader title="備註" />

<Card padding="xl" class="round-3xl w-full min-w-80 max-w-full  text-sm  md:text-lg ">
	<div class="flex justify-between">
		<p>
			{remark}
		</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="h-6 w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
			/>
		</svg>
	</div>
</Card>
<!-- 點擊加入
移除群組
曾經 join 過的所有群組
都要搞埋個註冊才可以 -->

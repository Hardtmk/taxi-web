<script>
	// @ts-nocheck

	import { Card, Popover } from 'flowbite-svelte';
	import ArrowRight from '$lib/icons/arrow-right.svg';
	import PresetButton from '../common/preset-button.svelte';
	import { goto } from '$app/navigation';
	export let data;

	let list = data.response;
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Dashboard" />
</svelte:head>

<div class="w-full flex-col space-y-4">
	{#each list as item}
		<Card
			padding="xl"
			color="red"
			class="w-full min-w-80 max-w-full space-y-4 rounded-xl bg-[#B2DFDB]   p-3 text-sm  md:text-lg "
		>
			<ul class="grid grid-cols-3 gap-y-3 text-center">
				<li>
					<p>總價錢</p>
					<p>HKD{item.total_price}</p>
				</li>
				<li>
					<p>組員額外津貼</p>
					<p>HKD{item.extra_contribution}</p>
				</li>
				<li>
					<p id="hover">每人價錢</p>
					<p>HKD{!!item.free ? '免費' : `${item.price_per_person}`}</p>
					<Popover
						class="w-64 text-sm font-light "
						title="Popover title"
						triggeredBy="#hover"
						trigger="hover"
						>（總價格-組員額外津貼）/目前人士，留意只是屬於預計，現實情況可能會有所不同</Popover
					>
				</li>

				<li>
					<p>出發時間</p>
					<p>03/03 5pm</p>
					<p>下午5點</p>
				</li>

				<li>
					<p id="contact">聯絡方式</p>
					<p>{item.hasContact ? '有' : '沒有'}</p>
					<Popover
						class="w-64 text-sm font-light "
						title="Popover title"
						triggeredBy="#contact"
						trigger="hover">要加入群組之後才能夠讀取群組人員的聯絡資訊</Popover
					>
				</li>
				<li>
					<p>人數</p>
					<p>{item.num_of_mems}/{item.limit}</p>
				</li>
			</ul>
			<div>
				<p>備註</p>
				<p>{item.remark}</p>
			</div>

			<div class="flex justify-between">
				<p class="text-start">{item.start_point}</p>
				<img src={ArrowRight} alt="SvelteKit" class="h-6" />
				<p class="text-end">{item.end_point}</p>
			</div>

			<PresetButton
				extraClass="bg-[#009688]"
				content="詳情"
				onClick={() => goto(`/group/${item._id}`)}
			/>
		</Card>
	{/each}on
</div>

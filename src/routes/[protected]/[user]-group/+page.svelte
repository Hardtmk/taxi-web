<script>
	import { Card, Listgroup, Avatar } from 'flowbite-svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	console.log(data, 'data');

	let list = [
		{
			img: { src: '/images/profile-picture-1.webp', alt: 'Neil Sims' },
			end_point: '觀塘'
		},
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Bonnie Green' },
			end_point: 'Bonnie Green',
			email: 'email@windster.com',
			value: '$3467'
		},
		{
			img: { src: '/images/profile-picture-3.webp', alt: 'Michael Gough' },
			end_point: 'Michael Gough',
			email: 'email@windster.com',
			value: '$67'
		}
	];
</script>

<Card padding="xl" size="md">
	<div class="mb-4 flex items-center justify-between">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">我的群組</h5>
		<a href="/" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
			View all
		</a>
	</div>
	<Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
		<div class="flex items-center space-x-4 rtl:space-x-reverse">
			<Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0" />
			<div class="min-w-0 flex-1">
				<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
					{item.end_point}
				</p>
				<p class="truncate text-sm text-gray-500 dark:text-gray-400">
					{item.email}
				</p>
			</div>
			<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
				{item.value}
			</div>
		</div>
	</Listgroup>
</Card>

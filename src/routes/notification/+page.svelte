<script>
	// @ts-nocheck

	import { Card, Listgroup, Avatar, Button } from 'flowbite-svelte';

	let list = [
		{
			img: {
				src: 'https://lcdn-hk.icons8.com/c/CxxmeVz-4kOMAFt0dVi_VQ/19fd3c4997733f96fcb250aec964ca64f2eb9010.png',
				alt: 'Neil Sims'
			},
			name: '全萬群組',
			message: '荃灣群組已被解散',
			time: '3:02pm',
			type: 'group'
		},
		{
			img: {
				src: 'https://lcdn-hk.icons8.com/c/CxxmeVz-4kOMAFt0dVi_VQ/19fd3c4997733f96fcb250aec964ca64f2eb9010.png',
				alt: 'Bonnie Green'
			},
			name: '觀塘',
			message: '荃灣群已經過期',
			time: '6:24am',
			type: 'group'
		},
		{
			img: {
				src: 'https://lcdn-hk.icons8.com/c/CxxmeVz-4kOMAFt0dVi_VQ/19fd3c4997733f96fcb250aec964ca64f2eb9010.png',
				alt: 'Bonnie Green'
			},
			name: '觀塘',
			message: '你已成功加入荃灣群',
			time: '6:24am',
			type: 'group'
		},

		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Michael Gough' },
			name: 'hardy',
			message: 'hardy想加入妳新建里的觀塘群組',
			time: '5:30pm',
			type: 'user'
		},
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Michael Gough' },
			name: 'hardy',
			message: 'hardy想加入妳新建里的觀塘群組',
			time: '5:30pm',
			type: 'user'
		},
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Michael Gough' },
			name: 'hardy',
			message: 'hardy想加入妳新建里的觀塘群組',
			time: '5:30pm',
			type: 'user',
			hasAction: true
		},
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Michael Gough' },
			name: 'hardy',
			message: 'hardy想加入妳新建里的觀塘群組',
			time: '5:30pm',
			type: 'user'
		},

		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Michael Gough' },
			name: 'hardy',
			message: 'hardy想加入妳新建里的觀塘群組',
			time: '5:30pm',
			type: 'user'
		}
	];
</script>

<svelte:head>
	<title>Notification</title>
	<meta name="desciption" content="Notification" />
</svelte:head>

<Card padding="xl" size="md">
	<div class="mb-4 flex items-center justify-between">
		<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
		<a href="/" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
			View all
		</a>
	</div>
	<Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
		<div class="flex items-center space-x-4 rtl:space-x-reverse">
			<Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0" />
			<div class="min-w-0 flex-1">
				<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
					{item.name}
				</p>
				<p class="truncate text-sm text-gray-500 dark:text-gray-400">
					{item.message}
				</p>
			</div>
			<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
				{item.time}
			</div>
		</div>
		{#if item.hasAction}
			<div class="flex justify-end space-x-3">
				<Button size="sm"  >允許</Button>
				<Button size="sm">拒絕</Button>
			</div>
		{/if}
	</Listgroup>
</Card>

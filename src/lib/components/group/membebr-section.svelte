<script>
	import { Card, Listgroup, Avatar, Button } from 'flowbite-svelte';
	import SectionHeader from '$lib/components/group/section-header.svelte';

	export let list = [];
</script>

<SectionHeader title="3位成員" />
<Card padding="xl" class="w-full min-w-80 max-w-full  text-sm  md:text-lg ">
	<Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
		<div class="flex items-center space-x-4 rtl:space-x-reverse">
			<Avatar src="/images/profile-picture-2.webp" alt="profile" class="flex-shrink-0" />
			<div class="min-w-0 flex-1">
				<p class="truncate text-sm font-medium text-gray-900 dark:text-white">
					{item?.name}
				</p>
			</div>
			<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
				<Button size="sm" class="text-balck rounded-3xl bg-transparent outline-1 outline-1"
					>移除群組</Button
				>
			</div>
		</div>
	</Listgroup>
</Card>

<!-- 當只剩下一個成員，並且其選擇退出的時候，那麼這個群組就會被解散 -->

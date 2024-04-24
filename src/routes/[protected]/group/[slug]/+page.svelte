<script>
	import MemberSection from '$lib/components/group/membebr-section.svelte';
	import Destination from '$lib/components/group/destination.svelte';
	import Remark from '$lib/components/group/remark.svelte';
	import PresetButton from '$lib/components/common/preset-button.svelte';
	import { userStore } from '$lib/store/user.js';
	import { GROUPROLES } from '$lib/constants/index';
	import { dismissGroup, updateGroupByAdmin, updateGroupByMember } from '$lib/api/group.js';

	/** @type {import('./$types').PageData} */

	export let data;
	let is_member = false;
	let role;
	const { end_point, members, remark } = data.list;
	is_member = members.some((mem) => mem.userId === $userStore.userId);
	if (is_member) {
		role = members.filter((mem) => mem.userId === $userStore.userId)[0].role;
	}


	// join group的話，就 會create notification 

</script>

{#if is_member}
	<div class="flex-col space-y-6">
		<MemberSection list={members} on:remove={updateGroupByAdmin($userStore.userId, data.slug)} />

		<Destination destination={end_point} />

		<Remark {remark} />
		{#if role === GROUPROLES.ADMIN}
			<PresetButton
				extraClass="bg-white"
				content="解散群組"
				onClick={dismissGroup($userStore.userId, data.slug)}
			/>
		{:else}
			<PresetButton
				extraClass="bg-white"
				content="退出群組"
				onClick={updateGroupByMember($userStore.userId, data.slug)}
			/>
		{/if}
	</div>
{:else}
	<div class="flex-col space-y-6">
		<Destination destination={end_point} />
		<Remark {remark} />
		<PresetButton extraClass="bg-white" content="加入群組" />
	</div>
{/if}


<!--
	一輸入加入群組的時候，會怎麼樣呢，讓我想想
onClick

要定義一個type才可以
是
-->
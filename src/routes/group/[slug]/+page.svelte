<script>
	import MemberSection from '$lib/components/group/membebr-section.svelte';
	import Destination from '$lib/components/group/destination.svelte';
	import GroupAction from '$lib/components/group/group-action.svelte';
	import Remark from '$lib/components/group/remark.svelte';
	/** @type {import('./$types').PageData} */

	export let data;
	const { end_point, members, remark } = data;
</script>

<div class="flex-col space-y-6">
	<MemberSection list={members} />

	<Destination destination={end_point} />

	<Remark {remark} />

	<GroupAction />
</div>

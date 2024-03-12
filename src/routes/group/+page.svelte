<script>
	import MemberSection from '$lib/components/group/membebr-section.svelte';

	import Destination from '$lib/components/group/destination.svelte';
	import GroupAction from '$lib/components/group/group-action.svelte';
	import Remark from '$lib/components/group/remark.svelte';
	let list = [
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Neil Sims' },
			name: 'Neil Sims',
			email: 'email@windster.com',
			value: '$320'
		},
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Bonnie Green' },
			name: 'Bonnie Green',
			email: 'email@windster.com',
			value: '$3467'
		},
		{
			img: { src: '/images/profile-picture-2.webp', alt: 'Michael Gough' },
			name: 'Michael Gough',
			email: 'email@windster.com',
			value: '$67'
		}
	];
</script>

<div class="flex-col space-y-6">
	<MemberSection {list} />

	<Destination destination="藍田地鐵站" />

	<Remark remark="" />

	<GroupAction />
</div>

<script>
	import { Card, Listgroup, Avatar } from 'flowbite-svelte';
	let list = [
		{
			img: { src: '/images/profile-picture-1.webp', alt: 'Neil Sims' },
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
			img: { src: '/images/profile-picture-3.webp', alt: 'Michael Gough' },
			name: 'Michael Gough',
			email: 'email@windster.com',
			value: '$67'
		}
	];
</script>

<svelte:head>
	<title>Dashboard</title>
	<meta name="description" content="Dashboard" />
</svelte:head>

<div class="flex-col">
	<Card padding="lg" size="lg" color="red" class="bg-[#B2DFDB] rounded-xl p-3" >
		<ul class="flex justify-between items-center">
			<li>
				<button class='rounded-xl bg-[#009688] p-2 text-white'>加入</button>
			</li>
			<li>
				<p>目標人數</p>
				<p>3/5</p>
			</li>
			<li>
				<p>美人價錢 ppp</p>
				<p>HK３５</p>
			</li>
			<li>
				<p>距離出發時間</p>
				<p>８３０ｐｍ</p>
			</li>
		</ul>
    <p　class='text-end'>香港抵京酒店</p>
	</Card>

</div>

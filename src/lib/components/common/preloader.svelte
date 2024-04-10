<script>
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<!-- <Infinity /> -->
	<span class="loader" />
	<section class="mx-auto h-full max-w-lg space-y-1 px-4 py-10 text-center" />
</div>

<style>
	.loader {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		display: block;
		margin: 15px auto;
		position: relative;
		color: #f2c7a5;
		box-sizing: border-box;
		animation: animloader 1s linear infinite alternate;
	}

	@keyframes animloader {
		0% {
			box-shadow:
				-38px -12px,
				-14px 0,
				14px 0,
				38px 0;
		}
		33% {
			box-shadow:
				-38px 0px,
				-14px -12px,
				14px 0,
				38px 0;
		}
		66% {
			box-shadow:
				-38px 0px,
				-14px 0,
				14px -12px,
				38px 0;
		}
		100% {
			box-shadow:
				-38px 0,
				-14px 0,
				14px 0,
				38px -12px;
		}
	}
</style>

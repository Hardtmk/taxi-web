<script>
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
	import PresetButton from '$lib/components/common/preset-button.svelte';
	import { createForm } from 'felte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { createEventDispatcher } from 'svelte';
	import { reporter } from '@felte/reporter-svelte';
	import { validator } from '@felte/validator-zod';
	import { userFormSchema } from '$lib/validations/create-user-form';
	import { setUserContext, getUserContext } from '$lib/components/form/user/index.context';
	import FormErrorMessages from '$lib/components/common/form-error-messages..svelte';
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/store/user';
	import { setContext } from 'svelte';

	setUserContext({ isEditing: false });
	const { user, isEditing } = getUserContext();
	const { form, data, setData, isSubmitting, createSubmitHandler, isDirty, reset } = createForm({
		extend: [validator({ schema: userFormSchema }), reporter],

		onSuccess() {
			console.log('login 成功');
			goto('/protected');
		},

		onError(err) {
			if (err?.response?.status === 500) {
				toast.error('網絡出現異常');
			} else {
				toast.error(err?.response?.data.message);
			}
		}
	});
</script>

<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
	<form
		use:form
		on:submit|preventDefault
		class="flex flex-col space-y-6"
		action="/auth/login"
		method="post"
	>
		<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">登入</h3>
		<Label class="space-y-2">
			<span>用戶</span>
			<Input type="text" name="email" placeholder="name@company.com" bind:value={$user.email} />
		</Label>
		<FormErrorMessages inputClass="email" />
		<Label class="space-y-2">
			<span>密碼</span>
			<Input type="password" name="password" placeholder="•••••" bind:value={$user.password} />
		</Label>
		<div class="flex items-start">
			<Checkbox>Remember me</Checkbox>
			<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
				>忘記密碼</a
			>
		</div>
		<PresetButton />
	</form>
</div>
<Toaster />
<!-- <form action="/auth/login" method="POST">
	<input type="text" name="email" placeholder="email" />
	<input type="password" name="password" placeholder="Password" />
	<button type="submit">Sign in</button>
</form> -->

<!-- routing這些都的 -->

<!-- 我要做一個很快的app -->

<!-- 但是如何和action combine 埋一齊呢 -->

<!--  -->

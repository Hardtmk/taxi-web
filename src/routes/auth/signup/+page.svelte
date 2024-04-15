<script>
	import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
	import PresetButton from '$lib/components/common/preset-button.svelte';
	import { createUser } from '$lib/api/user';
	import { createForm } from 'felte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { reporter } from '@felte/reporter-svelte';
	import { validator } from '@felte/validator-zod';
	import { userFormSchema } from '$lib/validations/create-user-form';
	import { setUserContext, getUserContext } from '$lib/components/form/user/index.context';
	import FormErrorMessages from '$lib/components/common/form-error-messages..svelte';
	setUserContext({ isEditing: false });
	const { user } = getUserContext();
	const { form, data, setData, isSubmitting, createSubmitHandler, isDirty, reset } = createForm({
		extend: [validator({ schema: userFormSchema }), reporter],

		onSuccess(response) {
			reset();
		},
		onError(err) {
			if (err.response.status === 500) {
				toast.error('網絡出現異常');
			} else {
				toast.error(err.response.data.message);
			}
		}
	});
</script>

<div class="space-y-4 p-6 sm:p-8 md:space-y-6">
	<form
		class="flex flex-col space-y-6"
		use:form
		on:submit|preventDefault
		action="/auth/signup"
		method="post"
	>
		<h3 class="p-0 text-xl font-medium text-gray-900 dark:text-white">Create and account</h3>
		<Label class="space-y-2">
			<span>姓名</span>
			<Input
				type="text"
				name="fullname"
				placeholder="name@company.com"
				bind:value={$user.fullname}
			/>
		</Label>
		<FormErrorMessages inputClass="fullname" />
		<Label class="space-y-2">
			<span>電郵</span>
			<Input type="email" name="email" placeholder="name@company.com" bind:value={$user.email} />
		</Label>
		<Label class="space-y-2">
			<span>密碼</span>
			<Input type="password" name="password" placeholder="•••••" bind:value={$user.password} />
		</Label>
		<Label class="space-y-2">
			<span>確認密碼</span>
			<Input
				type="password"
				name="confirm-password"
				placeholder="•••••"
				bind:value={$user.password}
			/>
		</Label>
		<div class="flex items-start">
			<Checkbox
				>I accept the <a
					class="font-medium text-primary-600 hover:underline dark:text-primary-500"
					href="/"
				>
					Terms and Conditions</a
				></Checkbox
			>
		</div>
		<PresetButton />
		<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
			已經有賬戶？<a
				href="/"
				class="font-medium text-primary-600 hover:underline dark:text-primary-500">登入</a
			>
		</div>
	</form>
</div>
<Toaster />


<!-- and just keep speaking and speaking, you will focus soon  -->
<!-- just  , once you have chat room, everything will be different
	
-->
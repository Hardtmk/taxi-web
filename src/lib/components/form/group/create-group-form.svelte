<script>
	import { Label, Input, Modal } from 'flowbite-svelte';
	import {
		getTaxiGroupContext,
		setTaxiGroupContext
	} from '$lib/components/form/group/index.context';
	import PresetButton from '$lib/components/common/preset-button.svelte';
	import { groupFormSchema } from '$lib/validations/create-group-form';
	import { createForm } from 'felte';
	import { createEventDispatcher } from 'svelte';
	import { reporter } from '@felte/reporter-svelte';
	import { validator } from '@felte/validator-zod';
	import FormErrorMessages from '../../common/form-error-messages..svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { userStore } from '$lib/store/user';

	const dispatch = createEventDispatcher();
	export let formModal = false;
	setTaxiGroupContext({ isEditingMode: false });
	const { taxiGroup } = getTaxiGroupContext();
	const { form, data, setData, isSubmitting, createSubmitHandler, isDirty, reset } = createForm({
		extend: [validator({ schema: groupFormSchema }), reporter],
		onSuccess() {
			formModal = false;
			toast.success('搭車群組建立成功');
			reset();
			dispatch('reload');
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

<Toaster />

<!--其實你不用理會個folder structure， -->
<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
	<!-- 不太清楚這個位置的route 是不是protected -->
	<form use:form on:submit|preventDefault method="post" action="/protected">
		<Input id="created_by" name="created_by" type="hidden" value={$userStore.userId} />
		<div class="mb-6 w-full">
			<Label class="mb-2 block">終點站</Label>
			<Input id="end_point" name="end_point" type="text" bind:value={$taxiGroup.end_point} />
			<FormErrorMessages inputClass="end_point" />
		</div>

		<div class="mb-6 w-full">
			<Label class="mb-2 block">起點</Label>
			<Input id="start_point" name="start_point" bind:value={$taxiGroup.start_point} />
			<FormErrorMessages inputClass="start_point" />
		</div>
		<div class="mb-6 w-full">
			<Label for="error" class="mb-2 block">人數限制</Label>
			<Input id="limit" type="number" name="limit" bind:value={$taxiGroup.limit} />
			<FormErrorMessages inputClass="limit" />
		</div>
		<div class="mb-6 w-full">
			<Label for="error" class="mb-2 block">出發時間</Label>
			<Input
				id="departure_time"
				type="time"
				name="departure_time"
				bind:value={$taxiGroup.departure_time}
			/>
			<FormErrorMessages inputClass="departure_time" />
		</div>
		<div class="mb-6 w-full">
			<Label for="error" class="mb-2 block">組員額外貢獻</Label>
			<Input
				type="number"
				id="extra_contribution"
				name="extra_contribution"
				bind:value={$taxiGroup.extra_contribution}
			/>
			<FormErrorMessages inputClass="extra_contribution" />
		</div>
		<div class="mb-6 w-full">
			<Label for="error" class="mb-2 block">聯絡電話</Label>
			<Input
				id="contact_number"
				type="number"
				name="contact_number"
				bind:value={$taxiGroup.contact_number}
			/>
			<FormErrorMessages inputClass="contact_number" />
		</div>
		<div class="mb-6 w-full">
			<Label for="error" class="mb-2 block">聯絡電郵</Label>
			<Input
				id="contact_email"
				type="email"
				name="contact_email"
				bind:value={$taxiGroup.contact_email}
			/>
			<FormErrorMessages inputClass="contact_email" />
		</div>
		<div class="mb-6 w-full">
			<Label for="error" class="mb-2 block">備註</Label>
			<Input id="remark" name="remark" required bind:value={$taxiGroup.remark} />
			<FormErrorMessages inputClass="remark" />
		</div>

		<PresetButton type="submit" content="提交" />
	</form>
</Modal>

<script>
	import Subtitles from '../atoms/Subtitles.svelte'

	import Input from '../molecules/Input.svelte'
	import Select from '../molecules/Select.svelte'
	import { property } from '$/store'

	const options = [
		{ value: '1', label: '1+' },
		{ value: '2', label: '2+' },
		{ value: '3', label: '3+' },
		{ value: '4', label: '4+' },
	]
</script>

<div class="flex flex-col gap-2">
	<Subtitles text="Unit info" />
	<div
		class="w-full border-[#E5E5E4] border-solid rounded shadow-custom flex flex-col gap-7 py-6 px-5 border"
	>
		<div class="flex w-full gap-6 flex-wrap">
			<Input label="Unit Name" type="text" bind:value={$property.unitName} />
			<Input
				label="Rent"
				prefix
				suffix
				type="number"
				bind:value={$property.rent}
			/>
			<Input
				label="Deposit"
				prefix
				suffix
				type="number"
				bind:value={$property.deposit}
			/>
			<Input
				label="Lease Length (months)"
				type="number"
				bind:value={$property.lease}
			/>
		</div>

		<div class="flex w-full gap-6 flex-wrap">
			<Select label="Beds" {options} icon="bed" bind:value={$property.beds} />
			<Select
				label="Baths"
				{options}
				icon="bath"
				bind:value={$property.baths}
			/>
			<Input label="Sq. Ft." type="number" bind:value={$property.sqFt} small />
			<Input
				label="Available On"
				type="date"
				bind:value={$property.availableOn}
				small
			/>
			<Select
				label="Vacancy"
				{options}
				icon="people"
				bind:value={$property.vacancy}
			/>
		</div>
	</div>
</div>

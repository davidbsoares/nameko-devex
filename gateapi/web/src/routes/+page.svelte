<script lang="ts">
	import Button from '$/components/atoms/Button.svelte'
	import Heading from '$/components/Heading.svelte'
	import Input from '$/components/molecules/Input.svelte'
	import Select from '$/components/molecules/Select.svelte'
	import UnitInfo from '$/components/atoms/UnitInfo.svelte'
	import Subtitles from '$/components/atoms/Subtitles.svelte'
	import { property } from '$/store'

	const options = [
		{ value: '1', label: '1+' },
		{ value: '2', label: '2+' },
		{ value: '3', label: '3+' },
		{ value: '4', label: '4+' },
	]

	function handleSubmit(
		e: Event & {
			readonly submitter: HTMLElement | null
		}
	) {
		console.log(e)
	}
</script>

<form
	class="flex flex-col gap-8 w-[845px]"
	on:submit|preventDefault={(e) => handleSubmit(e)}
>
	<div class="flex gap-x-20">
		<div class="flex flex-col flex-1">
			<Heading />
			<div class="flex flex-col gap-5 mt-10">
				<Input
					label="Property Name"
					type="text"
					bind:value={$property.propertyName}
				/>
				<Input label="Address" type="text" bind:value={$property.address} />
			</div>
		</div>
		<div class="flex-1">
			<img src="image.png" alt="buildings" class="ml-auto" />
		</div>
	</div>
	<div class="flex flex-col w-full gap-2">
		<Subtitles text="Property Type" />
		<ul class="grid w-full gap-5 md:grid-cols-2">
			<UnitInfo
				icon="single-family"
				label="Single Family"
				bind:value={$property.type}
			/>
			<UnitInfo
				icon="multi-family"
				label="Multi Family"
				bind:value={$property.type}
			/>
			<UnitInfo icon="townhome" label="Townhome" bind:value={$property.type} />
			<UnitInfo icon="condo" label="Condo" bind:value={$property.type} />
		</ul>
	</div>

	<div class="flex flex-col gap-2">
		<Subtitles text="Unit info" />

		<div
			class="w-full border-[#E5E5E4] border-solid rounded shadow-custom flex flex-col gap-7 p-6 border"
		>
			<div class="flex w-full gap-6">
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

			<div class="flex w-full gap-6">
				<Select label="Beds" {options} icon="bed" bind:value={$property.beds} />
				<Select
					label="Baths"
					{options}
					icon="bath"
					bind:value={$property.baths}
				/>
				<Input label="Sq. Ft." type="number" bind:value={$property.sqFt} />
				<Input
					label="Available On"
					type="date"
					bind:value={$property.availableOn}
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

	<div class="flex justify-between">
		<Button label="BACK" />
		<Button label="CONTINUE" contained type="submit" />
	</div>
</form>

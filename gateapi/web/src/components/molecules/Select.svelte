<script lang="ts">
	import type { IconOptions } from '$/types'
	import Icon from '../atoms/Icon.svelte'

	export let value: string
	export let icon: IconOptions
	export let label: string
	export let options: { value: string; label: string }[]
</script>

<div class="flex flex-col gap-1 flex-1">
	<label for={label} class="block font-medium text-gray-700">{label}</label>
	<div class="relative rounded-md shadow-sm">
		<div
			class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
		>
			<Icon {icon} />
		</div>
		<select
			id={label}
			name={label}
			bind:value
			class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-12 pr-3 py-2 text-base border-gray-300 rounded-md appearance-none bg-arrow bg-arrow-size bg-arrow-pos"
		>
			<option selected value="" disabled>Select</option>
			{#each options as option}
				<option value={option.value}>{option.label}</option>
			{/each}
		</select>
	</div>
</div>

<script lang="ts">
	import Icon from '$/components/atoms/Icon.svelte'
	export let icon: string
	export let label: string
	export let value: string

	$: isItemSelected = value === icon
</script>

<div class="flex-[1_0_195px]">
	<input
		type="radio"
		id={icon}
		name={icon}
		class="hidden peer"
		value={icon}
		bind:group={value}
	/>
	<label
		for={icon}
		class="flex items-center justify-center gap-3 px-6 py-5 border border-gray-400 border-solid rounded cursor-pointer"
		class:bg-[#F3F1FE]={isItemSelected}
		class:text-[#3F25C8]={isItemSelected}
		class:font-bold={isItemSelected}
	>
		<Icon height="32px" width="32px" {icon} />

		<span class="text-base">{label}</span>
	</label>
</div>

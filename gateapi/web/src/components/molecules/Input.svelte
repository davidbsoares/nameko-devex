<script lang="ts">
	import type { HTMLInputType } from '$/types'

	export let label: string
	export let prefix: boolean = false
	export let suffix: boolean = false
	export let value: string
	export let type: HTMLInputType
</script>

<div class="flex flex-col gap-1 flex-1">
	<label for={label} class="block font-medium text-gray-700">{label}</label>
	<div class="relative rounded-md shadow-sm">
		{#if prefix}
			<span
				class="absolute inset-y-0 left-0 pl-4 pr-2 flex items-center text-gray-500 text-base"
			>
				<svg
					width="12"
					height="20"
					viewBox="0 0 12 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.875 9.24999H4.125C4.124 9.24999 4.123 9.24999 4.122 9.24999C2.925 9.24999 1.955 8.27999 1.955 7.08299C1.955 5.88599 2.925 4.91599 4.122 4.91599C4.123 4.91599 4.124 4.91599 4.125 4.91599H10.125V3.41599H6.937V0.623993H5.437V3.41599H4.124C4.123 3.41599 4.121 3.41599 4.12 3.41599C2.095 3.41599 0.453003 5.05799 0.453003 7.08299C0.453003 9.10799 2.095 10.75 4.12 10.75C4.121 10.75 4.123 10.75 4.124 10.75H7.874C9.07 10.751 10.039 11.721 10.041 12.917V13.084C10.04 14.28 9.07 15.249 7.874 15.251H1.527V16.751H5.437V19.376H6.937V16.751H7.875C9.899 16.749 11.539 15.108 11.542 13.085V12.918C11.54 10.894 9.899 9.25399 7.876 9.25099L7.875 9.24999Z"
						fill="currentColor"
					/>
				</svg>
			</span>
		{/if}
		<input
			{...{ type }}
			name={label}
			id={label}
			class="focus:ring-indigo-500 focus:border-indigo-500 block w-full text-base border-gray-300 rounded-md"
			class:pl-9={prefix}
			class:pr-12={suffix}
			bind:value
		/>
		{#if suffix}
			<span
				class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 text-base"
				>/mo</span
			>
		{/if}
	</div>
</div>

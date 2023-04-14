<script lang="ts">
	export let label: string
	export let contained: boolean = false
	export let type: 'submit' | 'button' | 'reset' = 'button'
</script>

<button
	{type}
	class="rounded-full text-base font-medium border px-5 py-3 min-w-[124px]"
	class:bg-[#745CF1]={contained}
	class:text-white={contained}
	class:border-[#745CF1]={!contained}
>
	{label}
</button>

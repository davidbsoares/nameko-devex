<script>
	import Subtitles from '../atoms/Subtitles.svelte'
	import UnitInfo from '../atoms/UnitInfo.svelte'
	import { property } from '$/store'
</script>

<div class="flex flex-col w-full gap-2">
	<Subtitles text="Property Type" />
	<div class="flex flex-wrap gap-5">
		<div class="flex flex-wrap flex-[1_0_195px] gap-5">
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
		</div>
		<div class="flex flex-wrap flex-[1_0_195px] gap-5">
			<UnitInfo icon="townhome" label="Townhome" bind:value={$property.type} />
			<UnitInfo icon="condo" label="Condo" bind:value={$property.type} />
		</div>
	</div>
</div>

<script>
	import Heading from '../atoms/Heading.svelte'
	import Input from '../molecules/Input.svelte'
	import { property } from '$/store'
</script>

<div class="flex flex-wrap-reverse gap-x-20 gap-y-10">
	<div class="flex flex-col flex-[6_1_300px]">
		<Heading />
		<div class="flex flex-col gap-5 mt-10">
			<Input
				disableFlex
				label="Property Name"
				type="text"
				bind:value={$property.propertyName}
			/>
			<Input
				disableFlex
				label="Address"
				type="text"
				bind:value={$property.address}
			/>
		</div>
	</div>
	<div class="flex-[1_1_350px] flex justify-center">
		<img src="image.png" alt="buildings" class="object-contain" />
	</div>
</div>

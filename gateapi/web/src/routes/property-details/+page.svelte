<script lang="ts">
	import Button from '$/components/atoms/Button.svelte'
	import { property, type PropertyFormType } from '$/store'
	import PropertyTypeSection from '$/components/organisms/PropertyTypeSection.svelte'
	import InfoSection from '$/components/organisms/InfoSection.svelte'
	import TopSection from '$/components/organisms/TopSection.svelte'

	function handleSubmit(data: PropertyFormType) {
		window.alert(JSON.stringify(data, null, 2))
	}
</script>

<svelte:head>
	<title>Property Details</title>
</svelte:head>

<form
	class="flex flex-col gap-8 max-w-[845px]"
	on:submit|preventDefault={() => handleSubmit($property)}
>
	<TopSection />
	<PropertyTypeSection />
	<InfoSection />

	<div class="flex justify-between">
		<Button label="BACK" />
		<Button label="CONTINUE" contained type="submit" />
	</div>
</form>

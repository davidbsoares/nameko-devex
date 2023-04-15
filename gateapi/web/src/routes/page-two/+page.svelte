<script lang="ts">
	export let data

	const currency = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	})
</script>

<svelte:head>
	<title>Page Two</title>
</svelte:head>

{#each data.order_details as order}
	<div
		class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
	>
		<img class="p-8 rounded-t-lg" src={order.image} alt={order.product.title} />
		<div class="px-5 pb-5">
			<h4
				class="text-2xl text-center font-semibold tracking-tight text-gray-900"
			>
				{order.product.title}
			</h4>
			<div class="flex items-center mt-2.5 mb-5">
				<ul>
					<li><b>Id:</b> {order.product_id}</li>
					<li><b>In Stock:</b> {order.product.in_stock}</li>
					<li><b>Quantity:</b> {order.quantity}</li>
					<li><b>Maximum Speed:</b> {order.product.maximum_speed}</li>
					<li><b>Passenger Capacity:</b> {order.product.passenger_capacity}</li>
				</ul>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-2xl sm:text-3xl font-bold text-gray-900"
					>{currency.format(parseInt(order.price))}</span
				>
				<a
					href="/"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					>Go back</a
				>
			</div>
		</div>
	</div>
{/each}

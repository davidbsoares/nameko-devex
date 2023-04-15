<script>
	import '../app.postcss'
	import { ROUTES } from './routes'
	import { page } from '$app/stores'
</script>

<nav class="bg-white border-gray-200">
	<div
		class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
	>
		<a href="/" class="flex items-center">
			<span class="self-center text-2xl font-semibold whitespace-nowrap"
				>Ília</span
			>
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul
				class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
			>
				{#each Object.entries(ROUTES) as [name, route]}
					<li>
						<a
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
							class:text-white={$page.route.id === route}
							class:bg-blue-700={$page.route.id === route}
							href={route}>{name}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</nav>
<div class="w-full flex justify-center items-center pt-16 sm:px-14 px-2 pb-14">
	<slot />
</div>

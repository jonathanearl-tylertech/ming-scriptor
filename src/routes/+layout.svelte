<script>
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '../app.css';

	const handleClick = () => {
		const el = document.querySelector('input[name="file-input"]');
		if (!el) return;
		// @ts-ignore
		el.click();
	};

	$: selected = $page.data.selected;
	const selectedClass =
		'border-primary text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium';
	const unselectedClass =
		'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700';

	onNavigate((nav) => {
		selected = nav.to?.route.id ?? '';
	});
</script>

<div class="min-h-full">
	<nav class="border-b border-gray-200 bg-white">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-14 justify-between">
				<div class="flex">
					<div
						class="text-primary flex items-center justify-center font-bold tracking-tight text-2xl tracking-[-.11em]"
					>
						MiScraper
					</div>
					<div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
						<a
							href="/"
							class={selected === '/sites' ? selectedClass : unselectedClass}
							aria-current="page">Sites</a
						>
						<a
							href="/results"
							class={selected === '/results' ? selectedClass : unselectedClass}
							aria-current="page">Results</a
						>
					</div>
				</div>
				<div class="flex items-center h-full">
					<button
						on:click={handleClick}
						type="button"
						class="inline-flex h-8 rounded-md px-3 py-2 text-xs font-semibold text-black-200 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						<svg
							class="-ml-0.5 mr-1.5 h-4 w-4"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
							/>
						</svg>
						CSV
					</button>
				</div>
			</div>
		</div>
	</nav>
	<div class="py-10">
		<slot />
	</div>
</div>

<style>
	:global(html) {
		height: 100%;
	}

	:global(body) {
		height: 100%;
	}
</style>

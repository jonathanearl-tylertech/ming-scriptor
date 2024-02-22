<script lang="ts">
	import ResultList from "$lib/components/result-list.svelte";

	const handleScrape = () => {
	};
</script>

<main>
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
		<h1 class="sr-only">Csv's</h1>
		<!-- Main 3 column grid -->
		<div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
			<!-- Left column -->
			<div class="grid grid-cols-1 gap-4 lg:col-span-2">
				<section aria-labelledby="section-1-title">
					<h2 class="sr-only" id="section-1-title">Section title</h2>
					<div class="overflow-hidden">
						<div class="p-6">
							<ResultList />
						</div>
					</div>
				</section>
			</div>

			<!-- Right column -->
			<div class="grid grid-cols-1 gap-4">
				<section aria-labelledby="section-2-title">
					<h2 class="sr-only" id="section-2-title">Section title</h2>
					<div class="overflow-hidden bg-gray-100 rounded-md">
						<div class="p-6">
							<button
								on:click={handleScrape}
								type="button"
								class="inline-flex h-8 rounded-md px-3 py-2 text-xs font-semibold text-white bg-primary hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Run
							</button>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</main>

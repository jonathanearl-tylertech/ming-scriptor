<script lang="ts">
	import { goto } from '$app/navigation';
	import EmptyList from '$lib/components/empty-list.svelte';
	import WebList from '$lib/components/web-list.svelte';
	import { parseCSV } from '$lib/csv';
	import { csv, csvTxt, sites, config } from '$lib/store';

	const handleInput = async () => {
		const el = document.querySelector('input[name="file-input"]');
		if (!el) return;
		// @ts-ignore
		const file = el.files[0];
		const txt = await file.text();
		csvTxt.set(txt);
		console.log({ txt });
		const parsed = parseCSV(txt, { header: false });
		console.log({ parsed });
		csv.set(parsed);
		console.log({ csv: $csv.data });
	};

	const handleSelectRow = async () => {
		const el = document.querySelector('#location');
		// @ts-ignore
		const selectedRow = el.value;
		config.set({ selectedRow });
		sites.set($csv.data.map((r: any) => ({ 
			url: r[selectedRow - 1 ?? 0],
			error: '',
			hasSearchValue: '',
		})));
		console.log($sites);
		await goto('/results');
	};
</script>

<input name="file-input" type="file" accept=".csv" class="hidden" on:input={handleInput} />

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
							<!-- Your content -->
							{#if !$csv || $csv.data.length === 0}
								<EmptyList />
							{:else}
								<WebList />
							{/if}
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
							<div>
								<label for="location" class="block text-sm font-medium leading-6 text-gray-900"
									>Select Row</label
								>
								<select
									on:change={handleSelectRow}
									value={$config.selectedRow}
									id="location"
									name="location"
									class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
								>
									<option selected>Unselected</option>
									{#each Array($csv?.data[0].length ?? 0) as _, i}
										<option id={`option-${i}`} value={`${i}`}>{`${i + 1}`}</option>
									{/each}
								</select>
							</div>
							<!-- <button
								on:click={handleClick}
								type="button"
								class="mt-4 outline inline-flex h-8 rounded-md px-3 py-2 text-xs font-semibold text-black hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Reset
							</button> -->
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</main>

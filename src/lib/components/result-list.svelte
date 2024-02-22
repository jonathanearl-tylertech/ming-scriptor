<script>
	import { sites } from '$lib/store';
</script>

<div class="flow-root">
	<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
			<table class="min-w-full divide-y divide-gray-300">
				<thead>
					<tr>
						<th
							scope="col"
							class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
							>Name</th
						>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
							>HasSearchValue</th
						>
						<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
							>Error</th
						>
						<!-- <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
							>Task</th
						> -->
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200">
					{#each $sites as site, r}
						<tr>
							<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
								>{site.url}</td
							>
							<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{site.hasSearchValue}</td>
							<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{site.error}</td>
							<!-- <td class="whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-0">
								<a href="#" class="text-indigo-600 hover:text-indigo-900">Rerun</a>
							</td> -->
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

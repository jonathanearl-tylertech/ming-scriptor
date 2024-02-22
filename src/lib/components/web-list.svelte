<script lang="ts">
	import { csv } from '$lib/store';
</script>

<div class="web-list flow-root">
	<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 align-middle">
			<table class="min-w-full divide-y divide-gray-300">
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each $csv.data as row, r}
						<tr>
							{#each row as col, c}
								<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{col}</td>
							{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

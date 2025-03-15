<script lang="ts">
	import { Accordion } from 'bits-ui'

	let value = $state<string>()
	let ref = $state<HTMLDivElement | null>(null)
</script>

<div class="w-[400px] text-left">
	<Accordion.Root bind:value bind:ref type="single">
		{#each ['A', 'B', 'C', 'D'] as value}
			<Accordion.Item {value} class="border-b border-neutral-700 px-2">
				<Accordion.Header>
					<Accordion.Trigger
						class="flex w-full items-center justify-between py-7 text-[24px] text-white select-none [&[data-state=open]>span:nth-of-type(2)]:rotate-95"
					>
						<span class="font-bold">Title {value}</span>
						<span class="transition-transform duration-200">👉️</span>
					</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content class="overflow-hidden">
					<div class="pb-7 text-[18px]">Content {value}</div>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<br />

	<table>
		<thead>
			<tr>
				<th>value</th>
				<th>ref</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{value || 'none'}</td>
				<td>{ref}</td>
			</tr>
		</tbody>
	</table>
</div>

<style>
	table {
		width: 100%;
		font-size: 20px;
		border: 1px solid #444;

		th,
		td {
			padding: 16px;
			border: 1px solid #444;
		}
	}
</style>

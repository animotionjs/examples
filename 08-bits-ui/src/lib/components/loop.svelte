<script lang="ts" generics="T">
	import { scale } from 'svelte/transition'
	import type { Snippet } from 'svelte'

	type Props = {
		items: T[]
		item: Snippet<[T]>
		duration?: number
		delay?: number
	}

	let { items, item, duration = 600, delay = 300 }: Props = $props()
	let state: 'suspended' | 'playing' = $state('suspended')

	export function play() {
		state = 'playing'
	}
</script>

{#if state === 'playing'}
	{#each items as $item, i}
		<div in:scale|global={{ duration, delay: delay * i }}>
			{@render item($item)}
		</div>
	{/each}
{/if}

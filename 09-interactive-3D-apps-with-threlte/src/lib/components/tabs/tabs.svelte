<script lang="ts">
	import { setContext } from 'svelte'

	let { children } = $props()
	let tabs = $state([])
	let active = $state({ current: 0 })

	setContext<{ tabs: string[]; active: { current: number } }>('tabs', { tabs, active })
</script>

<div class="h-full border-r border-neutral-700 bg-neutral-900">
	<div class="grid h-full grid-rows-[auto_1fr]">
		<div class="flex border-b border-neutral-700 text-[18px]">
			{#each tabs as label, i}
				<div
					class={[
						'text-neutral-400',
						{ 'border-b border-red-400 text-white': active.current === i }
					]}
				>
					<button
						onclick={() => (active.current = i)}
						class="font-inherit border-none bg-transparent p-4 text-inherit outline-none"
					>
						{label}
					</button>
				</div>
			{/each}
		</div>

		<div class="scrollbar overflow-auto bg-neutral-900 p-4 text-[32px]">
			{@render children?.()}
		</div>
	</div>
</div>

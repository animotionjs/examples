<script lang="ts">
	import { type Snippet } from 'svelte'
	import { fade, scale } from 'svelte/transition'

	type Props = {
		content: Snippet
		output: Snippet
		class?: string
		key?: string | number | boolean
		duration?: number
		transition?: 'fade' | 'scale'
	}

	let { content, output, key, duration = 600, transition = 'fade', ...props }: Props = $props()
</script>

<div
	class={[
		'grid grid-cols-2 overflow-hidden rounded-md border border-neutral-700 shadow-md',
		props.class
	]}
>
	<div class="min-h-0">
		{@render content?.()}
	</div>

	<div class="grid place-items-center bg-neutral-900">
		{#if key}
			{#key key}
				{#if transition === 'fade'}
					<div in:fade|global={{ duration }}>
						{@render output?.()}
					</div>
				{/if}

				{#if transition === 'scale'}
					<div in:scale|global={{ duration }}>
						{@render output?.()}
					</div>
				{/if}
			{/key}
		{:else}
			{@render output?.()}
		{/if}
	</div>
</div>

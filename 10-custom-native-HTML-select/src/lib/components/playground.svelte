<script lang="ts">
	import { type Snippet } from 'svelte'
	import { fade, scale } from 'svelte/transition'

	type Props = {
		input?: Snippet
		output?: Snippet
		class?: string
		key?: string | number | boolean
		duration?: number
		transition?: 'fade' | 'scale'
	}

	let { input, output, key, duration = 600, transition = 'fade', ...props }: Props = $props()
</script>

<div
	class={[
		'overflow-hidden rounded-md border border-neutral-950 bg-neutral-900 shadow-md',
		props.class
	]}
>
	{#if input}
		<div class="min-h-0">
			{@render input?.()}
		</div>
	{/if}

	{#if output}
		<div class="grid place-items-center border-l border-neutral-950">
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
	{/if}
</div>

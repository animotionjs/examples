<script lang="ts">
	import { type Snippet } from 'svelte'
	import { fade } from 'svelte/transition'

	type Props = {
		content: Snippet
		output: Snippet
		class?: string
		key?: string
		duration?: number
	}

	let { content, output, key, duration = 600, ...props }: Props = $props()
</script>

<div class={['grid grid-cols-2 rounded-md border border-neutral-800 shadow-md', props.class]}>
	<div class="min-h-0">
		{@render content?.()}
	</div>

	<div class="grid place-content-center bg-neutral-900">
		{#if key}
			{#key key}
				<div in:fade={{ duration }}>
					{@render output?.()}
				</div>
			{/key}
		{:else}
			{@render output?.()}
		{/if}
	</div>
</div>

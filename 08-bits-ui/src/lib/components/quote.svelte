<script lang="ts">
	import type { Snippet } from 'svelte'

	type Props = {
		children?: Snippet
		caption?: Snippet
		class?: string
	}

	let { children, caption, ...props }: Props = $props()
</script>

<figure
	class={[
		'relative w-max rounded-md border-l-8 border-orange-600 bg-neutral-900 p-8 pl-24 text-left shadow-md shadow-black',
		props.class
	]}
>
	<blockquote>
		<span class="absolute top-[20px] left-[20px] text-[140px] text-orange-600">“</span>
		<p class="text-4xl">{@render children?.()}</p>
	</blockquote>
	{#if caption}
		<figcaption class="mt-4">
			{@render caption()}
		</figcaption>
	{/if}
</figure>

<!-- <style>
	blockquote:before {
		content: '“';
		color: var(--color-orange-600);
		position: absolute;
		font-size: 140px;
		left: 20px;
		top: 20px;
	}
</style> -->

<script lang="ts">
	let { children, uppercase = false, ...props } = $props()

	let ref: HTMLParagraphElement

	export function textSize(size: string) {
		ref.classList.replace('text-8xl', size)
	}
</script>

<div bind:this={ref} class={['text-8xl font-bold', { uppercase }, props.class]}>
	{@render children?.()}
</div>

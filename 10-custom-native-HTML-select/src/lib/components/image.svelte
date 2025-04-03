<script lang="ts">
	let { width = 1400, height = 800, src, ...props } = $props()
</script>

<img
	class={['rounded-lg shadow-md', props.class]}
	{width}
	{height}
	{src}
	alt="preview"
	loading="lazy"
/>

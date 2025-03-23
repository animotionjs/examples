<script lang="ts">
	let { width = 1400, height = 800, src, ...props } = $props()
</script>

<iframe
	class={['rounded-lg shadow-md', props.class]}
	title="iframe"
	{width}
	{height}
	{src}
	frameborder="0"
	loading="lazy"
></iframe>

<!-- 
<iframe
	class={['rounded-lg shadow-md', props.class]}
	title="iframe"
	{width}
	{height}
	data-src={src}
	frameborder="0"
></iframe>
-->

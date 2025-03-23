<script lang="ts">
	let { src, ...props } = $props()

	let video: HTMLVideoElement

	export function play() {
		video.play()
	}
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video
	bind:this={video}
	class={['aspect-video rounded-lg border-2 border-black shadow-xl shadow-black', props.class]}
	data-src={src}
>
</video>

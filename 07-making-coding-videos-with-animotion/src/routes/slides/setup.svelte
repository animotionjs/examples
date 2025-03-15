<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let video: HTMLVideoElement
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">📜 Setup</p>
	</Transition>
</Slide>

<Slide in={() => sfx.click?.play()} class="h-full place-content-center place-items-center">
	<p class="text-6xl font-bold drop-shadow-sm">npm create @animotion</p>
</Slide>

<Slide
	in={() => {
		video.play()
		sfx.click?.play()
	}}
	class="h-full place-content-center place-items-center"
>
	<!-- svelte-ignore a11y_media_has_caption -->
	<video bind:this={video} class="mt-16 rounded-lg shadow-lg" src="/setup.mp4"></video>
</Slide>

<Slide in={() => sfx.click?.play()} class="h-full place-content-center place-items-center">
	<p class="text-6xl font-bold drop-shadow-sm">animotion.pages.dev/docs</p>
</Slide>

<Slide></Slide>

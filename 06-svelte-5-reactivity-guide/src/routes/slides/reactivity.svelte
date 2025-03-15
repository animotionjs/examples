<script lang="ts">
	import { Slide } from '@animotion/core'
	import { Transition } from '$lib/transition'

	let text: HTMLParagraphElement
	let video: HTMLVideoElement
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p bind:this={text} class="text-6xl font-bold drop-shadow-sm">Rethinking Reactivity</p>
	</Transition>

	<Transition
		action={() => {
			text.classList.replace('text-6xl', 'text-4xl')
			video.play()
		}}
	>
		<!-- svelte-ignore @a11y_media_has_caption -->
		<video
			bind:this={video}
			src="assets/reactivity.mp4"
			class="mt-16 aspect-video w-[1200px] rounded-2xl shadow-2xl"
		></video>
	</Transition>
</Slide>

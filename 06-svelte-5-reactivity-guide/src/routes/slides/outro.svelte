<script lang="ts">
	import { Slide } from '@animotion/core'
	import { Transition } from '$lib/transition'

	let video: HTMLVideoElement
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition action={() => video.play()}>
		<!-- svelte-ignore @a11y_media_has_caption -->
		<video
			bind:this={video}
			src="assets/outro.mp4"
			class="mt-16 aspect-video w-[1200px] rounded-2xl shadow-2xl"
		></video>
	</Transition>
</Slide>

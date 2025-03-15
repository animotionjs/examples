<script lang="ts">
	import { Slide, Transition, Action } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let video: HTMLVideoElement
	let post: HTMLImageElement
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">🔴 Recording</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center" transition="none">
	<img
		bind:this={post}
		class="rounded-lg shadow-lg"
		src="/post.png"
		alt="clips"
		style="translate: 0px 5200px; transition: translate 2s var(--ease);"
	/>

	<Action do={() => (post.style.translate = '0px 4240px')} />
	<Action do={() => (post.style.translate = '0px 1140px')} />
	<Action do={() => (post.style.translate = '0px -4100px')} />
	<Action do={() => (post.style.translate = '0px -5200px')} />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img class="rounded-lg shadow-lg" src="/clips.png" alt="clips" />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img class="w-[1600px] rounded-lg shadow-lg" src="/editing.png" alt="clips" />
</Slide>

<Slide></Slide>

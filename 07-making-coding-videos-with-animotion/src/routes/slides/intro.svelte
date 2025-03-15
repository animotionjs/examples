<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">🪄 Animotion</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.click?.play()}>
		<iframe
			title="animotion"
			src="https://animotion.pages.dev/"
			class="h-[900px] w-[1400px] rounded-lg"
			frameborder="0"
		></iframe>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<div class="flex gap-24">
		<Transition do={() => sfx.click?.play()}>
			<img src="/svelte.png" alt="svelte" />
		</Transition>

		<Transition do={() => sfx.click?.play()}>
			<img src="/reveal.png" alt="reveal" />
		</Transition>

		<Transition do={() => sfx.click?.play()}>
			<img src="/tailwind.png" alt="tailwind" />
		</Transition>
	</div>
</Slide>

<Slide></Slide>

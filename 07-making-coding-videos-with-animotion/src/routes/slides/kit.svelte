<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">❤️ SvelteKit</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img class="rounded-lg shadow-lg" src="/sveltekit.png" alt="sveltekit" />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img class="w-[1600px] rounded-lg shadow-lg" src="/kit.png" alt="kit" />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img class="rounded-lg shadow-lg" src="/adapters.png" alt="adapters" />
</Slide>

<Slide></Slide>

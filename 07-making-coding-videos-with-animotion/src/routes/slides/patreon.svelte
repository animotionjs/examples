<script lang="ts">
	import { Slide, Transition } from '@animotion/core'
	import * as sfx from '$lib/extras/sound'
</script>

<Slide class="h-full place-content-center place-items-center">
	<div class="flex items-center gap-8">
		<Transition order={2} do={() => sfx.beep?.play()}>
			<img class="h-[100px] w-[100px]" src="patreon.png" alt="patreon" />
		</Transition>

		<Transition order={1} do={() => sfx.click?.play()}>
			<p class="text-4xl">patreon.com/joyofcode</p>
		</Transition>
	</div>
</Slide>

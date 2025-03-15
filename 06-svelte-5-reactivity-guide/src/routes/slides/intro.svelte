<script lang="ts">
	import { browser } from '$app/environment'
	import { Slide } from '@animotion/core'
	import { Transition } from '$lib/transition'
	import Svelte from '$lib/logo/svelte.svelte'

	function createSound(soundName: string, { volume = 1, loop = false } = {}) {
		if (!browser) return
		const audio = new Audio(`assets/${soundName}.mp3`)
		audio.volume = volume
		audio.loop = loop
		return audio
	}

	const drop = createSound('drop', { volume: 0.5 })
</script>

<Slide class="h-full place-content-center">
	<svg style="display: none;">
		<filter id="r3">
			<feColorMatrix
				in="SourceGraphic"
				type="matrix"
				values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
			>
			</feColorMatrix>
			<feOffset dx="-4" dy="0" result="r"></feOffset><feColorMatrix
				in="SourceGraphic"
				type="matrix"
				values="0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 1 0"
				result="g"
			>
			</feColorMatrix>
			<feColorMatrix
				in="SourceGraphic"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 1 0"
			>
			</feColorMatrix>
			<feOffset dx="4" dy="0" result="b"></feOffset>
			<feBlend in="r" in2="g" result="rg" mode="screen"></feBlend>
			<feBlend in="rg" in2="b" mode="screen"></feBlend></filter
		>
	</svg>

	<Transition action={() => drop?.play()}>
		<div style="filter: url('#r3')">
			<Svelte width={300} height={300} />
			<p class="text-9xl font-bold drop-shadow-sm">Svelte</p>
		</div>
	</Transition>
</Slide>

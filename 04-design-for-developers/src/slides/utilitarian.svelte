<script lang="ts">
	import { Slide, Step } from '@components'
	import { signal } from '@motion'
	import { Marker, Position, scrambler, sfx } from '@lib/extras'
	import { fly } from 'svelte/transition'
	import { quadInOut } from 'svelte/easing'

	let step: 'start' | 'design' | 'definition' | 'end' = 'start'

	const marker = signal({ opacity: 0, x: 14, y: 51, w: 0, h: 60 })
	const markerSfx = sfx('marker')
</script>

<Slide>
	<Step on:in={async () => (step = 'design')} />
	<Step on:in={async () => (step = 'definition')} />
	<Step
		on:in={async () => {
			markerSfx.play()
			await marker.to({ w: 1230, opacity: 1 })
		}}
	/>
	<Step
		on:in={async () => {
			await marker.to({ opacity: 0 }, { duration: 0 })
			step = 'end'
		}}
	/>

	{#if step === 'design'}
		<img
			transition:fly={{ y: 1000, duration: 1000, easing: quadInOut }}
			class="w-[1500px] block mx-auto rounded shadow-md"
			src="linear.png"
			alt="linear"
		/>
	{/if}

	{#if step === 'definition'}
		<div class="relative h-full w-full grid place-content-center">
			<Marker markers={[$marker]} />

			<img
				in:fly={{ y: 1000, duration: 1000, delay: 1000, easing: quadInOut }}
				out:fly={{ y: 1000, duration: 1000, easing: quadInOut }}
				class="w-[1500px] block mx-auto rounded shadow-md"
				src="utilitarian.png"
				alt="definition"
			/>
		</div>
	{/if}
</Slide>

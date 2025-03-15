<script lang="ts">
	import { blur } from 'svelte/transition'
	import { Slide, Step } from '@components'
	import { scrambler } from '@lib/extras'

	let step: 'start' | 'patreon' = 'start'
	let patreon = scrambler('patreon.com/joyofcode')
</script>

<Slide>
	<Step
		on:in={() => {
			step = 'patreon'
			patreon.scramble()
		}}
	/>

	{#if step === 'patreon'}
		<div in:blur={{ duration: 1000 }} class="h-full grid place-items-center">
			<div class="flex items-center gap-8">
				<img class="w-[100px] h-[100px]" src="patreon.png" alt="patreon" />
				<p class="font-mono text-4xl">{$patreon}</p>
			</div>
		</div>
	{/if}
</Slide>

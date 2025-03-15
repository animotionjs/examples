<script lang="ts">
	import { Slide, Transition, Action } from '@animotion/core'
	import { confetti } from '@neoconfetti/svelte'
	import { Preview } from '$lib/components'

	let showConfetti = $state(false)
	let preview: Preview
</script>

<Slide class="center">
	<Transition>
		{#if showConfetti}
			<div
				use:confetti={{ particleCount: 400, stageWidth: 1920, stageHeight: 1080 }}
				class="absolute top-[300px] left-[50%]"
			></div>
		{/if}
		<Preview bind:this={preview} class="mt-8" width={1400} url="https://bits-ui.com/" />
		<Action actions={[() => (showConfetti = true), () => preview.scrollEnd(8000)]} />
	</Transition>
</Slide>

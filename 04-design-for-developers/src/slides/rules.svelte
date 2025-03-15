<script lang="ts">
	import { Slide, Step } from '@components'
	import { cubicInOut } from 'svelte/easing'
	import { fade, fly } from 'svelte/transition'

	let step: 'start' | 'example' | 'example.lines' = 'start'
</script>

<Slide>
	<Step on:in={() => (step = 'example')} />
	<Step on:in={() => (step = 'example.lines')} />
	<Step on:in={() => (step = 'example')} />
	<Step on:in={() => (step = 'start')} />

	{#if step.includes('example')}
		{#if step === 'example.lines'}
			<div in:fade>
				<div
					class="absolute top-[100px] left-0 w-full h-[2px] bg-red-600 z-10"
				/>
				<div
					class="absolute top-[0px] left-[454px] w-[2px] h-full bg-red-600 z-10"
				/>
				<div
					class="absolute top-[0px] right-[462px] w-[2px] h-full bg-red-600 z-10"
				/>
			</div>
		{/if}

		<img
			transition:fly={{ y: 400, duration: 1000, easing: cubicInOut }}
			class="rounded"
			src="stripe.png"
			alt="stripe"
		/>
	{/if}
</Slide>

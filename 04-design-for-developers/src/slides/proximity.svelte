<script lang="ts">
	import { slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { signal } from '@motion'

	let step: 'start' | 'title' | 'no proximity' | 'none' | 'proximity' = 'none'

	const example = signal({ y: 800, opacity: 0 })
	const postedMargin = signal({ top: 0, bottom: 0 })
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step
		on:in={async () => {
			step = 'none'
			await example.to({ y: 0, opacity: 1 })
		}}
	/>
	<Step on:in={async () => await postedMargin.to({ top: 24, bottom: 24 })} />
	<Step on:in={async () => (step = 'no proximity')} />
	<Step on:in={async () => (step = 'none')} />
	<Step on:in={async () => await postedMargin.to({ top: 8, bottom: 24 })} />
	<Step on:in={() => (step = 'proximity')} />
	<Step on:in={async () => await example.to({ y: 800, opacity: 0 })} />

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Proximity</p>
			</div>
		</div>
	{/if}

	<div
		class="h-full grid place-content-center font-sans text-left"
		style:translate="0px {$example.y}px"
		style:opacity={$example.opacity}
	>
		<div
			class="outline-offset-[24px]"
			style:outline="3px solid {step === 'proximity' ? 'aqua' : 'transparent'}"
		>
			<div
				class="outline-offset-4"
				style:outline="3px solid {step === 'proximity'
					? 'aqua'
					: 'transparent'}"
			>
				<h1
					class="text-[40px] font-[800] text-white capitalize outline-offset-4"
					style:outline="3px solid {step === 'no proximity'
						? 'aqua'
						: 'transparent'}"
				>
					The Joy of Painting
				</h1>
				<p
					class="text-[20px] text-[#b5b9c8] outline-offset-4"
					style:margin="{$postedMargin.top}px 0px {$postedMargin.bottom}px 0px"
					style:outline="3px solid {step === 'no proximity'
						? 'aqua'
						: 'transparent'}"
				>
					30 minutes ago
				</p>
			</div>

			<div
				class="max-w-[64ch] grid place-content-center space-y-8 text-[24px] text-[#dee4f6] leading-[1.6] outline-offset-4"
				style:outline="3px solid {step === 'no proximity' ||
				step === 'proximity'
					? 'aqua'
					: 'transparent'}"
			>
				<p>
					The Joy of Painting is an American half-hour instructional television
					show created and hosted by painter Bob Ross which ran from January 11,
					1983, to May 17, 1994.
				</p>
				<p>
					In most episodes, Ross taught techniques for landscape oil painting,
					completing a painting in each session. Occasionally, episodes featured
					a guest artist who would demonstrate a different painting technique.
					The program followed the same format as its predecessor from 1974 to
					1982, The Magic of Oil Painting, hosted by Ross's mentor Bill
					Alexander.
				</p>
				<p>
					Reruns began syndication at PBS stations in the United States in 1992,
					under the moniker The Best of The Joy of Painting, featuring a
					collection of Bob Ross's favorite paintings from past seasons.
				</p>
			</div>
		</div>
	</div>
</Slide>

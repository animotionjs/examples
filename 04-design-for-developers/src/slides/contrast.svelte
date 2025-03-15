<script lang="ts">
	import { slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { signal } from '@motion'

	let step: 'start' | 'title' | 'example' = 'start'

	const example = signal({ opacity: 0, y: 400 })
	const title = signal({ size: 24, weight: 400 })
	const posted = signal({ size: 24, color: 'hsl(226 19% 98%)' })
	const line = signal(1.5)
	const opacity = signal({ left: 1, right: 0 })
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step
		on:in={async () => {
			step = 'example'
			await example.to({ opacity: 1, y: 0 })
		}}
	/>
	<Step on:in={async () => await opacity.to({ right: 1 })} />
	<Step on:in={async () => await title.to({ size: 48 }).to({ weight: 800 })} />
	<Step
		on:in={async () => await posted.to({ size: 20, color: 'hsl(226 19% 80%)' })}
	/>
	<Step on:in={async () => await line.to(1.6)} />
	<Step on:in={async () => await opacity.to({ left: 1 })} />
	<Step on:in={async () => await example.to({ opacity: 0, y: 400 })} />

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Contrast</p>
			</div>
		</div>
	{/if}

	<div
		class="h-full w-full grid grid-cols-2 font-sans text-left"
		style:translate="0px {$example.y}px"
		style:opacity={$example.opacity}
	>
		<div class="grid place-content-center p-16" style:opacity={$opacity.left}>
			<div>
				<h1 class="text-[24px]">The Joy of Painting</h1>
				<p class="text-[24px] mt-[8px]">30 minutes ago</p>
			</div>

			<div class="mt-[24px] space-y-8 leading-normal text-[24px] text-pretty">
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

		<div class="grid place-content-center p-16" style:opacity={$opacity.right}>
			<div>
				<h1 style:font-size="{$title.size}px" style:font-weight={$title.weight}>
					The Joy of Painting
				</h1>
				<p class="text-[20px] mt-[8px]" style:color={$posted.color}>
					30 minutes ago
				</p>
			</div>

			<div
				class="grid place-content-center mt-[24px] space-y-8 text-[24px] text-pretty"
				style:line-height={$line}
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

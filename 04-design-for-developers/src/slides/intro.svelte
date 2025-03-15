<script lang="ts">
	import { Slide, Step } from '@components'
	import { signal } from '@motion'
	import { scrambler } from '@extras'

	const text = signal({ opacity: 0, y: 0 })
	const marker1 = signal({ w: 0, x: 0 })
	const marker2 = signal({ w: 0, x: 0 })

	const visual = scrambler('visual')
	const design = scrambler('design')
</script>

<Slide>
	<Step
		on:in={async () => {
			visual.scramble()
			design.scramble({ duration: 4000 })
			await text.to({ opacity: 1 })
			await marker1.to({ w: 400, x: 1 })
			await marker1.to({ x: 0 })
			await marker2.to({ w: 400, x: 1 })
			await marker2.to({ x: 0 })
		}}
	/>
	<Step on:in={async () => await text.to({ opacity: 0, y: 400 })} />

	<div class="h-full relative grid place-content-center">
		<div
			class="absolute top-[44.4%] left-[27.5%] h-[100px] origin-right bg-[yellow] mix-blend-difference z-10"
			style:width="{$marker1.w}px"
			style:scale="{$marker1.x} 1"
		/>
		<div
			class="absolute top-[44.4%] left-[50%] h-[100px] origin-right bg-[yellow] mix-blend-difference z-10"
			style:width="{$marker2.w}px"
			style:scale="{$marker2.x} 1"
		/>

		<div
			class="flex gap-10 fancy text-8xl font-mono"
			style:opacity={$text.opacity}
			style:translate="0px {$text.y}px"
		>
			<!-- <div class="flex">
				{#each $visual.split('') as letter}
					<span class="w-[60px]">{letter}</span>
				{/each}
			</div>

			<div class="flex">
				{#each $design.split('') as letter}
					<span class="w-[60px]">{letter}</span>
				{/each}
			</div> -->
			{$visual}
			{$design}
		</div>
	</div>
</Slide>

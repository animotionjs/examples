<script lang="ts">
	import { slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import * as d3 from 'd3-interpolate'
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'

	let step: 'start' | 'title' | 'example' = 'start'

	const content = signal({ opacity: 0, y: 1000 })
	const color = signal({ bg: '#171717', text: '#fff' })
	const picker = signal({ x: 930, y: 320, scale: 0 })
	const slider = signal({ x: 0, scale: 0 })
	const hsl = signal({ opacity: 0, l: 68 })

	const interpolateColor = d3.interpolate('#5affff', '#005858')
	const colorRamp: string[] = []
	for (let i = 0; i <= 100; i++) {
		const percentage = i / 100
		const color = interpolateColor(percentage)
		colorRamp.push(color)
	}
	const gradientStops = colorRamp
		.map((color, index) => {
			const stopPercentage = (index / colorRamp.length) * 100
			return `${color} ${stopPercentage}%`
		})
		.join(', ')
	const gradient = `linear-gradient(to right, ${gradientStops})`
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step
		on:in={async () => {
			step = 'example'
			await content.to({ opacity: 1, y: 0 })
		}}
	/>
	<Step on:in={async () => await color.to({ text: '#afafaf' })} />
	<Step
		on:in={async () => await color.to({ text: '#eeeeee', bg: '#5affff' })}
	/>
	<Step
		on:in={async () => {
			await picker.to({ scale: 1 }, { duration: 600 })
			await picker.to({ x: 1400, y: 200 })
			await picker
				.to({ scale: 0.8 }, { duration: 100 })
				.to({ scale: 1 }, { duration: 100 })
			await color.to({ text: '#5affff' }, { duration: 0 })
			await picker.to({ scale: 0 }, { duration: 600 })
			await slider.to({ scale: 1 })
			await hsl.to({ opacity: 1 })
			await all(
				hsl.to({ l: 17 }, { duration: 4000 }),
				slider.to({ x: 100 }, { duration: 4000 }),
				color.to({ text: '#005858' }, { duration: 4000 })
			)
		}}
	/>
	<Step on:in={async () => await content.to({ opacity: 0, y: -1000 })} />

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Text Contrast</p>
			</div>
		</div>
	{/if}

	<div
		class="relative h-full w-full"
		style:translate="0px {$content.y}px"
		style:opacity={$content.opacity}
	>
		<!-- <svg
			width="100"
			height="100"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#001f1f"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="absolute"
			style:scale={$picker.scale}
			style:translate="{$picker.x}px {$picker.y}px"
		>
			<path d="m2 22 1-1h3l9-9" />
			<path d="M3 21v-3l9-9" />
			<path
				d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
			/>
		</svg> -->

		<svg
			width="60"
			height="60"
			viewBox="0 0 512 512"
			class="absolute"
			style:scale={$picker.scale}
			style:translate="{$picker.x}px {$picker.y}px"
		>
			<path
				d="M432.081 190.621l53.305-53.304c32.671-32.671 36.702-82.099 4.046-114.754l-.001-.001c-32.655-32.655-82.097-28.608-114.754 4.047l-53.304 53.304L304.16 62.7c-26.726-26.726-67.128 13.679-40.403 40.403l15.277 15.275c-77.89 77.885-93.102 93.088-191.926 191.912-33.533 33.533-27.587 78.622-47.833 112.04-8.719 14.393-17.943 20.481-29.155 31.692-13.352 13.354-13.513 35.043-.354 48.202l.002.001c13.159 13.159 34.848 12.999 48.201-.355 11.353-11.352 15.735-18.791 29.776-27.952 33.317-21.73 79.775-14.854 113.956-49.035 98.982-98.977 113.035-113.039 191.918-191.919l15.272 15.272c26.724 26.725 67.129-13.676 40.403-40.403l-17.213-17.212zM275.284 322.599c-44.743-10.923-96.383 10.319-136.526-35.253l154.623-154.623 85.889 85.89-103.986 103.986z"
				fill="#005858"
			/>
		</svg>

		<div
			class="w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[200%] shadow-md origin-left"
			style:scale="{$slider.scale} 1"
		>
			<div
				class="w-[10px] h-full absolute bg-white rounded"
				style:left="calc({$slider.x}% - 10px)"
			/>
			<div class="h-[40px] rounded" style:background={gradient} />
			<span
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[18px]"
				style:opacity={$hsl.opacity}
			>
				hsl(180 100% {$hsl.l.toFixed()}%)
			</span>
		</div>

		<div
			class="h-full grid place-content-center text-8xl rounded-lg"
			style:background-color={$color.bg}
		>
			<span class="font-sans font-bold" style:color={$color.text}>
				Contrast
			</span>
		</div>
	</div>
</Slide>

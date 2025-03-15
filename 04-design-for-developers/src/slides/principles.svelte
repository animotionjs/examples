<script lang="ts">
	import { slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'
	import { scrambler, sfx } from '@lib/extras'

	let step:
		| 'start'
		| 'title'
		| 'contrast'
		| 'repetition'
		| 'alignment'
		| 'proximity'
		| 'end' = 'start'

	const viewBox = signal({ x: 0, y: 0, w: 960, h: 540 })
	const example1 = signal({ opacity: 0, cx1: 0 })
	const example2 = signal({ opacity: 0, cx1: 0, cx2: 0, cx3: 0, cx4: 0 })
	const example3 = signal({
		opacity: 0,
		h1: 0,
		w2: 0,
		w3: 0,
		w4: 0,
		w5: 0,
		w6: 0,
		w7: 0,
		w8: 0,
	})
	const example4 = signal({
		cx1: 130,
		cy1: 130,
		cx2: 130,
		cy2: 130,
		cx3: 130,
		cy3: 130,
		cx4: 130,
		cy4: 130,
		cx5: 130,
		cy5: 130,
		cx6: 130,
		cy6: 130,
		cx7: 130,
		cy7: 130,
		cx8: 130,
		cy8: 130,
		cx9: 130,
		cy9: 130,
	})
	const opacity = signal({
		contrast: 0,
		repetition: 0,
		alignment: 0,
		proximity: 0,
	})

	const text1 = scrambler('contrast')
	const text2 = scrambler('repetition')
	const text3 = scrambler('alignment')
	const text4 = scrambler('proximity')

	const transitionSfx = sfx('transition', { vol: 0.1 })
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step
		on:in={async () => {
			step = 'contrast'
			await example1.to({ opacity: 1 }).to({ cx1: 80 })
			await all(opacity.to({ contrast: 1 }), text1.scramble())
		}}
	/>
	<Step
		on:in={async () => {
			step = 'repetition'
			transitionSfx.play()
			await viewBox.to({ x: 960, y: 0, w: 960, h: 540 })
			await example2
				.to({ opacity: 1 })
				.to({ cx1: 0, cx2: 80, cx3: 160, cx4: 240 })
			await all(opacity.to({ repetition: 1 }), text2.scramble())
		}}
	/>
	<Step
		on:in={async () => {
			step = 'alignment'
			transitionSfx.play()
			await viewBox.to({ x: 0, y: 540, w: 960, h: 540 })
			await example3.to({
				opacity: 1,
				h1: 170,
				w2: 120,
				w3: 140,
				w4: 100,
				w5: 120,
				w6: 60,
				w7: 52,
				w8: 100,
			})
			await all(opacity.to({ alignment: 1 }), text3.scramble())
		}}
	/>
	<Step
		on:in={async () => {
			step = 'proximity'
			transitionSfx.play()
			await viewBox.to({ x: 960, y: 540, w: 960, h: 540 })
			await example4.to({
				cx1: 130,
				cy1: 130,
				cx2: 40,
				cy2: 40,
				cx3: 130,
				cy3: 40,
				cx4: 220,
				cy4: 40,
				cx5: 40,
				cy5: 130,
				cx6: 220,
				cy6: 130,
				cx7: 40,
				cy7: 220,
				cx8: 130,
				cy8: 220,
				cx9: 220,
				cy9: 220,
			})
			await all(opacity.to({ proximity: 1 }), text4.scramble())
		}}
	/>
	<Step
		on:in={async () => {
			step = 'end'
			transitionSfx.play()
			await viewBox.to({ x: 0, y: 0, w: 1920, h: 1080 })
		}}
	/>

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Design principles</p>
			</div>
		</div>
	{/if}

	<div class="absolute inset-0">
		<svg viewBox="{$viewBox.x} {$viewBox.y} {$viewBox.w} {$viewBox.h}">
			<g>
				<g transform="translate(440 240)" style:opacity={$example1.opacity}>
					<circle cx={$example1.cx1} cy="0" r="80" fill="yellow" />
					<circle
						cx="0"
						cy="0"
						r="80"
						fill="aqua"
						stroke="#1b1e27"
						stroke-width="4"
					/>
				</g>
				<text
					x="480"
					y="370"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$opacity.contrast}
				>
					{$text1}
				</text>
			</g>

			<g>
				<g transform="translate(1320 240)" opacity={$example2.opacity}>
					<circle
						cx={$example2.cx4}
						cy="0"
						r="80"
						fill="yellow"
						stroke="#1b1e27"
						stroke-width="4"
					/>
					<circle
						cx={$example2.cx3}
						cy="0"
						r="80"
						fill="aqua"
						stroke="#1b1e27"
						stroke-width="4"
					/>
					<circle
						cx={$example2.cx2}
						cy="0"
						r="80"
						fill="yellow"
						stroke="#1b1e27"
						stroke-width="4"
					/>
					<circle
						cx={$example2.cx1}
						cy="0"
						r="80"
						fill="aqua"
						stroke="#1b1e27"
						stroke-width="4"
					/>
				</g>

				<text
					x="1440"
					y="370"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$opacity.repetition}
				>
					{$text2}
				</text>
			</g>

			<g>
				<g transform="translate(420 700)" opacity={$example3.opacity}>
					<rect
						x="0"
						y="0"
						width="10"
						height={$example3.h1}
						rx="2"
						fill="aqua"
					/>

					<rect
						x="24"
						y="14"
						width={$example3.w2}
						height="10"
						rx="2"
						fill="#fff"
					/>
					<rect
						x="24"
						y="38"
						width={$example3.w3}
						height="10"
						rx="2"
						fill="#fff"
					/>
					<rect
						x="24"
						y="62"
						width={$example3.w4}
						height="10"
						rx="2"
						fill="#fff"
					/>

					<rect
						x="24"
						y="100"
						width={$example3.w5}
						height="10"
						rx="2"
						fill="#fff"
					/>
					<rect
						x="24"
						y="124"
						width={$example3.w6}
						height="10"
						rx="2"
						fill="#fff"
					/>
					<rect
						x="90"
						y="124"
						width={$example3.w7}
						height="10"
						rx="2"
						fill="#fff"
					/>
					<rect
						x="24"
						y="148"
						width={$example3.w8}
						height="10"
						rx="2"
						fill="#fff"
					/>
				</g>

				<text
					x="480"
					y="920"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$opacity.alignment}
				>
					{$text3}
				</text>
			</g>

			<g>
				<g transform="translate(1310 660)">
					<circle cx={$example4.cx9} cy={$example4.cy9} r="40" fill="aqua" />
					<circle cx={$example4.cx8} cy={$example4.cy8} r="40" fill="aqua" />
					<circle cx={$example4.cx7} cy={$example4.cy7} r="40" fill="aqua" />
					<circle cx={$example4.cx6} cy={$example4.cy6} r="40" fill="aqua" />
					<circle cx={$example4.cx5} cy={$example4.cy5} r="40" fill="aqua" />
					<circle cx={$example4.cx4} cy={$example4.cy4} r="40" fill="aqua" />
					<circle cx={$example4.cx3} cy={$example4.cy3} r="40" fill="aqua" />
					<circle cx={$example4.cx2} cy={$example4.cy2} r="40" fill="aqua" />
					<circle cx={$example4.cx1} cy={$example4.cy1} r="40" fill="yellow" />
				</g>

				<text
					x="1440"
					y="960"
					fill="#fff"
					text-anchor="middle"
					dominant-baseline="middle"
					class="font-mono text-2xl"
					style:opacity={$opacity.proximity}
				>
					{$text4}
				</text>
			</g>
		</svg>
	</div>
</Slide>

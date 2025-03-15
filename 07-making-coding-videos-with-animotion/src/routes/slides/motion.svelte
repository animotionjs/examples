<script lang="ts">
	import { Slide, Code, Transition, Action } from '@animotion/core'
	import { tween } from '@animotion/motion'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let code: Code
	let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' })
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">🏃 Motion</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<Code
			bind:this={code}
			lang="svelte"
			theme="poimandres"
			code={`
				<script>
					import { tween } from '@animotion/motion'
				<\/script>
      `}
			options={{ duration: 600, stagger: 0.3, containerStyle: false }}
		/>
	</Transition>

	<Action do={() => code.selectLines`2`} />

	<Action
		do={() => {
			code.update`
				<script>
					import { tween } from '@animotion/motion'
					
					let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' })					
				<\/script>
			`
			code.selectLines`4`
		}}
	/>

	<Action
		do={() => {
			code.update`
				<script>
					import { tween } from '@animotion/motion'

					let circle = tween({ x: 0, y: 80, r: 80, fill: '#00ffff' })					
				<\/script>

				<svg width="560" height="160" viewBox="-80 0 560 160">
					<circle cx={$circle.x} cy={$circle.y} r={$circle.r} fill={$circle.fill} />
					<text
						x={$circle.x}
						y={$circle.y}
						font-size={$circle.r * 0.4}
						font-family="Monaspace Neon"
						text-anchor="middle"
						dominant-baseline="middle"
					>
						{$circle.x.toFixed(0)}
					</text>
				</svg>
			`
			code.selectLines`7-19`
		}}
	/>

	<Action
		do={async () => {
			await code.selectLines`*`
			await code.update`
				<script>
					async function animate() {
						// ...
					}
				<\/script>
			`
		}}
	/>

	<Transition class="mt-16">
		<svg width="560" height={$circle.r * 2} viewBox="-80 0 560 {$circle.r * 2}">
			<circle cx={$circle.x} cy={$circle.y} r={$circle.r} fill={$circle.fill} />
			<text
				x={$circle.x}
				y={$circle.y}
				font-size={$circle.r * 0.4}
				font-family="JetBrains Mono"
				text-anchor="middle"
				dominant-baseline="middle"
			>
				{$circle.x.toFixed(0)}
			</text>
		</svg>
	</Transition>

	<Action
		do={async () => {
			await code.selectLines`*`
			await code.update`
				<script>
					async function animate() {
						await circle.to({ x: 400, fill: '#ffff00' })
					}
				<\/script>
			`
			await code.selectLines`3`
			await circle.to({ x: 400, fill: '#ffff00' })
		}}
	/>

	<Action
		do={async () => {
			await code.update`
				<script>
					async function animate() {
						await circle.to({ x: 400, fill: '#ffff00' })
						await circle.to({ x: 0, fill: '#00ffff' })
					}
				<\/script>
      `
			await code.selectLines`4`
			await circle.to({ x: 0, fill: '#00ffff' })
		}}
	/>

	<Action do={() => code.selectLines`*`} />
</Slide>

<Slide></Slide>

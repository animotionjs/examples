<script lang="ts">
	import { flip } from 'svelte/animate'
	import { fade, fly, scale, slide } from 'svelte/transition'
	import { cubicInOut, quadInOut } from 'svelte/easing'
	import shuffle from 'just-shuffle'
	import { Slide, Step } from '@components'
	import { signal } from '@motion'

	let step: 'start' | 'title' | 'palette' | 'wheel' | 'rule' = 'start'
	let colors = [
		{ value: '#05445E', name: 'Navy Blue', text: '#fff' },
		{ value: '#189AB4', name: 'Blue Grotto', text: '#fff' },
		{ value: '#75E6DA', name: 'Blue Green', text: '#000' },
		{ value: '#D4F1F4', name: 'Baby Blue', text: '#000' },
	]

	const primary = signal({ x: 50, y: 50, opacity: 0 })
	const secondary = signal({ x: 50, y: 50, opacity: 0 })
	const rule = signal({
		background: 'hsl(0 0% 10%)',
		button: 'hsl(0 0% 100%)',
		opacity: 0,
	})
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step on:in={() => (step = 'palette')} />
	<Step
		on:in={async () => {
			const duration = 6000
			const start = performance.now()
			const interval = setInterval(() => {
				let elapsed = performance.now() - start
				colors = shuffle(colors, { shuffleAll: true })
				elapsed > duration && clearInterval(interval)
			}, 900)
		}}
	/>
	<Step on:in={() => (step = 'wheel')} />
	<Step
		on:in={async () => await primary.to({ x: 10, y: 68 }).to({ opacity: 1 })}
	/>
	<Step
		on:in={async () => await secondary.to({ x: 90, y: 28 }).to({ opacity: 1 })}
	/>
	<Step on:in={() => (step = 'rule')} />
	<Step on:in={async () => await rule.to({ opacity: 1 })} />
	<Step on:in={async () => await rule.to({ opacity: 0 })} />
	<Step
		on:in={async () => await rule.to({ background: 'hsl(240 100% 47%)' })}
	/>
	<Step on:in={async () => await rule.to({ button: 'hsl(60 100% 47%)' })} />

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Colors</p>
			</div>
		</div>
	{/if}

	{#if step === 'palette'}
		<div class="h-full grid grid-cols-4 font-mono text-black">
			{#each colors as color, i (color)}
				<div
					animate:flip={{ duration: 800, easing: quadInOut }}
					transition:fly|global={{ y: 1000, duration: 800 }}
					class="relative"
					style:background-color={color.value}
				>
					<div
						in:fade|global={{ delay: (i + 1) * 400 }}
						class="max-w absolute bottom-[40px] left-1/2 -translate-x-1/2"
						style:color={color.text}
					>
						<p class="text-3xl">{color.value.replace('#', '')}</p>
						<p class="w-max mt-4 text-2xl">{color.name}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	{#if step === 'wheel'}
		<div
			in:scale={{ duration: 800, delay: 800 }}
			out:scale={{ duration: 800, delay: 0 }}
			class="h-full grid place-content-center"
		>
			<div class="relative color-wheel w-[500px] h-[500px] rounded-full">
				<div
					class="absolute w-[30px] h-[30px] border-4 border-[#fff] rounded-full"
					style:top="{$primary.y}%"
					style:left="{$primary.x}%"
					style:translate="-50% -50%"
				>
					<p
						class="w-max absolute top-[30px] left-1/2 -translate-x-1/2 font-mono text-2xl"
						style:opacity={$primary.opacity}
					>
						hsl(240 100% 47%)
					</p>
				</div>
				<div
					class="absolute w-[20px] h-[20px] border-4 border-[#fff] rounded-full"
					style:top="{$secondary.y}%"
					style:left="{$secondary.x}%"
					style:translate="-50% -50%"
				>
					<p
						class="w-max absolute top-[20px] left-1/2 -translate-x-1/2 font-mono text-2xl"
						style:opacity={$secondary.opacity}
					>
						hsl(60 100% 47%)
					</p>
				</div>
			</div>
		</div>
	{/if}

	{#if step === 'rule'}
		<div
			in:scale={{ duration: 800, delay: 800 }}
			class="relative h-full grid place-content-center"
			style:background-color={$rule.background}
		>
			<div>
				<p class="font-sans text-8xl text-white font-black uppercase">
					Less than 50%<br />are subscribed
				</p>
				<button
					class="w-max mx-auto mt-16 px-8 py-4 text-3xl font-sans font-bold text-black capitalize rounded-full shadow-lg"
					style:background-color={$rule.button}
				>
					Subscribe
				</button>
			</div>

			<div
				class="absolute inset-0"
				style:background-color="hsl(0 0% 10%)"
				style:opacity={$rule.opacity}
			>
				<div
					class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex mx-auto font-sans font-semibold"
				>
					<div
						class="w-[140px] h-[140px] grid place-content-center -mr-4 rounded-full z-30"
						style:background-color="hsl(240 100% 47%)"
					>
						60%
					</div>
					<div
						class="w-[140px] h-[140px] grid place-content-center -mr-4 text-black rounded-full z-20"
						style:background-color=" hsl(0 0% 100%)"
					>
						30%
					</div>
					<div
						class="w-[140px] h-[140px] grid place-content-center text-black rounded-full z-10"
						style:background-color=" hsl(60 100% 47%) "
					>
						10%
					</div>
				</div>
			</div>
		</div>
	{/if}
</Slide>

<style>
	.color-wheel {
		background-image: radial-gradient(
				circle at 50% 0,
				red,
				rgba(242, 13, 13, 0.8) 10%,
				rgba(230, 26, 26, 0.6) 20%,
				rgba(204, 51, 51, 0.4) 30%,
				rgba(166, 89, 89, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 85.35533905932738% 14.644660940672622%,
				#ffbf00,
				rgba(242, 185, 13, 0.8) 10%,
				rgba(230, 179, 26, 0.6) 20%,
				rgba(204, 166, 51, 0.4) 30%,
				rgba(166, 147, 89, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 100% 50%,
				#80ff00,
				rgba(128, 242, 13, 0.8) 10%,
				rgba(128, 230, 26, 0.6) 20%,
				rgba(128, 204, 51, 0.4) 30%,
				rgba(128, 166, 89, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 85.35533905932738% 85.35533905932738%,
				#00ff40,
				rgba(13, 242, 70, 0.8) 10%,
				rgba(26, 230, 77, 0.6) 20%,
				rgba(51, 204, 89, 0.4) 30%,
				rgba(89, 166, 108, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 50.00000000000001% 100%,
				#0ff,
				rgba(13, 242, 242, 0.8) 10%,
				rgba(26, 230, 230, 0.6) 20%,
				rgba(51, 204, 204, 0.4) 30%,
				rgba(89, 166, 166, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 14.64466094067263% 85.35533905932738%,
				#0040ff,
				rgba(13, 70, 242, 0.8) 10%,
				rgba(26, 77, 230, 0.6) 20%,
				rgba(51, 89, 204, 0.4) 30%,
				rgba(89, 108, 166, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 0 50.00000000000001%,
				#7f00ff,
				rgba(128, 13, 242, 0.8) 10%,
				rgba(128, 26, 230, 0.6) 20%,
				rgba(128, 51, 204, 0.4) 30%,
				rgba(128, 89, 166, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			),
			radial-gradient(
				circle at 14.644660940672615% 14.64466094067263%,
				#ff00bf,
				rgba(242, 13, 185, 0.8) 10%,
				rgba(230, 26, 179, 0.6) 20%,
				rgba(204, 51, 166, 0.4) 30%,
				rgba(166, 89, 147, 0.2) 40%,
				hsla(0, 0%, 50%, 0) 50%
			);
	}
</style>

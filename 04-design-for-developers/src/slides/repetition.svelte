<script lang="ts">
	import { fly, scale, slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { signal } from '@motion'

	let step:
		| 'start'
		| 'title'
		| 'example'
		| 'example.scroll'
		| 'example.repetition' = 'start'

	const line = signal({ y: '128', rotate: 0, opacity: 0 })
	const page = signal({ opacity: 0 })
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step on:in={() => (step = 'example')} />
	<Step on:in={() => (step = 'example.scroll')} />
	<Step on:in={() => (step = 'example.repetition')} />
	<Step
		on:in={async () => {
			await line.to({ opacity: 1 }, { duration: 0 })
			await line.to({ y: '926', rotate: 90, opacity: 1 }, { duration: 2000 })
			await page.to({ opacity: 90 }, { duration: 2000 })
		}}
	/>

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Repetition</p>
			</div>
		</div>
	{/if}

	{#if step.includes('example')}
		<div
			in:fly={{ y: 1000, duration: 1000, easing: cubicInOut }}
			class="p-16 h-full mx-auto font-sans text-white bg-gray-800 text-left"
		>
			<nav>
				<div
					class="absolute h-[8px] w-[86px] origin-left bg-[aqua]"
					style:top="{$line.y}px"
					style:rotate="{$line.rotate}deg"
					style:opacity={$line.opacity}
				/>
				<p class="w-max text-3xl font-bold uppercase border-t-8 border-[aqua]">
					Logo
				</p>
			</nav>

			<div class="h-full mt-60">
				<p class="text-8xl font-bold capitalize text-center">
					Section with<br />more content
				</p>

				{#if step === 'example.scroll'}
					<div
						transition:scale={{ duration: 600, easing: cubicInOut }}
						class="absolute left-1/2 bottom-[140px] -translate-x-1/2 text-[#b2c9e5]"
					>
						<svg
							width="60"
							height="60"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mx-auto"
						>
							<rect x="5" y="2" width="14" height="20" rx="7" />
							<path d="M12 6v4" />
						</svg>
						<p class="mt-2 text-2xl text-center capitalize">
							Scroll more idiot
						</p>
					</div>
				{/if}

				{#if step === 'example.repetition'}
					<div
						class="absolute bottom-[112px] left-[148px] font-semibold"
						style:opacity={$page.opacity}
					>
						01
					</div>
				{/if}
			</div>
		</div>
	{/if}
</Slide>

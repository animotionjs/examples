<script lang="ts">
	import { blur, fade, fly, slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { signal } from '@motion'

	let step:
		| 'start'
		| 'title'
		| 'typeface.serif'
		| 'typeface.serifs'
		| 'typeface.sans'
		| 'typeface.mono'
		| 'fonts'
		| 'grid'
		| 'weights'
		| 'weights-skip'
		| 'color'
		| 'color-absolute'
		| 'color-subtle' = 'start'

	const text = signal({ h: 0, s: 0, l: 100 })
	const background = signal({ h: 0, s: 0, l: 0 })
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step on:in={() => (step = 'typeface.serif')} />
	<Step on:in={() => (step = 'typeface.serifs')} />
	<Step on:in={() => (step = 'typeface.sans')} />
	<Step on:in={() => (step = 'typeface.mono')} />
	<Step on:in={() => (step = 'fonts')} />
	<Step on:in={() => (step = 'grid')} />
	<Step on:in={() => (step = 'weights')} />
	<Step on:in={() => (step = 'weights-skip')} />
	<Step on:in={() => (step = 'color')} />
	<Step
		on:in={async () => {
			await background.to({ h: 0, s: 0, l: 10 })
			await text.to({ h: 0, s: 0, l: 96 })
		}}
	/>
	<Step
		on:in={async () => {
			await background.to({ h: 0, s: 4, l: 10 })
			await text.to({ h: 0, s: 80, l: 96 })
		}}
	/>
	<Step
		on:in={async () => {
			await background.to({ h: 220, s: 10, l: 10 })
			await text.to({ h: 220, s: 80, l: 96 })
		}}
	/>

	<div class="h-full grid place-items-center text-white">
		{#if step === 'title'}
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Typography</p>
			</div>
		{/if}

		{#if step.includes('typeface.serif')}
			<div in:blur class="relative w-max mx-auto">
				<p class="text-9xl font-serif">serif</p>

				{#if step === 'typeface.serifs'}
					<div transition:fade>
						<div
							class="absolute top-[78px] left-[-6px] aspect-square w-[40px] border-4 border-red-400 rounded-full"
						/>
						<div
							class="absolute top-[28px] left-[128px] aspect-square w-[40px] border-4 border-red-400 rounded-full"
						/>
						<div
							class="absolute top-[-10px] left-[270px] aspect-square w-[40px] border-4 border-red-400 rounded-full"
						/>
					</div>
				{/if}
			</div>
		{/if}

		{#if step === 'typeface.sans'}
			<div in:blur>
				<p class="text-9xl font-sans">sans-serif</p>
			</div>
		{/if}

		{#if step === 'typeface.mono'}
			<div in:blur>
				<p class="text-9xl font-mono">monospaced</p>
			</div>
		{/if}

		{#if step === 'fonts'}
			<div class="space-y-16">
				{#each ['Inter', 'Manrope', 'Montserrat', 'Poppins'] as font, i}
					<div
						in:fly|global={{ y: 400, duration: 1000, delay: i * 300 }}
						out:fly|global={{ y: 400, duration: 1000 }}
						class="px-4 pb-12 text-left border-b border-[#909bb4]"
					>
						<p class="text-3xl font-sans">{font}</p>
						<p class="mt-8 text-6xl font-semibold" style:font-family={font}>
							The quick brown fox jumps over the lazy dog
						</p>
					</div>
				{/each}
			</div>
		{/if}

		{#if step === 'grid'}
			<div>
				<p in:blur={{ delay: 6000 }} class="absolute top-[210px] text-4xl">
					8 point grid
				</p>

				<div
					in:fly={{ y: 400, duration: 1000, delay: 1000 }}
					class="relative flex items-end gap-[8px] scale-[8] bg-gray-700"
				>
					<div class="absolute left-0 top-0 inset-0">
						{#each { length: 21 } as _, colsIndex}
							<div
								class="absolute w-[1px] h-full bg-[#1b1e27]"
								style:left="{(colsIndex + 1) * 8}px"
							/>
						{/each}

						{#each { length: 7 } as _, rowsIndex}
							<div
								class="absolute w-full h-[1px] bg-[#1b1e27]"
								style:top="{(rowsIndex + 1) * 8}px"
							/>
						{/each}
					</div>

					{#each [8, 16, 24, 32, 64] as value, i}
						<div
							in:fade|global={{ delay: (i + 1) * 1000 }}
							class="grid place-content-center bg-gray-500"
							style:width="{value}px"
							style:height="{value}px"
						>
							<p
								class="mt-[2px] text-white z-10"
								style:font-size="{value * 0.3}px"
							>
								{value}px
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if step.includes('weights')}
			<div class="grid grid-cols-2 gap-x-10">
				<div
					class="space-y-16 transition-opacity"
					style:opacity={step === 'weights-skip' ? 0.5 : 1}
				>
					{#each [400, 500, 600] as weight, i}
						<div
							in:fly|global={{ y: 400, duration: 1000, delay: i * 300 }}
							out:fly|global={{ y: 400, duration: 1000 }}
							class="px-4 pb-12 font-sans text-left border-b border-[#909bb4]"
						>
							<p class="text-3xl">{weight}</p>
							<p class="mt-8 text-6xl font-semibold" style:font-weight={weight}>
								The quick brown fox jumps over the lazy dog
							</p>
						</div>
					{/each}
				</div>

				<div
					class="space-y-16"
					style:opacity={step === 'weights-skip' ? 1 : 0.5}
				>
					{#each [400, 600, 800] as weight, i}
						<div
							in:fly|global={{ y: 400, duration: 1000, delay: i * 300 }}
							out:fly|global={{ y: 400, duration: 1000 }}
							class="px-4 pb-12 font-sans text-left border-b border-[#909bb4] transition-opacity"
						>
							<p class="text-3xl">{weight}</p>
							<p class="mt-8 text-6xl font-semibold" style:font-weight={weight}>
								The quick brown fox jumps over the lazy dog
							</p>
						</div>
					{/each}
				</div>
			</div>
		{/if}

		{#if step.includes('color')}
			<div
				in:fly|global={{ y: 400, duration: 1000, delay: 1000 }}
				class="relative w-full h-full grid place-content-center rounded-2xl"
				style:background-color="hsl({$background.h}
				{$background.s}% {$background.l}%)"
			>
				<span
					class="relative font-sans text-8xl font-black"
					style:color="hsl({$text.h}
					{$text.s}% {$text.l}%)"
				>
					<span
						class="w-max absolute -top-[48px] left-1/2 -translate-x-1/2 p-2 font-mono font-normal text-2xl"
					>
						hsl({$text.h.toFixed()}
						{$text.s.toFixed()}% {$text.l.toFixed()}%)
					</span>
					Contrast
				</span>

				<span
					class="w-max absolute left-1/2 bottom-[200px] -translate-x-1/2 p-2 font-mono text-2xl"
				>
					hsl({$background.h.toFixed()}
					{$background.s.toFixed()}% {$background.l.toFixed()}%)
				</span>
			</div>
		{/if}
	</div>
</Slide>

<script lang="ts">
	import { fade, slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'

	let step: 'start' | 'title' | 'example' | 'spacing' = 'start'

	const layout = signal({ y: 400, opacity: 0 })
	const grid = signal({ opacity: 0 })
	const title = signal({ chars: 80 })
	const description = signal({ chars: 80 })
	const horizontal = signal({ opacity: 0 })
	const vertical = signal({ opacity: 0 })
	const middle = signal({ opacity: 0 })

	let textAlignment = 'center'
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step
		on:in={async () => {
			step = 'example'
			await layout.to({ y: 0, opacity: 1 })
		}}
	/>
	<Step on:in={async () => await grid.to({ opacity: 1 })} />
	<Step
		on:in={async () => {
			await title.to({ chars: 20 })
			await description.to({ chars: 50 })
		}}
	/>
	<Step on:in={async () => (textAlignment = 'left')} />
	<Step on:in={async () => await horizontal.to({ opacity: 1 })} />
	<Step on:in={async () => await vertical.to({ opacity: 1 })} />
	<Step on:in={async () => await middle.to({ opacity: 1 })} />
	<Step
		on:in={async () => {
			await all(
				grid.to({ opacity: 0 }),
				horizontal.to({ opacity: 0 }),
				vertical.to({ opacity: 0 }),
				middle.to({ opacity: 0 })
			)
		}}
	/>
	<Step on:in={() => (step = 'spacing')} />
	<Step
		on:in={async () => {
			step = 'start'
			await layout.to({ y: 400, opacity: 0 })
		}}
	/>

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Alignment</p>
			</div>
		</div>
	{/if}

	{#if step === 'spacing'}
		<div in:fade>
			<div
				class="absolute top-[90px] left-[104px] w-[450px] h-[120px] bg-red-600 rounded"
			/>
			<div
				class="absolute top-[414px] left-[900px] w-[120px] h-[120px] bg-red-600 rounded"
			/>
			<div
				class="absolute top-[54px] right-[170px] w-[40px] h-[40px] bg-red-600"
			/>
			<div
				class="absolute top-[660px] left-[635px] w-[40px] h-[40px] bg-red-600"
			/>
			<div
				class="absolute top-[660px] right-[635px] w-[40px] h-[40px] bg-red-600"
			/>
		</div>
	{/if}

	<div
		class="absolute top-[84px] left-0 h-[2px] w-full bg-red-600 z-10"
		style:opacity={$horizontal.opacity}
	/>
	<div
		class="absolute top-0 h-full w-[2px] bg-red-600 z-10"
		style:opacity={$vertical.opacity}
	/>
	<div
		class="absolute top-0 right-[62px] h-full w-[2px] bg-red-600 z-10"
		style:opacity={$vertical.opacity}
	/>
	<div
		class="absolute top-0 left-1/2 h-full w-[2px] bg-red-600 z-10"
		style:opacity={$middle.opacity}
	/>

	<div class="relative h-full font-sans text-white">
		<div
			class="mx-auto"
			style:translate="0px {$layout.y}px"
			style:opacity={$layout.opacity}
		>
			<nav class="flex justify-between">
				<span class="text-[24px] font-black uppercase">Joy</span>
				<ul class="flex gap-10 text-[20px] font-semibold">
					<li>Articles</li>
					<li>Newsletter</li>
				</ul>
			</nav>

			<div>
				<h1
					class="mx-auto mt-[120px] text-[60px] font-black capitalize"
					style:max-width="{$title.chars}ch"
				>
					Exclusive: The painter that inspired a generation
				</h1>
				<p
					class="mt-[24px] mx-auto text-[24px] leading-[1.3]"
					style:max-width="{$description.chars}ch"
				>
					Exclusive behind-the-scenes look at American painter Bob Ross's
					journey from humble beginnings to pop culture icon status.
				</p>
			</div>

			<div class="grid grid-cols grid-cols-3 gap-x-10 mt-[120px]">
				{#each { length: 3 } as _}
					<div style:text-align={textAlignment}>
						<div
							class="h-[300px] grid place-items-center bg-gray-700 rounded-2xl"
						>
							<svg
								width="50%"
								height="50%"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="1"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
								<circle cx="9" cy="9" r="2" />
								<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
							</svg>
						</div>
						<h2
							class="mt-[24px] text-[24px] font-bold leading-[1.2] capitalize"
						>
							You have the ability to move mountains
						</h2>
						<p class="text-[20px] mt-[16px] leading-[1.3]">
							In painting you have unlimited power. You have the ability to move
							mountains. You can bend rivers. But when I get home the only thing
							I have power over is the garbage.
						</p>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="absolute top-0 h-full w-full grid grid-cols-12 gap-x-10 -z-10"
			style:opacity={$grid.opacity}
		>
			{#each { length: 12 } as _}
				<div class="bg-gray-800" />
			{/each}
		</div>
	</div>
</Slide>

<script lang="ts">
	import { Slide, Code, Transition, Action } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let actions: Code
	let items = $state([1, 2, 3, 4])

	const box =
		'grid h-[240px] w-[240px] place-content-center rounded-2xl border-t-2 border-white bg-gray-200 text-6xl font-semibold text-black shadow-2xl'
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">🤸 Layout Animations</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition
		order={6}
		do={() => actions.selectLines`*`}
		class="grid h-[496px] grid-cols-2 grid-rows-2 gap-4"
	>
		{#each items as item (item)}
			<Transition class={box} transition="rotate">
				{item}
			</Transition>
		{/each}
	</Transition>

	<Transition order={1} do={() => sfx.click?.play()} class="mt-16">
		<Code
			bind:this={actions}
			lang="svelte"
			theme="poimandres"
			code={`
				<div class="mt-16 grid grid-cols-2 grid-rows-2 gap-4">
					<Transition enter="rotate">1</Transition>
					<Transition enter="rotate">2</Transition>
					<Transition enter="rotate">3</Transition>
					<Transition enter="rotate">4</Transition>
				</div>
			`}
			options={{ duration: 600, stagger: 0.1, containerStyle: false }}
		/>
	</Transition>

	<Action
		order={3}
		do={() =>
			actions.update`
				<script>
					let items = $state([1, 2, 3, 4])
				<\/script>

				<div class="mt-16 grid grid-cols-2 grid-rows-2 gap-4">
					{#each items as item (item)}
						<Transition enter="rotate">
							{item}
						</Transition>
					{/each}
				</div>
		`}
	/>

	<Action order={4} do={() => actions.selectLines`2`} />
	<Action order={5} do={() => actions.selectLines`6-10`} />

	<Action
		do={() =>
			actions.update`
				<Transition do={() => items = [4, 3, 2, 1]} />
				<Transition do={() => items = [2, 1, 4, 3]} />
				<Transition do={() => items = [4, 3, 2, 1]} />
				<Transition do={() => items = [1, 2, 3, 4]} />
		`}
	/>

	<Transition
		class="absolute"
		do={() => {
			sfx.click?.play()
			items = [4, 3, 2, 1]
			actions.selectLines`1`
		}}
	/>

	<Transition
		class="absolute"
		do={() => {
			sfx.click?.play()
			items = [2, 1, 4, 3]
			actions.selectLines`2`
		}}
	/>

	<Transition
		class="absolute"
		do={() => {
			sfx.click?.play()
			items = [4, 3, 2, 1]
			actions.selectLines`3`
		}}
	/>

	<Transition
		class="absolute"
		do={() => {
			sfx.click?.play()
			items = [1, 2, 3, 4]
			actions.selectLines`4`
		}}
	/>

	<Action do={() => actions.selectLines`*`} />
</Slide>

<Slide></Slide>

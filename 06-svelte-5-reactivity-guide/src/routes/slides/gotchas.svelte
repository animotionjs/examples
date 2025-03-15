<script lang="ts">
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Counter from '$lib/components/counter.svelte'
	import Pipeline from '$lib/components/pipeline.svelte'
	import Svelte from '$lib/logo/svelte.svelte'

	let code: Shiki
	let output: Shiki
	let counter: Counter
	let pipeline: Pipeline
	let showPipeline = false
	let showCounter = true
	let showOutput = false
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex max-w-fit items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold">Svelte 3</p>
	</Transition>

	{#if showPipeline}
		<Pipeline bind:this={pipeline} class="transition-enter mt-16 w-[800px]" />
	{/if}

	<div class="mt-16 flex place-items-center gap-48">
		<Transition>
			<Shiki
				bind:this={code}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						// create reactive value
						let count = 0

						// create derived value
						$: double = count * 2

						function increment() {
							// assignment for reactive updates
							count += 1
						}
					<\/script>

					<button on:click={increment}>
						{double}
					</button>
        `}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		{#if showOutput}
			<div class="transition-enter">
				<Shiki
					bind:this={output}
					lang="ts"
					theme="poimandres"
					code={`
						$$self.$$.update = () => {
							if ($$self.$$.dirty & /*count*/ 4) {
								$$invalidate(0, (double = doubleCount(count)))
							}
						}
					`}
					options={{ duration: 0.6, stagger: 1 }}
				/>
			</div>
		{/if}

		<Action do={() => code.selectLines`2-3`} />
		<Action do={() => code.selectLines`5-6`} />
		<Action do={() => code.selectLines`9-10`} />
		<Action do={() => code.selectToken`double {double}`} />
		<Action do={() => code.selectLines`*`} />

		<Action
			do={async () => {
				await code.update`
					<script>
						let count = 0
						$: double = count * 2

						function increment() {
							count += 1
							console.log({ count, double })
						}
					<\/script>

					<button on:click={increment}>
						{double}
					</button>
        `
				await code.selectLines`7`
			}}
		/>

		{#if showCounter}
			<Transition>
				<Counter bind:this={counter} />
				<Action do={() => counter.log()} />
			</Transition>
		{/if}
	</div>

	<Transition action={() => (showPipeline = true)} />

	<Action do={() => pipeline.next()} />
	<Action do={() => pipeline.next()} />
	<Action do={() => pipeline.next()} />
	<Action do={() => pipeline.next()} />

	<Action
		do={async () => {
			pipeline.next()
			await code.update`
				<script>
					let count = 0
					$: double = count * 2

					function increment() {
						count += 1
						requestAnimationFrame(() => {
							console.log({ count, double })
						}
					}
				<\/script>

				<button on:click={increment}>
					{double}
				</button>
      `
			await code.selectLines`7,8,9`
			await code.selectLines`*`
		}}
	/>

	<Action do={() => counter.update()} />
	<Action do={() => counter.log()} />

	<Transition
		action={() => {
			showCounter = false
			showPipeline = false
			code.update`
					<script>
						let count = 0
						$: double = count * 2

						function increment() {
							count += 1
						}
					<\/script>

					<button on:click={increment}>
						{double}
					</button>
				`
		}}
	/>

	<Action do={() => code.selectLines`3`} />

	<Transition action={() => (showOutput = true)} />

	<Action
		do={() => {
			code.update`
				<script>
					let count = 0
					$: double = doubleCount()

					function doubleCount() {
						// count is invisible
						return count * 2
					}
				<\/script>

				<button on:click={increment}>
					{double}
				</button>
			`
			code.selectLines`3,5,6,7,8`
			output.update`$$invalidate(0, (double = doubleCount()))`
		}}
	/>

	<Action
		do={() => {
			code.update`
					<script>
						let count = 0
						$: double = doubleCount(count)

						function doubleCount(count) {
							return count * 2
						}
					<\/script>

					<button on:click={increment}>
						{double}
					</button>
				`
			code.selectToken`count`
			output.update`
				$$self.$$.update = () => {
					if ($$self.$$.dirty & /*count*/ 4) {
						$$invalidate(0, (double = doubleCount(count)))
					}
				}
			`
		}}
	/>

	<Transition
		action={() => {
			code.selectLines`*`
			code.update`
				<script>
					let count = 0
					$: double = count * 2
				<\/script>

				<button on:click={increment}>
					{double}
				</button>
			`
			showOutput = false
		}}
	/>

	<Action
		do={() => {
			code.update`
				<script>
					function createCounter() {
						// count is no longer reactive
						let count = 0
						// $: has no special meaning
						$: double = count * 2

						function increment() {
							count += 1
						}

						return { count, increment }
					}
				<\/script>
			`
		}}
	/>

	<Action do={() => code.selectLines`3-4`} />
	<Action do={() => code.selectLines`5-6`} />
	<Action do={() => code.selectLines`*`} />

	<Action
		do={() => {
			code.update`
				<script>
					import { writable } from 'svelte/store'

					export const counter = createCounter()

					function createCounter() {
						const { subscribe, update } = writable(0)

						function increment() {
							update((count) => count + 1)
						}

						return { subscribe, increment	}
					}
				<\/script>
			`
		}}
	/>

	<Action
		do={() => {
			code.update`
				<script>
					import { onDestroy } from 'svelte'
					import { counter } from './counter'
					
					let count = 0
					let unsubscribe = counter.subscribe(value => count = value)

					onDestroy(() => unsubscribe())
				<\/script>

				<button on:click={() => count.increment()}>
					{count}
				</button>
			`
		}}
	/>

	<Action do={() => code.selectLines`6`} />
	<Action do={() => code.selectLines`5-12`} />

	<Action
		do={() => {
			code.selectLines`*`
			code.update`
				<script>
					import { createCounter } from './counter'

					const count = createCounter()
				<\/script>

				<button on:click={() => count.increment()}>
					{$count}
				</button>
			`
		}}
	/>

	<Action do={() => code.selectLines`4-8`} />
	<Action do={() => code.selectLines`*`} />
</Slide>

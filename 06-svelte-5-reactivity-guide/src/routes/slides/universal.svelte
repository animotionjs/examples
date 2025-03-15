<script lang="ts">
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Svelte from '$lib/logo/svelte.svelte'

	let counter: Shiki
	let createCounter: Shiki
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-left text-6xl leading-relaxed drop-shadow-sm">
			<b>Universal reactivity</b> means that you can use the<br /> same logic inside and outside Svelte
			components
		</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Universal Reactivity</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-24">
		<Transition>
			<Shiki
				bind:this={counter}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let count = $state(0)
					<\/script>

					<button onclick={() => count += 1}>
						{count}
					</button>
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action
			do={() =>
				counter.update`
					<script>
						function createCounter() {
							let count = $state(0)

							return { count }
						}
					<\/script>
			`}
		/>

		<Action
			do={() => {
				counter.update`
					<script>
						function createCounter() {
							let count = $state(0)

							return { count }
						}

						let counter = createCounter()

						counter.count // 0
						counter.count += 1
						counter.count // 0
					<\/script>
				`
			}}
		/>

		<Action do={() => counter.selectLines`8`} />
		<Action do={() => counter.selectLines`10`} />
		<Action do={() => counter.selectLines`11`} />
		<Action do={() => counter.selectLines`12`} />
		<Action do={() => counter.selectLines`*`} />

		<Action
			do={() => {
				counter.update`
					<script>
						function createCounter() {
							let count = $state(0)

							return {
								get count() { return count },
								set count(value) { count = value }
							}
						}

						let counter = createCounter()

						counter.count // 0
						counter.count += 1
						counter.count // 1
					<\/script>
				`
				counter.selectLines`6,7`
			}}
		/>

		<Action do={() => counter.selectLines`6`} />
		<Action do={() => counter.selectLines`7`} />
		<Action do={() => counter.selectLines`11`} />
		<Action do={() => counter.selectLines`13`} />
		<Action do={() => counter.selectLines`14`} />
		<Action do={() => counter.selectLines`15`} />
		<Action do={() => counter.selectLines`2,3,4,5,6,7,8,9`} />

		<Transition transition="transition-rotate">
			<span class="text-9xl drop-shadow-sm">👉️</span>
		</Transition>

		<Transition>
			<Shiki
				bind:this={createCounter}
				lang="ts"
				theme="poimandres"
				code={`
					export function createCounter() {
						let count = $state(0)

						return {
							get count() { return count },
							set count(value) { count = value }
						}
					}
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action
			do={() => {
				counter.selectLines`*`
				counter.update`
					<script>
						import { createCounter } from './counter.svelte.js'

						let counter = createCounter()
					<\/script>

					<button onclick={() => counter.count += 1}>
						{counter.count}
					</button>
			`
			}}
		/>

		<Action do={() => counter.selectToken`./counter.svelte.js`} />
		<Action do={() => counter.selectLines`*`} />
	</div>
</Slide>

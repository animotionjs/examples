<script lang="ts">
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Proxied from '$lib/components/proxied.svelte'
	import Svelte from '$lib/logo/svelte.svelte'

	let code: Shiki
	let text: HTMLParagraphElement
	let assignments: Shiki
	let preferences: Shiki
	let proxied: Shiki
	let proxiedURL: Proxied
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-left text-6xl leading-relaxed drop-shadow-sm">
			Inside <b>$state</b> Svelte wraps objects, and arrays with<br /> <b>Proxies</b> which
			intercept reads and writes of objects,<br /> and array properties and turns them into signals
		</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Nested Reactivity</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-24">
		<Transition>
			<Shiki
				bind:this={code}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						function createCounter() {
							let count = $state(0)

							return {
								get count() { return count },
								set count(value) { count = value }
							}
						}

						let counter = createCounter()
					<\/script>

					<button onclick={() => counter.count += 1}>
						{counter.count}
					</button>
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action do={() => code.selectLines`3`} />
		<Action do={() => code.selectLines`6,7`} />
		<Action do={() => code.selectToken`14 counter . count += 1`} />
		<Action do={() => code.selectToken`15 {counter . count}`} />
		<Action do={() => code.selectLines`3`} />

		<Action
			do={() => {
				code.update`
					<script>
						function createCounter() {
							let counter = $state({ count: 0 })
							return counter
						}

						let counter = createCounter()
					<\/script>

					<button onclick={() => counter.count += 1}>
						{counter.count}
					</button>
				`
				code.selectLines`3`
			}}
		/>

		<Action do={() => code.selectLines`*`} />

		<Action
			do={() => {
				code.update`
					<script>
						let todos = $state([])

						function addTodo(event) {
							if (event.key !== 'Enter') return

							let done = $state(false)
							let text = $state(event.target.value)

							todos.push({ done, text })
						}
					<\/script>
				`
			}}
		/>

		<Action do={() => code.selectLines`2`} />
		<Action do={() => code.selectLines`7`} />
		<Action do={() => code.selectLines`8`} />
		<Action do={() => code.selectLines`10`} />

		<Action
			do={() => {
				code.update`
					<script>
						let todos = $state([])

						function addTodo(event) {
							if (event.key !== 'Enter') return

							let done = $state(false)
							let text = $state(event.target.value)

							todos.push({
								get done() { return this.done },
								set done(value) { this.done = value },
								get text() { return this.text },
								set text(value) { this.text = value }
							})
						}
					<\/script>
				`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						// Proxy
						let todos = $state([])

						function addTodo(event) {
							if (event.key !== 'Enter') return

							// properties are turned into signals
							todos.push({
								done: false,
								text: event.target.value
							})
						}
					<\/script>
				`
				code.selectLines`2,3,8,9,10,11,12`
			}}
		/>

		<Action do={() => code.selectLines`*`} />

		<Action
			do={() => {
				code.update`
					<script>
						let todos = $state([])

						function addTodo(event) {
							if (event.key !== 'Enter') return

							todos.push({
								done: false,
								text: event.target.value
							})
						}
					<\/script>

					<input on:keydown={addTodo} />

					{#each todos as todo}
						<input bind:value={todo.text} />
						<input bind:checked={todo.done} type="checkbox" />
					{/each}
				`
			}}
		/>

		<Action do={() => code.selectLines`17`} />
		<Action do={() => code.selectLines`18`} />
		<Action do={() => code.selectLines`*`} />

		<Action
			do={() => {
				code.update`
					<script>
						class Todo {
							done = $state(false)
							text = $state()
						}
					<\/script>
				`
			}}
		/>

		<Action do={() => code.selectLines`3`} />
		<Action do={() => code.selectLines`3,4`} />

		<Action
			do={() => {
				code.update`
					<script>
						class Todo {
							done = $state(false)
							text = $state()

							// added by Svelte
							get done() { ... }
							set done(value) { ... }
							get text() { ... }
							set text(value) { ... }
						}
					<\/script>
				`
				code.selectLines`6,7,8,9,10`
			}}
		/>

		<Action
			do={() => {
				code.selectLines`*`
				code.update`
					<script>
						class Todo {
							done = $state(false)
							text = $state()

							constructor(text) {
								this.text = text
							}
						}

						const todo = new Todo({
							done: false,
							text: event.target.value
						})
					<\/script>
				`
			}}
		/>
	</div>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p bind:this={text} class="text-6xl leading-relaxed drop-shadow-sm">
			Thanks to deeply nested reactivity you don't need<br /> reactive assignments for objects, and arrays
		</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-24">
		<Transition action={() => text.classList.replace('text-6xl', 'text-4xl')}>
			<Shiki
				bind:this={assignments}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let numbers = $state([1, 2, 3, 4])
						let total = $derived(numbers.reduce((t, n) => t + n))

						function add() {
							numbers = [...numbers, numbers.length + 1]
						}
					<\/script>

					<button onclick={add}>
						{total}
					</button>
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action do={() => assignments.selectLines`2`} />
		<Action do={() => assignments.selectLines`3`} />
		<Action do={() => assignments.selectLines`6`} />

		<Action
			do={() => {
				assignments.update`
					<script>
						let numbers = $state([1, 2, 3, 4])
						let total = $derived(numbers.reduce((t, n) => t + n))

						function add() {
							numbers.push(numbers.length + 1)
						}
					<\/script>

					<button onclick={add}>
						{total}
					</button>
				`
				assignments.selectLines`6`
			}}
		/>

		<Action do={() => assignments.selectLines`*`} />
	</div>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Shared State</p>
	</Transition>

	<Transition class="mt-16">
		<Shiki
			bind:this={preferences}
			lang="ts"
			theme="poimandres"
			code={`
				export let preferences = $state({	theme: 'dark' })
			`}
			options={{ duration: 0.6, stagger: 1 }}
		/>
	</Transition>

	<Action
		do={() => {
			preferences.update`
				import { preferences } from './preferences.svelte.js'
				
				{preferences.theme === 'light' ? '☀️' : '🌙'}
			`
		}}
	/>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-left text-6xl leading-relaxed drop-shadow-sm">
			Svelte also provides proxied <b>Map</b>, <b>Set</b>, <b>Date</b>, and <b>URL</b> classes<br />
			which have the same API as their non-reactive counterparts
		</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Reactive Imports</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-24">
		<Transition>
			<Shiki
				bind:this={proxied}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						import { URL } from 'svelte/reactivity'

						const url = new URL('https://joyofcode.xyz/')
					<\/script>

					<input bind:value={url.href} />
					<input bind:value={url.protocol} />
					<input bind:value={url.hostname} />
					<input bind:value={url.pathname} />
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action do={() => proxied.selectLines`2`} />
		<Action do={() => proxied.selectLines`4`} />
		<Action do={() => proxied.selectLines`7,8,9,10`} />

		<Transition action={() => proxied.selectLines`*`}>
			<Proxied bind:this={proxiedURL} />
			<Action do={() => proxiedURL.hostname()} />
			<Action do={() => proxiedURL.pathname()} />
		</Transition>
	</div>
</Slide>

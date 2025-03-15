<script lang="ts">
	import { Code, Media, Presentation, Slide, Step } from '@components'
	import Layout from './layout.svelte'
</script>

<Presentation>
	<!-- Intro -->
	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="flex gap-[40px] items-center">
					<Media width="140" src="svelte.png" type="img" />
					<p class="font-bold text-[96px]">$velte Runes</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<Media
				class="w-full h-full rounded-lg"
				src="https://svelte.dev/blog/runes"
				type="iframe"
			/>
		</Layout>
	</Slide>

	<!-- Reactivity -->
	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div>
					<Media class="mt-8 mx-auto rounded-2xl" src="suns.webp" type="img" />
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div>
					<p class="font-bold text-[96px] capitalize">Two reactive systems</p>
					<Media
						class="mt-[48px] mx-auto rounded-2xl"
						src="suns.webp"
						type="img"
					/>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animateestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div>
					<p class="font-bold text-[96px] capitalize">Reactive assignments</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[1100px] text-[64px]">
					<Code lang="svelte" lines="|2|5|10|">
						{`
								<script>
									let count = 0

									function increment() {
										count += 1
									}
								<\/script>

								<button on:click={increment}>
									{count}
								</button>
							`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[1100px] text-[64px]">
					<Code lang="svelte" lines="3-4,12|">
						{`
								<script>
									let count = 0
									// reactive statements for derived values
									$: double = count * 2

									function increment() {
										count += 1
									}
								<\/script>

								<button on:click={increment}>
									{double}
								</button>
							`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="js" lines="|1-2|4-5|7-10|">
						{`
							// reactive declaration
							$: double = count * 2
				
							// reactive statement
							$: console.log(double)
				
							// reactive statement
							$: if (double > 9000) {
								alert(\`It's over 9000!\`)
							}
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<p class="text-[64px] w-[1200px] mx-auto text-left leading-[120%]">
					Svelte's reactivity system only works at the <span class="font-bold">
						top level
					</span> of components.
				</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="|2-7">
						{`
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
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="h-[500px] text-[64px]">
					<Code lang="svelte" lines="|2-6">
						{`
							<script>
								function createCounter() {
									// no longer reactive
									let count = 0
									// has no effect
									$: doubled = count * 2
								}
							<\/script>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<p
					class="text-[64px] w-[900px] leading-[120%] mx-auto text-left leading-[120%]"
				>
					If you want reactivity outside Svelte components you have to use a
					custom <span class="font-bold">Svelte store</span>.
				</p>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<p class="font-bold text-[96px] capitalize">Stores</p>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="ts" lines="1|2|4,13|5|8-11|">
						{`
							// count.js
							import { writable } from 'svelte/store'

							function createCounter(initial) {
								const { subscribe, set, update } = writable(initial)

								return {
									subscribe,
									increment: () => update(count => count + 1),
									double: () => update(count => count * 2),
									reset: () => set(0)
								}
							}
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="ts" lines="4">
						{`
							// count.js
							import { writable } from 'svelte/store'

							export function createCounter(initial) {
								const { subscribe, set, update } = writable(initial)

								return {
									subscribe,
									increment: () => update(count => count + 1),
									double: () => update(count => count * 2),
									reset: () => set(0)
								}
							}
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="2|4|7-9|11-13|">
						{`
							<script>
								import { createCounter } from './count.js'

								const count = createCounter(0)
							<\/script>

							<button on:click={count.increment}>
								{$count}
							</button>

							<button on:click={count.reset}>
								Reset
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Runes -->
	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<p class="font-bold text-[96px] capitalize">
					Universal reactive system
				</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<p class="font-bold text-[96px] capitalize">
					Universal reactive system
				</p>
				<Media
					class="mt-[48px] h-[600px] mx-auto rounded-lg"
					src="lighthouse.avif"
					type="img"
				/>
			</div></Layout
		>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<Media
					class="mt-[48px] h-[600px] mx-auto radius-lg"
					src="lighthouse.avif"
					type="img"
				/>
				<p class="mt-[48px] font-bold text-[96px] capitalize">Signals</p>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[900px] text-[64px]">
					<Code lang="svelte" lines="|2">
						{`
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
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[900px] text-[64px]">
					<Code lang="svelte" lines="2|3">
						{`
							<script>
								let count = $state(0)
								$: double = count * 2

								function increment() {
									count += 1
								}
							<\/script>

							<button on:click={increment}>
								{double}
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[900px] text-[64px]">
					<Code lang="svelte" lines="3|">
						{`
							<script>
								let count = $state(0)
								let double = $derived(count * 2)

								function increment() {
									count += 1
								}
							<\/script>

							<button on:click={increment}>
								{double}
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[900px] text-[64px]">
					<Code lang="js" lines="|1,14|2|3|5-7|9-13|">
						{`
							function createCounter() {
								let count = $state(0)
								let double = $derived(count * 2)
	
								function increment() {
									count += 1
								}

								return {
									count,
									double,
									increment
								}
							}
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[900px] text-[64px]">
					<Code class="max-h-[800px]" lang="svelte" lines="|2-15|17|20,22|21">
						{`
							<script>
								function createCounter() {
									let count = $state(0)
									let double = $derived(count * 2)
		
									function increment() {
										count += 1
									}

									return {
										count,
										double,
										increment
									}
								}

								const counter = createCounter()
							<\/script>

							<button on:click={counter.increment}>
								{counter.count} <!-- ?? 💩 -->
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[800px] text-[64px]">
					<Code lang="js" lines="|2-3">
						{`
							function createCounter() {
								// closure
								let count = 0

								return {
									count,
									increment: () => count += 1
								}
							}
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[800px] text-[64px]">
					<Code lang="js" lines="11">
						{`
							function createCounter() {
								// closure
								let count = 0

								return {
									count,
									increment: () => count += 1
								}
							}

							const counter = createCounter()
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[800px] text-[64px]">
					<Code lang="js" lines="13-14">
						{`
							function createCounter() {
								// closure
								let count = 0

								return {
									count,
									increment: () => count += 1
								}
							}

							const counter = createCounter()

							counter.increment() // 1
							console.log(counter.count) // 0
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[800px] text-[64px]">
					<Code lang="js" lines="16-17|6">
						{`
							function createCounter() {
								// closure
								let count = 0

								return {
									count,
									increment: () => count += 1
								}
							}

							const counter = createCounter()

							counter.increment() // 1
							console.log(counter.count) // 0

							counter.increment() // 2
							console.log(counter.count) // 0
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="w-[800px] text-[64px]">
					<Code class="h-[900px]" lang="js" lines="6-8|15-16|18-19">
						{`
							function createCounter() {
								// closure
								let count = 0

								return {
									get count() {
										return count
									},
									increment: () => count += 1
								}
							}

							const counter = createCounter()

							counter.increment() // 1
							console.log(counter.count) // 1

							counter.increment() // 2
							console.log(counter.count) // 2
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code class="w-[900px] h-[900px]" lang="svelte" lines="|11-13">
						{`
							<script>
								function createCounter() {
									let count = $state(0)
									let double = $derived(count * 2)
		
									function increment() {
										count += 1
									}

									return {
										count,
										double,
										increment
									}
								}
							<\/script>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code
						class="w-[1020px] h-[900px]"
						lang="svelte"
						lines="11-14|18|21-23|25-27"
					>
						{`
							<script>
								function createCounter() {
									let count = $state(0)
									let double = $derived(count * 2)
		
									function increment() {
										count += 1
									}

									return {
										get count() { return count },
										set count(value) { count = value },
										get double() { return double },
										increment
									}
								}

								const counter = createCounter()
							<\/script>

							<button on:click={counter.increment}>
								{counter.count} <!-- 👍️ -->
							</button>

							<button on:click={() => counter.count = 0}>
								Reset <!-- 👍️ -->
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="|3|5-8|3">
						{`
							<script>
								let count = 0
								$: double = doubleCount()

								function doubleCount() {
									// Svelte has no idea about this
									return count * 2
								}
							<\/script>

							<button on:click={() => count += 1}>
								{double}
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="3">
						{`
							<script>
								let count = 0
								$: double = (doubleCount(), count)

								function doubleCount() {
									// Svelte has no idea about this
									return count * 2
								}
							<\/script>

							<button on:click={() => count += 1}>
								{double}
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="3|5-8|">
						{`
							<script>
								let count = $state(0)
								let double = $derived(doubleCount())

								function doubleCount() {
									// Svelte is able to track the dependency
									return count * 2
								}
							<\/script>

							<button on:click={() => count += 1}>
								{double}
							</button>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- Effects -->
	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<p data-id="title" class="font-bold text-[96px] capitalize">Effects</p>
				<ul
					class="w-[1000px] mt-[48px] list-disc text-left space-y-8 leading-[140%]"
				>
					<Step>
						<li><b>$effect</b> rune</li>
					</Step>
					<Step>
						<li>
							Only runs in the browser after the DOM has been updated like
							<b>onMount()</b>
						</li>
					</Step>
					<Step>
						<li>Replace lifecycle functions</li>
					</Step>
					<Step>
						<li>No dependency tracking</li>
					</Step>
				</ul>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="|2-3|4,12|5-6|8-11|">
						{`
							<script>
								// when you want something to happen
								// to something changing like \`$:\`
								$effect(() => {
									// runs after DOM update
									console.log(count)

									return () => {
										// cleanup when component unmounts
										console.log('bye')
									}
								})
							<\/script>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte" lines="2|4-11|5|6|7|9|">
						{`
							<script>
								let count = $state(0)
								
								$effect(() => {
									if (count < 69) {
										count += 1
										console.log(count) // 0...69
									} else {
										console.log('nice') // nice
									}
								})
							<\/script>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<div class="text-[64px]">
					<Code lang="svelte">
						{`
							<script>
								// you can nest effects
								$effect(() => {
									// ...

									$effect(() => {
										// ...
									})
								})
							<\/script>
						`}
					</Code>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="h-full grid place-content-center">
				<p class="font-bold text-[96px] capitalize">That's it 🙌</p>
			</div>
		</Layout>
	</Slide>
</Presentation>

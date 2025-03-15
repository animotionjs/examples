<script lang="ts">
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Counter from '$lib/components/counter.svelte'
	import Interval from '$lib/components/interval.svelte'
	import Svelte from '$lib/logo/svelte.svelte'

	let reactivity: Shiki
	let effect: Shiki
	let counter: Counter
	let counter2: Counter
	let interval: Interval
	let showCounter = false
	let showInterval = false
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-9xl font-black drop-shadow-sm">⚡️runes</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-left text-6xl leading-relaxed drop-shadow-sm">
			Universal <b>fine-grained</b> reactive system<br /> reducing complexity and making Svelte<br
			/> smaller, faster, and more consistent.
		</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<div class="text-left text-6xl">
			<p class="drop-shadow-sm"><b>rune</b> /ro͞on/ noun</p>
			<p class="mt-16 leading-relaxed opacity-90 drop-shadow-sm">
				A letter or mark used as a<br />mystical or magic symbol.
			</p>
		</div>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">State</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-48">
		<Transition>
			<Shiki
				bind:this={reactivity}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let count = 0
					<\/script>
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action
			do={() =>
				reactivity.update`
					<script>
						let count = 0

						function increment() {
							count += 1
						}
					<\/script>

					<button onclick={increment}>
						{count}
					</button>
				`}
		/>

		<Action do={() => reactivity.selectLines`4,5,6`} />
		<Action do={() => reactivity.selectLines`10`} />
		<Action do={() => reactivity.selectLines`2`} />

		<Action
			do={() => {
				reactivity.update`
					<script>
						// reactive value
						let count = $state(0)

						function increment() {
							count += 1
						}
					<\/script>

					<button onclick={increment}>
						{count}
					</button>
				`
				reactivity.selectLines`2,3`
			}}
		/>

		<Action
			do={() => {
				reactivity.update`
					<script>
						// reactive value
						let count = $state(0)

						// derived value
						let double = $derived(count * 2)

						function increment() {
							count += 1
						}
					<\/script>

					<button onclick={increment}>
						{double}
					</button>
				`
				reactivity.selectLines`5,6,14`
			}}
		/>

		<Action
			do={() => {
				reactivity.selectLines`4,5`
				reactivity.update`
					<script>
						let count = $state(0)
						let double = $derived(count * 2)

						function increment() {
							count += 1
							// predictable output
							console.log({ count, double })
						}
					<\/script>

					<button onclick={increment}>
						{double}
					</button>
				`
				reactivity.selectLines`7,8`
			}}
		/>

		<Transition action={() => (showCounter = true)} class="absolute" />

		{#if showCounter}
			<div class="transition-enter">
				<Counter bind:this={counter} />
			</div>
		{/if}

		<Action
			do={() => {
				counter.update()
				counter.log()
				reactivity.selectLines`*`
			}}
		/>
	</div>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Side Effects</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-48">
		<Transition>
			<Shiki
				bind:this={effect}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let count = $state(0)
					<\/script>

					<button onclick={() => count++}>
						{count}
					</button>
				`}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action
			do={() => {
				effect.update`
						<script>
							let count = $state(0)

							$effect(() => {
								console.log(count)
							})
						<\/script>

						<button onclick={() => count++}>
							{count}
						</button>		
				`
				effect.selectLines`4,5,6`
			}}
		/>

		<Action do={() => effect.selectToken`5 count`} />
		<Action do={() => effect.selectLines`*`} />

		<Action
			do={() => {
				effect.selectLines`*`
				effect.update`
					<script>
						let count = $state(0)
						let millis = $state(1000)

						$effect(() => {
							// reruns whenever dependency changes
							const interval = setInterval(() => count++, millis)

							// before each rerun and when component unmounts
							return () => clearInterval(interval)
						})
					<\/script>

					<h1>{count}</h1>

					<button onclick={() => (millis *= 2)}>slower</button>
					<button onclick={() => (millis /= 2)}>faster</button>	
				`
			}}
		/>

		<Action do={() => effect.selectLines`2`} />
		<Action do={() => effect.selectLines`3`} />
		<Action do={() => effect.selectLines`6,7`} />
		<Action do={() => effect.selectToken`millis`} />
		<Action do={() => effect.selectLines`9,10`} />
		<Action do={() => effect.selectLines`*`} />

		<Transition action={() => (showInterval = true)} class="absolute" />

		{#if showInterval}
			<div class="transition-enter">
				<Interval bind:this={interval} />
			</div>
		{/if}

		<Action do={() => interval.slower()} />
		<Action do={() => interval.faster()} />

		<Transition action={() => (showInterval = false)} class="absolute" />

		<Action
			do={() => {
				effect.update`
					<script>
						let count = $state(0)
						let double = $state(0)

						$effect(() => {
							// don't do this
							double = count * 2
						})

						function increment() {
							count += 1
							// double is out of sync
							console.log({ count, double })
						}
					<\/script>

					<button onclick={increment}>
						{double}
					</button>		
				`
			}}
		/>

		<Action do={() => effect.selectLines`2`} />
		<Action do={() => effect.selectLines`3`} />
		<Action do={() => effect.selectLines`5,6,7,8`} />
		<Action do={() => effect.selectLines`11`} />

		<Transition action={() => effect.selectLines`12,13`}>
			<Counter bind:this={counter2} />
			<Action do={() => counter2.log()} />
		</Transition>

		<Action
			do={() => {
				effect.selectLines`*`
				effect.update`
					<script>
						let count = $state(0)
						let double = $derived(count * 2)

						function increment() {
							count += 1
							console.log({ count, double })
						}
					<\/script>

					<button onclick={increment}>
						{double}
					</button>	
				`
				effect.selectLines`3`
				counter2.update()
			}}
		/>

		<Action do={() => effect.selectLines`7`} />
		<Action do={() => counter2.log()} />
		<Action do={() => effect.selectLines`*`} />
	</div>
</Slide>

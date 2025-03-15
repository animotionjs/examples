<script lang="ts">
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Svelte from '$lib/logo/svelte.svelte'

	let code: Shiki
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Inspecting State</p>
	</Transition>

	<div class="mt-16 flex items-center gap-24">
		<Transition>
			<Shiki
				bind:this={code}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let count = $state(0)

						$effect(() => {
							console.log(count)
						})
					<\/script>

					<button onclick={() => count++}>
						{count}
					</button>
        `}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action do={() => code.selectLines`4,5,6`} />

		<Action
			do={() => {
				code.update`
					<script>
						let count = $state(0)

						$inspect(count)
					<\/script>

					<button onclick={() => count++}>
						{count}
					</button>
					`
				code.selectLines`4`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						let count = $state(0)

						$inspect(count).with((type, count) => {
							if (type === 'update') {
								debugger
							}
						})
					<\/script>

					<button onclick={() => count++}>
						{count}
					</button>
					`
				code.selectLines`4,5,6,7,8`
			}}
		/>

		<Action do={() => code.selectToken`4 count`} />
		<Action do={() => code.selectLines`5,6,7`} />
		<Action do={() => code.selectLines`6`} />

		<Action
			do={() => {
				code.update`
					<script>
						let count = $state(0)

						$inspect(count).with(console.trace)
					<\/script>

					<button onclick={() => count++}>
						{count}
					</button>
					`
				code.selectLines`4`
			}}
		/>

		<Action do={() => code.selectLines`*`} />
	</div>
</Slide>

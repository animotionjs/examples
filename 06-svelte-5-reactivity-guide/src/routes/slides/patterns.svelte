<script lang="ts">
	import { browser } from '$app/environment'
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Svelte from '$lib/logo/svelte.svelte'

	let solid: Shiki
	let vue: Shiki
	let video: HTMLVideoElement

	function createSound(soundName: string, { volume = 1, loop = false } = {}) {
		if (!browser) return
		const audio = new Audio(`assets/${soundName}.mp3`)
		audio.volume = volume
		audio.loop = loop
		return audio
	}

	let quote = createSound('react', { volume: 0.8 })
	let crackling = createSound('burning', { volume: 0.04, loop: true })
</script>

<Slide class="h-full place-content-center place-items-center">
	<Action
		do={() => {
			video.play()
			crackling?.play()
		}}
	/>
</Slide>

<Slide
	out={() => {
		video.pause()
		crackling?.pause()
	}}
	class="h-full place-content-center place-items-center"
>
	<div>
		<!-- svelte-ignore @a11y_media_has_caption -->
		<video bind:this={video} class="absolute inset-0 z-0 w-full" src="assets/flames.mp4" loop
		></video>
		<div class="absolute inset-0 z-10 bg-black/40"></div>
	</div>

	<Transition class="z-20">
		<img class="zoom w-[600px] shadow-2xl" src="assets/react.png" alt="quote" />
	</Transition>

	<Action do={() => quote?.play()} />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Reactivity Patterns</p>
	</Transition>

	<Transition class="mt-16">
		<p class="text-left text-6xl leading-relaxed drop-shadow-sm">
			You can use deeply nested reactivity, or a class to avoid<br /> boilerplate, but runes are
			just
			<b>reactive primitives</b> which<br /> can be used to make a reactivity system
		</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<div class="flex items-center gap-64">
		<Transition>
			<img class="h-[100px] w-[100px] shadow-2xl" src="assets/solid.png" alt="solid" />

			<div class="mt-16">
				<Shiki
					bind:this={solid}
					lang="svelte"
					theme="poimandres"
					code={`
						<script>
							function useSignal(initial) {
								let value = $state(initial)

								function read() {
									return value
								}

								function write(set) {
									value = set(value)
								}

								return [read, write]
							}

							let [count, setCount] = useSignal(0)
						<\/script>

						<button onclick={() => setCount(count => count + 1)}>
							{counter()}
						</button>
          `}
					options={{ duration: 0.6, stagger: 1 }}
				/>
			</div>
		</Transition>

		<Action do={() => solid.selectLines`3`} />
		<Action do={() => solid.selectLines`5,6,7`} />
		<Action do={() => solid.selectLines`9,10,11`} />
		<Action do={() => solid.selectLines`13`} />
		<Action do={() => solid.selectLines`16`} />
		<Action do={() => solid.selectLines`*`} />

		<Transition>
			<img class="h-[100px] w-[100px] shadow-2xl" src="assets/vue.png" alt="vue" />

			<div class="mt-16">
				<Shiki
					bind:this={vue}
					lang="svelte"
					theme="poimandres"
					code={`
						<script>
							function ref(initial) {
								let value = $state(initial)

								return {
									get value() {
										return count
									},
									set value(newValue) {
										value = newValue
									}
								}
							}

							let count = ref(0)
						<\/script>

						<button onclick={() => count.value++}>
							{count.value}
						</button>
					`}
					options={{ duration: 0.6, stagger: 1 }}
				/>
			</div>
		</Transition>

		<Action do={() => vue.selectLines`3`} />
		<Action do={() => vue.selectLines`6,7,8`} />
		<Action do={() => vue.selectLines`9,10,11`} />
		<Action do={() => vue.selectLines`15`} />
		<Action do={() => vue.selectLines`*`} />
	</div>
</Slide>

<style>
	.zoom {
		animation: zoom 10s var(--ease) forwards;
	}

	@keyframes zoom {
		to {
			scale: 1.4;
		}
	}
</style>

<script lang="ts">
	import { Slide } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Svelte from '$lib/logo/svelte.svelte'

	let runed: HTMLImageElement
</script>

<!-- <Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Svecosystem</p>
	</Transition>
</Slide> -->

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Svecosystem</p>
	</Transition>

	<Transition class="mt-16">
		<img
			class="rounded-2xl border-t border-gray-800 shadow-2xl"
			src="assets/svecosystem.png"
			alt="svecosystem"
		/>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img
		bind:this={runed}
		class=" rounded-2xl border-t border-gray-800 shadow-2xl"
		src="assets/runed.png"
		alt="svecosystem"
		style="translate: 0px 4000px; transition: translate 1s;"
	/>

	<Action do={() => (runed.style.translate = '0px 1100px')} />
	<Action do={() => (runed.style.translate = '0px 800px')} />
	<Action do={() => (runed.style.translate = '0px -100px')} />
	<Action do={() => (runed.style.translate = '0px 1100px')} />
</Slide>

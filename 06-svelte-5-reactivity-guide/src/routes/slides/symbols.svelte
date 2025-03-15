<script lang="ts">
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'

	let component: Shiki
	let output: Shiki
	let text: HTMLParagraphElement
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p bind:this={text} class="text-left text-6xl leading-relaxed drop-shadow-sm">
			Runes are just <b>function-like symbols</b> that<br /> provide instructions to the Svelte compiler
		</p>
	</Transition>

	<div class="mt-16 flex place-items-center gap-24">
		<Transition action={() => text.classList.replace('text-6xl', 'text-4xl')}>
			<Shiki
				bind:this={component}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let count = $state(0)
						let double = $derived(count * 2)

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

		<Action do={() => component.selectToken`$ state $ derived $ effect`} />
		<Action do={() => component.selectLines`*`} />

		<Transition transition="transition-rotate">
			<span class="text-9xl drop-shadow-sm">👉️</span>
		</Transition>

		<Transition>
			<div class="mt-16">
				<Shiki
					bind:this={output}
					lang="ts"
					theme="poimandres"
					code={`
					import * as $ from 'svelte/internal/client'

					function App() {
						let count = $.source(0)
						let double = $.derived(() => $.get(count) * 2)
						
						$.user_effect(() => {
							console.log($.get(count))
						})
						
						$.template_effect(() => $.set_text(text, $.get(count)))
					}
				`}
					options={{ duration: 0.6, stagger: 1 }}
				/>
			</div>
			<p class="mt-8 text-2xl opacity-60">*ignoring DOM code</p>
		</Transition>

		<Action
			do={() => {
				component.selectLines`2`
				output.selectLines`4`
			}}
		/>
		<Action
			do={() => {
				component.selectLines`3`
				output.selectLines`5`
			}}
		/>
		<Action
			do={() => {
				component.selectLines`5,6,7`
				output.selectLines`7,8,9`
			}}
		/>
		<Action
			do={() => {
				component.selectLines`10,11,12`
				output.selectLines`11`
			}}
		/>
		<Action
			do={() => {
				component.selectLines`*`
				output.selectLines`*`
			}}
		/>
	</div>
</Slide>

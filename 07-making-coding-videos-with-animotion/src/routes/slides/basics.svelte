<script lang="ts">
	import { Slide, Code, Transition, Action } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let text: HTMLParagraphElement
	let slide: Code
	let transition: Code
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">⛹️ Basics</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.click?.play()}>
		<Code
			bind:this={slide}
			lang="svelte"
			theme="poimandres"
			code={`
				<script>
					import { Presentation, Slide } from '@animotion/core'
				<\/script>
			`}
			options={{ duration: 600, stagger: 0.1, containerStyle: false }}
		/>
	</Transition>

	<Action do={() => slide.selectToken`Presentation`} />
	<Action do={() => slide.selectToken`Slide`} />
	<Action do={() => slide.selectLines`*`} />

	<Action
		do={() => {
			slide.update`
				<script>
					import { Presentation, Slide } from '@animotion/core'
				<\/script>

				<Presentation>
					<Slide>
						<p>🪄 Animotion</p>
					</Slide>
				</Presentation>
			`
			slide.selectLines`5,9`
		}}
	/>

	<Action do={() => slide.selectLines`6,8`} />
	<Action do={() => slide.selectLines`7`} />
	<Action do={() => slide.selectLines`*`} />

	<Action
		do={() => {
			slide.update`
				<script>
					import { Presentation, Slide } from '@animotion/core'
				<\/script>

				<Presentation options={{ transition: 'slide', controls: true, progress: true }}>
					<Slide>
						<p>🪄 Animotion</p>
					</Slide>
				</Presentation>
			`
			slide.selectLines`5`
		}}
	/>

	<Action
		do={() => {
			slide.update`
				<script>
					import { Presentation, Slide } from '@animotion/core'
				<\/script>

				<Presentation>
					<Slide
						in={() => console.log('in')}
						out={() => console.log('out')}
					>
						<p>🪄 Animotion</p>
					</Slide>
				</Presentation>
			`
			slide.selectLines`6-9`
		}}
	/>

	<Action
		do={() => {
			slide.update`
				<script>
					import { Presentation, Slide } from '@animotion/core'
				<\/script>

				<Presentation>
					<Slide class="h-full place-content-center place-items-center">
						<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
					</Slide>
				</Presentation>
			`
			slide.selectLines`6`
		}}
	/>

	<Action do={() => slide.selectLines`7`} />
	<Action do={() => slide.selectLines`*`} />

	<Action
		do={() => slide.update`
			<script>
				import { Presentation, Slide } from '@animotion/core'
			<\/script>

			<Presentation>
				<Slide class="h-full place-content-center place-items-center">
					<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
				</Slide>

				<Slide class="h-full place-content-center place-items-center">
					<img class="rounded-lg" src="./nod-of-approval.gif" />
				</Slide>
			</Presentation>
		`}
	/>
</Slide>

<Slide
	in={() => sfx.cut?.play()}
	class="h-full place-content-center place-items-center"
	transition="slide"
>
	<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
</Slide>

<Slide class="h-full place-content-center place-items-center" transition="slide">
	<img class="rounded-lg" src="./nod-of-approval.gif" alt="nod" />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.click?.play()}>
		<Code
			bind:this={transition}
			lang="svelte"
			theme="poimandres"
			code={`
				<script>
					import { Presentation, Slide } from '@animotion/core'
				<\/script>

				<Presentation>
					<Slide class="h-full place-content-center place-items-center">
						<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
					</Slide>

					<Slide class="h-full place-content-center place-items-center">
						<img class="rounded-lg" src="./nod-of-approval.gif" />
					</Slide>
				</Presentation>
			`}
			options={{ duration: 600, stagger: 0.1, containerStyle: false }}
		/>
	</Transition>

	<Action
		do={() => {
			transition.update`
				<script>
					import { Presentation, Slide, Transition } from '@animotion/core'
				<\/script>

				<Presentation>
					<Slide class="h-full place-content-center place-items-center">
						<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
					</Slide>

					<Slide class="h-full place-content-center place-items-center">
						<img class="rounded-lg" src="./nod-of-approval.gif" />
					</Slide>
				</Presentation>
			`
			transition.selectToken`Transition`
		}}
	/>

	<Action do={() => transition.selectLines`6-12`} />

	<Action
		do={() => {
			transition.update`
				<script>
					import { Presentation, Slide, Transition } from '@animotion/core'
				<\/script>

				<Presentation>
					<Slide class="h-full place-content-center place-items-center">
						<Transition>
							<p class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
						</Transition>

						<Transition>
							<img class="rounded-lg mt-16" src="./nod-of-approval.gif" />
						</Transition>
					</Slide>
				</Presentation>
			`
			transition.selectLines`6-14`
		}}
	/>

	<Action do={() => transition.selectLines`*`} />

	<Action
		do={() =>
			transition.update`
				<script>
					import { Presentation, Slide, Transition } from '@animotion/core'

					let text
				<\/script>

				<Presentation>
					<Slide class="h-full place-content-center place-items-center">
						<Transition>
							<p bind:this={text} class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
						</Transition>

						<Transition do={() => text.classList.replace('text-8xl', 'text-6xl')}>
							<img class="rounded-lg mt-16" src="./nod-of-approval.gif" />
						</Transition>
					</Slide>
				</Presentation>
			`}
	/>

	<Action do={() => transition.selectLines`4`} />
	<Action do={() => transition.selectLines`4,10`} />
	<Action do={() => transition.selectLines`4,10,13`} />
	<Action do={() => transition.selectLines`*`} />
</Slide>

<Slide in={() => sfx.cut?.play()} class="h-full place-content-center place-items-center">
	<Transition>
		<p bind:this={text} class="text-8xl font-bold drop-shadow-sm">🪄 Animotion</p>
	</Transition>

	<Transition do={() => text.classList.replace('text-8xl', 'text-6xl')} class="mt-16">
		<img class="rounded-lg" src="./nod-of-approval.gif" alt="nod" />
	</Transition>
</Slide>

<Slide></Slide>

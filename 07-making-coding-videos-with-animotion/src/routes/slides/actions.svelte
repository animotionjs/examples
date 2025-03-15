<script lang="ts">
	import { Slide, Code, Transition, Action } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let code: Code
	let example: Code
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">🤹 Actions</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition
		order={6}
		do={() => {
			sfx.click?.play()
			code.selectLines`*`
		}}
		class="mb-24"
	>
		<Code
			bind:this={example}
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
			options={{ duration: 600, stagger: 0.3, containerStyle: false }}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`1`
				example.selectLines`2`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`2`
				example.selectToken`5 count ++`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`3`
				example.selectToken`{count}`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`4`
				example.selectLines`*`
			}}
		/>

		<Action do={() => code.selectLines`*`} />
	</Transition>

	<Transition order={1} do={() => sfx.click?.play()}>
		<Code
			bind:this={code}
			lang="svelte"
			theme="poimandres"
			code={`
				<script>
					import { Slide, Transition, Code } from '@animotion/core'
				<\/script>

				<Slide>
					<Transition>
						<Code ... />
					</Transition>
				</Slide>
			`}
			options={{ duration: 600, stagger: 0.3, containerStyle: false }}
		/>
	</Transition>

	<Action
		order={2}
		do={() => {
			code.update`
				<script>
					import { Slide, Transition, Code, Action } from '@animotion/core'
				<\/script>

				<Slide>
					<Transition>
						<Code ... />
					</Transition>
				</Slide>		
			`
			code.selectToken`2 Action`
		}}
	/>

	<Action
		order={3}
		do={() => {
			code.update`
				<script>
					import { Slide, Transition, Code, Action } from '@animotion/core'
				<\/script>

				<Slide>
					<Transition>
						<Code ... />
					</Transition>

					<Action do={() => code.selectLines\`2\`} />
					<Action do={() => code.selectToken\`5 count ++\`} />
					<Action do={() => code.selectToken\`{count}\`} />
					<Action do={() => code.selectLines\`*\`} />
				</Slide>		
			`
			code.selectLines`10-13`
		}}
	/>

	<Action
		order={5}
		do={() =>
			code.update`
				<Action do={() => code.selectLines\`2\`} />
				<Action do={() => code.selectToken\`5 count ++\`} />
				<Action do={() => code.selectToken\`{count}\`} />
				<Action do={() => code.selectLines\`*\`} />
			`}
	/>
</Slide>

<Slide></Slide>

<script lang="ts">
	import { Slide, Code, Transition, Action } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let code: Code
	let example: Code
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">🪄 Animating Code</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<div class="flex items-center gap-64">
		<Transition do={() => sfx.click?.play()}>
			<Code
				bind:this={code}
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						import { Code } from '@animotion/core'
					<\/script>

					<Code
						lang="svelte"
						theme="poimandres"
						code={\`
							<script>
								let count = 0
								$: double = count * 2
							<\/script>

							<button on:click={() => count++}>
								{count}
							</button>
						\`}
					/>
				`}
				options={{ duration: 600, stagger: 0.3, containerStyle: false }}
			/>
		</Transition>

		<Action do={() => code.selectToken`2 { Code }`} />
		<Action do={() => code.selectLines`2`} />
		<Action do={() => code.selectLines`6`} />
		<Action do={() => code.selectLines`7`} />
		<Action do={() => code.selectLines`8-17`} />

		<Action
			do={() => {
				code.update`
					<script>
						import { Code } from '@animotion/core'
					<\/script>

					<Code
						lang="svelte"
						theme="poimandres"
						code={\`
->-><script>
->->->let count = 0
->->->$: double = count * 2
->-><\/script>

->-><button on:click={() => count++}>
->->->{count}
->-></button>
						\`}
					/>		
				`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						import { Code } from '@animotion/core'
					<\/script>

					<Code
						lang="svelte"
						theme="poimandres"
						code={\`
							<script>
							->let count = 0
							->$: double = count * 2
							<\/script>

							<button on:click={() => count++}>
							->{count}
							</button>
						\`}
					/>		
				`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						import { Code } from '@animotion/core'
					<\/script>

					<Code
						lang="svelte"
						theme="poimandres"
						code={\`
							<script>
								let count = 0
								$: double = count * 2
							<\/script>

							<button on:click={() => count++}>
								{count}
							</button>
						\`}
						autoIndent={false}
					/>		
				`
				code.selectLines`18`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						import { Code } from '@animotion/core'
					<\/script>

					<Code
						lang="svelte"
						theme="poimandres"
						code={\`
							<script>
								let count = 0
								$: double = count * 2
							<\/script>

							<button on:click={() => count++}>
								{count}
							</button>
						\`}
						options={{ duration: 600, stagger: 0.3 }}
					/>		
				`
				code.selectLines`18`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						import { Code } from '@animotion/core'

						let code
					<\/script>

					<Code
						bind:this={code}
						lang="svelte"
						theme="poimandres"
						code={\`
							<script>
								let count = 0
								$: double = count * 2
							<\/script>

							<button on:click={() => count++}>
								{count}
							</button>
						\`}
						options={{ duration: 600, stagger: 0.3 }}
					/>		
				`
				code.selectLines`4,8`
			}}
		/>

		<Action
			do={() => {
				code.selectLines`*`
				code.update`
					<script>
						function animate() {
							code.update\`
								<script>
									let count = $state(0)
									let double = $derived(count * 2)
								<\/script>

								<button onclick={() => count++}>
									{count}
								</button>						
							\`
						}
					<\/script>
					
					<button onclick={animate}>
						Animate
					</button>
				`
			}}
		/>

		<Transition
			do={() => {
				sfx.click?.play()
				code.selectLines`3-12`
			}}
		>
			<Code
				bind:this={example}
				class="w-[480px]"
				lang="svelte"
				theme="poimandres"
				code={`
					<script>
						let count = 0
						$: double = count * 2
					<\/script>

					<button on:click={() => count++}>
						{count}
					</button>
				`}
				options={{ duration: 600, stagger: 0.3, containerStyle: false }}
			/>
		</Transition>

		<Action
			do={() => {
				example.update`
					<script>
						let count = $state(0)
						let double = $derived(count * 2)
					<\/script>

					<button onclick={() => count++}>
						{double}
					</button>
				`
			}}
		/>

		<Action
			do={() => {
				code.selectLines`*`
				code.update`
					<script>
						function animate() {
							code.selectLines\`2,3\`
							code.selectLines\`6-8\`
							code.selectLines\`2-3,7\`
							code.selectToken\`double {double}\`
							code.selectLines\`*\`
						}
					<\/script>

					<button onclick={animate}>
						Animate
					</button>
				`
			}}
		/>

		<Action
			do={() => {
				code.update`
					<script>
						async function animate() {
							await code.selectLines\`2,3\`
							await code.selectLines\`6-8\`
							await code.selectLines\`2-3,7\`
							await code.selectToken\`double {double}\`
							await code.selectLines\`*\`
						}
					<\/script>

					<button onclick={animate}>
						Animate
					</button>
				`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`3`
				example.selectLines`2,3`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`4`
				example.selectLines`6-8`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`5`
				example.selectLines`2-3,7`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`6`
				example.selectToken`double {double}`
			}}
		/>

		<Action
			do={() => {
				sfx.click?.play()
				code.selectLines`7`
				example.selectLines`*`
			}}
		/>

		<Action do={() => code.selectLines`*`} />
	</div>
</Slide>

<Slide></Slide>

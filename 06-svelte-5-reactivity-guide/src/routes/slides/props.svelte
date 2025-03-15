<script lang="ts">
	import { tweened } from 'svelte/motion'
	import { Slide, Shiki } from '@animotion/core'
	import { Action, Transition } from '$lib/transition'
	import Svelte from '$lib/logo/svelte.svelte'

	let props: Shiki
	let parent: Shiki
	let child: Shiki
	let output: Shiki
	let parentCoords = tweened({ x: 0, y: 0 }, { duration: 8000 })
	let childCoords = tweened({ x: 0, y: 0 }, { duration: 8000 })
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition class="flex items-center gap-2">
		<Svelte width={80} height={80} />
		<p class="text-6xl font-bold drop-shadow-sm">Props</p>
	</Transition>

	<div class="mt-16 flex items-center gap-24">
		<Transition>
			<Shiki
				bind:this={props}
				lang="svelte"
				theme="poimandres"
				code={`
					<button class="btn">
						Click
					</button>
        `}
				options={{ duration: 0.6, stagger: 1 }}
			/>
		</Transition>

		<Action
			do={() =>
				props.update`
					<script>
						let { children } = $props()
					<\/script>

					<button class="btn">
						{@render children()}
					</button>
				`}
		/>

		<Action do={() => props.selectToken`$ props`} />
		<Action do={() => props.selectToken`children`} />

		<Action
			do={() => {
				props.update`
					<script>
						let { children, class } = $props()
					<\/script>

					<button class="btn {class}">
						{@render children()}
					</button>
				`
				props.selectToken`class {class}`
			}}
		/>

		<Action
			do={() => {
				props.update`
					<script>
						let { children, class: CLASS } = $props()
					<\/script>

					<button class="btn {CLASS}">
						{@render children()}
					</button>
				`
				props.selectToken`CLASS {CLASS}`
			}}
		/>

		<Action
			do={() => {
				props.update`
					<script>
						let { children, class: CLASS, ...props } = $props()
					<\/script>

					<button class="btn {CLASS}" {...props}>
						{@render children()}
					</button>
				`
				props.selectToken`... props`
			}}
		/>

		<Action do={() => props.selectLines`*`} />

		<Action
			do={() =>
				props.update`
					<script>
						import Button from './Button.svelte'

						let count = $state(0)
					<\/script>

					<Button>
						{count}
					</Button>
				`}
		/>

		<Action do={() => props.selectLines`2`} />
		<Action do={() => props.selectLines`4,8`} />

		<Action
			do={() => {
				props.update`
					<script>
						import Button from './Button.svelte'

						let count = $state(0)
					<\/script>

					<Button onclick={() => count++}>
						{count}
					</Button>
				`
				props.selectToken`7 onclick = { () => count ++ }>`
			}}
		/>

		<Action do={() => props.selectLines`*`} />
	</div>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-left text-4xl leading-relaxed drop-shadow-sm">
			Props are <b>readonly</b> by default unless you're explicit<br /> and make them
			<b>bindable</b> since state is deeply reactive
		</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<div class="mt-16 flex h-full items-center gap-64">
		<Transition class="h-full">
			<p class="text-4xl">x: {$parentCoords.x.toFixed(0)}, y: {$parentCoords.y.toFixed(0)}</p>
			<div class="mt-16">
				<Shiki
					bind:this={parent}
					lang="svelte"
					theme="poimandres"
					code={`
						<script>
							import Mouse from './mouse.svelte'

							let coords = $state({ x: 0, y: 0 })
						<\/script>

						<Mouse />

						<p>x: {coords.x}, y: {coords.y}</p>
					`}
					options={{ duration: 0.6, stagger: 1 }}
				/>
			</div>
		</Transition>

		<Action do={() => parent.selectLines`2`} />
		<Action do={() => parent.selectLines`4,9`} />
		<Action do={() => parent.selectLines`*`} />

		<Transition class="h-full">
			<p class="text-4xl">x: {$childCoords.x.toFixed(0)}, y: {$childCoords.y.toFixed(0)}</p>
			<div class="mt-16">
				<Shiki
					bind:this={child}
					lang="svelte"
					theme="poimandres"
					code={`
					<script>
						let { coords } = $props()

						function updateMousePosition(e) {
							coords = { x: e.clientX, y: e.clientY }
						}
					<\/script>

					<svelte:window
						on:mousemove={updateMousePosition}
					/>

					<p>x: {coords.x}, y: {coords.y}</p>
				`}
					options={{ duration: 0.6, stagger: 1 }}
				/>
			</div>
		</Transition>

		<Action do={() => child.selectLines`2,5,13`} />
		<Action do={() => child.selectLines`*`} />
		<Action do={() => parent.selectLines`7`} />

		<Action
			do={() => {
				parent.update`
					<script>
						import Mouse from './mouse.svelte'

						let coords = $state({ x: 0, y: 0 })
					<\/script>

					<Mouse {coords} />

					<p>x: {coords.x}, y: {coords.y}</p>
				`
			}}
		/>

		<Action do={() => childCoords.set({ x: 400, y: 400 })} />

		<Action
			do={() => {
				child.update`
					<script>
						let { coords = $bindable() } = $props()

						function updateMousePosition(e) {
							coords = { x: e.clientX, y: e.clientY }
						}
					<\/script>

					<svelte:window on:mousemove={updateMousePosition} />

					<p>x: {coords.x}, y: {coords.y}</p>
				`
				child.selectLines`2`
			}}
		/>

		<Action
			do={() => {
				parent.update`
					<script>
						import Mouse from './mouse.svelte'

						let coords = $state({ x: 0, y: 0 })
					<\/script>

					<Mouse bind:coords />

					<p>x: {coords.x}, y: {coords.y}</p>
				`
			}}
		/>

		<Action
			do={() => {
				childCoords.set({ x: 0, y: 0 }, { duration: 0 })
				parentCoords.set({ x: 400, y: 400 })
				childCoords.set({ x: 400, y: 400 })
			}}
		/>

		<Action
			do={() => {
				child.update`
					<script>
						let { coords = $bindable({ x: 0, y: 0 }) } = $props()

						function updateMousePosition(e) {
							coords = { x: e.clientX, y: e.clientY }
						}
					<\/script>

					<svelte:window on:mousemove={updateMousePosition} />

					<p>x: {coords.x}, y: {coords.y}</p>
				`
			}}
		/>

		<Action
			do={() => {
				parent.selectLines`*`
				child.selectLines`*`
			}}
		/>
	</div>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition>
		<p class="text-left text-4xl leading-relaxed drop-shadow-sm">
			Under the hood Svelte uses <b>get/set</b> methods for props and<br /> detects if you're using
			a
			<b>set</b> method on a readonly prop
		</p>
	</Transition>

	<Transition class="mt-16">
		<Shiki
			bind:this={output}
			lang="ts"
			theme="poimandres"
			code={`
					Mouse(node, {
						// readonly
						get coords() {
							return $.get(coords)
						},
						// is writable?
						set coords($$value) {
							$.set(coords, $.proxy($$value))
						}
					})
			`}
		/>
	</Transition>

	<Action do={() => output.selectLines`2,3,4,5`} />
	<Action do={() => output.selectLines`6,7,8,9`} />
	<Action do={() => output.selectLines`*`} />
</Slide>

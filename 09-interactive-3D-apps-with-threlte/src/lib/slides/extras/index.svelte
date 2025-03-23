<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Iframe, Playground, Tabs, Title } from '$lib/components'
	import Example from './canvas.svelte'

	let codeBlock: Code = $state([])
	let step = $state(0)

	const scene = [
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.PerspectiveCamera
				makeDefault
				position={[14, 10, 0]}
			/>

			<T.Mesh position.y={2}>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>

			<!-- ... -->
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { OrbitControls } from '@threlte/extras'
			<\/script>

			<T.PerspectiveCamera
				makeDefault
				position={[14, 10, 0]}
			>
				<OrbitControls autoRotate enableDamping />
			</T.PerspectiveCamera>

			<T.Mesh position.y={2}>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>

			<!-- ... -->
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { OrbitControls, TransformControls } from '@threlte/extras'
			<\/script>

			<T.PerspectiveCamera
				makeDefault
				position={[14, 10, 0]}
			>
				<OrbitControls autoRotate enableDamping />
			</T.PerspectiveCamera>

			<TransformControls position.y={2}>
				<T.Mesh>
					<T.SphereGeometry args={[2, 32, 32]} />
					<T.MeshStandardMaterial color="#ff6467" />
				</T.Mesh>
			</TransformControls>

			<!-- ... -->
		`
	]
</script>

<Slide class="center">
	<Transition>
		<Title>✨ Extras</Title>
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threlte.xyz/docs/reference/extras/getting-started" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Playground key={step}>
			{#snippet content()}
				<Tabs>
					<Tabs.Item name="scene.svelte">
						<Code
							bind:this={codeBlock[0]}
							lang="svelte"
							theme="poimandres"
							code={scene[0]}
							options={{ duration: 1000, containerStyle: false }}
						/>
					</Tabs.Item>
				</Tabs>
			{/snippet}

			{#snippet output()}
				<Example {step} width={600} height={600} />
			{/snippet}
		</Playground>

		<Action
			actions={[
				() => {
					codeBlock[0].update`${scene[1]}`
					codeBlock[0].selectLines`3,10`
					step++
				},
				() => {
					codeBlock[0].update`${scene[2]}`
					codeBlock[0].selectLines`3,13,18`
					step++
				}
			]}
		/>
	</Transition>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

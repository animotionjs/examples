<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Playground, Tabs, Title } from '$lib/components'
	import Example from './canvas.svelte'

	let codeBlock: Code = $state([])
	let step = $state(0)

	const app = [
		``,
		`
			<script>
				import { Canvas } from '@threlte/core'
			<\/script>

			<Canvas>
				<!-- ... -->
			</Canvas>
		`,
		`
			<script>
				import { Canvas } from '@threlte/core'
				import Scene from './scene.svelte'
			<\/script>

			<Canvas>
				<Scene />
			</Canvas>
		`,
		`
			<script>
				import { Canvas } from '@threlte/core'
				import Scene from './scene.svelte'
			<\/script>

			<div>
				<Canvas>
					<Scene />
				</Canvas>
			</div>

			<style>
				div {
					height: 100%;
				}
			<\/style>
		`
	]

	const scene = [
		``,
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.Mesh>
				<T.SphereGeometry args={[2, 32, 32]} />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.Mesh>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />

			<T.Mesh>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
			<T.AmbientLight color="#d6efff" />

			<T.Mesh>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
			<T.AmbientLight color="#d6efff" />

			<T.Mesh>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>

			<T.Mesh rotation.x={-Math.PI / 2}>
				<T.PlaneGeometry args={[10, 10]} />
				<T.MeshStandardMaterial />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>

			<T.PerspectiveCamera
				makeDefault
				position={[14, 10, 0]}
				oncreate={(ref) => ref.lookAt(0, 0, 0)}
			/>

			<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
			<T.AmbientLight color="#d6efff" />

			<T.Mesh position.y={2} castShadow>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>

			<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
				<T.PlaneGeometry args={[10, 10]} />
				<T.MeshStandardMaterial />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { interactivity } from '@threlte/extras'
				import { Spring } from 'svelte/motion'

				interactivity()
				const scale = new Spring(1)
			<\/script>

			<T.Mesh
				scale={scale.current}
				onpointerenter={() => scale.target = 0.5}
				onpointerleave={() => scale.target = 1}
			>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { Spring } from 'svelte/motion'

				let rotation = 0

				useTask((delta) => {
					rotation += delta * 0.5
				})
			<\/script>

			<T.Mesh rotation.y={rotation}>
				<T.SphereGeometry args={[2, 32, 32]} />
				<T.MeshStandardMaterial color="#ff6467" wireframe />
			</T.Mesh>
		`
	]
</script>

<Slide class="center">
	<Transition>
		<Title>🪷 Basics</Title>
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Playground transition="scale" key={step}>
			{#snippet content()}
				<Tabs>
					<Tabs.Item name="app.svelte">
						<Code
							bind:this={codeBlock[0]}
							lang="svelte"
							theme="poimandres"
							code={app[0]}
							options={{ duration: 1000, containerStyle: false }}
						/>
					</Tabs.Item>

					<Tabs.Item name="scene.svelte">
						<Code
							bind:this={codeBlock[1]}
							lang="svelte"
							theme="poimandres"
							code={scene[0]}
							options={{ duration: 1000, containerStyle: false }}
						/>
					</Tabs.Item>
				</Tabs>
			{/snippet}

			{#snippet output()}
				<Example width={600} height={600} {step} />
			{/snippet}
		</Playground>
	</Transition>

	<Action
		actions={[
			() => {
				codeBlock[0].update`${app[1]}`
				codeBlock[0].selectLines`2,5,7`
			},
			() => {
				codeBlock[0].update`${app[2]}`
				codeBlock[0].selectLines`3,7`
			},
			() => {
				codeBlock[0].update`${app[3]}`
				codeBlock[0].selectLines`6,10,12-16`
			},
			() => {
				codeBlock[1].update`${scene[1]}`
				codeBlock[1].selectLines`2,5-7`
				step++
			},
			() => {
				codeBlock[1].update`${scene[2]}`
				codeBlock[1].selectLines`7`
				step++
			},
			() => {
				codeBlock[1].update`${scene[3]}`
				codeBlock[1].selectLines`5`
				step++
			},
			() => {
				codeBlock[1].update`${scene[4]}`
				codeBlock[1].selectLines`6`
				step++
			},
			() => {
				codeBlock[1].update`${scene[5]}`
				codeBlock[1].selectLines`13-16`
				step++
			},
			() => {
				codeBlock[1].update`${scene[6]}`
				codeBlock[1].selectLines`5-9,14`
				step++
			},
			() => {
				codeBlock[1].update`${scene[7]}`
				codeBlock[1].selectLines`3-7,11-13`
				step++
			},
			() => {
				codeBlock[1].update`${scene[8]}`
				codeBlock[1].selectLines`3-9,12`
				step++
			}
		]}
	/>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Iframe, Playground, Preview, Tabs } from '$lib/components'
	import Three from './three.svelte'

	let codeBlock: Code = $state()

	const code = [
		`
			<script>
				import * as THREE from 'three'

				function scene(canvas) {
					const scene = new THREE.Scene()

					const camera = new THREE.PerspectiveCamera(75)
					camera.position.z = 2

					const geometry = new THREE.SphereGeometry(1, 0, 0)
					const material = new THREE.MeshBasicMaterial({ color: '#ff6467', wireframe: true })
					const sphere = new THREE.Mesh(geometry, material)
					scene.add(sphere)

					const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
					renderer.setSize(canvas.clientWidth, canvas.ClientHeight)
					renderer.setAnimationLoop(animate)

					function animate() {
						sphere.rotation.x += 0.004
						sphere.rotation.y += 0.004
						renderer.render(scene, camera)
					}
				}
			<\/script>

			<canvas use:scene></canvas>
		`,
		`
			<script>
				import { T, useTask } from '@threlte/core'

				let rotation = { x: 0, y: 0, z: 0 }

				useTask((delta) => {
					rotation.x += delta * 0.4
					rotation.y += delta * 0.4
				})
			<\/script>

			<T.PerspectiveCamera makeDefault fov={75} position.z={2} />

			<T.Mesh rotation.x={rotation.x} rotation.y={rotation.y}>
				<T.SphereGeometry args={[1, 0, 0]} />
				<T.MeshBasicMaterial color="#ff6467" wireframe />
			</T.Mesh>
		`
	]
</script>

<Slide class="center">
	<Transition>
		<Iframe src="https://threlte.xyz/" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Preview width={1400} height={1000} url="https://threejs.org/" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Playground class="min-w-[1000px] grid-cols-[auto_1fr]">
			{#snippet content()}
				<Tabs>
					<Tabs.Item name="scene.svelte">
						<Code
							bind:this={codeBlock}
							lang="svelte"
							theme="poimandres"
							code={code[0]}
							options={{ duration: 1000, containerStyle: false }}
						/>
					</Tabs.Item>
				</Tabs>
			{/snippet}

			{#snippet output()}
				<div class="min-w-[600px]">
					<Three width={420} height={420} />
				</div>
			{/snippet}
		</Playground>

		<Action do={() => codeBlock.update`${code[1]}`} />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://svelte.dev/tutorial/svelte/state" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threejs.org/manual/#en/fundamentals" />
	</Transition>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

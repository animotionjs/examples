<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Iframe, Playground, Tabs } from '$lib/components'
	import Three from './three.svelte'
	import Threlte from './threlte.svelte'

	let codeBlock: Code
	let step = $state(0)

	const code = [
		`
			<script>
				const camera = new THREE.PerspectiveCamera(50)
				camera.position.z = 3

				const geometry = new THREE.SphereGeometry(1, 32, 16)
				const material = new THREE.MeshBasicMaterial({ color: '#ff6467' })
				const sphere = new THREE.Mesh(geometry, material)
				sphere.rotation.x = 10
				scene.add(sphere)

				const wireframeGeometry = new THREE.WireframeGeometry(geometry)
				const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#fff', linewidth: 2 })
				const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
				sphere.add(wireframe)
			<\/script>
		`,
		`
			<script>
				import { Canvas, T } from '@threlte/core'

				const camera = new THREE.PerspectiveCamera(50)
				camera.position.z = 3

				const geometry = new THREE.SphereGeometry(1, 32, 16)
				const material = new THREE.MeshBasicMaterial({ color: '#ff6467' })
				const sphere = new THREE.Mesh(geometry, material)
				sphere.rotation.x = 10
				scene.add(sphere)

				const wireframeGeometry = new THREE.WireframeGeometry(geometry)
				const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#fff', linewidth: 2 })
				const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
				sphere.add(wireframe)
			<\/script>

			<Canvas>
				<!-- ... -->
			</Canvas>
		`,
		`
			<script>
				import { Canvas, T } from '@threlte/core'

				const camera = new THREE.PerspectiveCamera(50)
				camera.position.z = 3

				const geometry = new THREE.SphereGeometry(1, 32, 16)
				const material = new THREE.MeshBasicMaterial({ color: '#ff6467' })
				const sphere = new THREE.Mesh(geometry, material)
				sphere.rotation.x = 10
				scene.add(sphere)

				const wireframeGeometry = new THREE.WireframeGeometry(geometry)
				const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#fff', linewidth: 2 })
				const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
				sphere.add(wireframe)
			<\/script>

			<Canvas>
				<T.PerspectiveCamera makeDefault fov={50} position.z={3} />
			</Canvas>
		`,
		`
			<script>
				import { Canvas, T } from '@threlte/core'

				const geometry = new THREE.SphereGeometry(1, 32, 16)
				const material = new THREE.MeshBasicMaterial({ color: '#ff6467' })
				const sphere = new THREE.Mesh(geometry, material)
				sphere.rotation.x = 10
				scene.add(sphere)

				const wireframeGeometry = new THREE.WireframeGeometry(geometry)
				const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#fff', linewidth: 2 })
				const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
				sphere.add(wireframe)
			<\/script>

			<Canvas>
				<T.PerspectiveCamera makeDefault fov={50} position.z={3} />

				<T.Mesh rotation.x={10}>
					<T.SphereGeometry args={[1, 32, 16]} />
					<T.MeshBasicMaterial color="#ff6467" />
				</T.Mesh>
			</Canvas>
		`,
		`
			<script>
				import { Canvas, T } from '@threlte/core'

				let ref

				const wireframeGeometry = new THREE.WireframeGeometry(geometry)
				const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#fff', linewidth: 2 })
				const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
				sphere.add(wireframe)
			<\/script>

			<Canvas>
				<T.PerspectiveCamera makeDefault fov={50} position.z={3} />

				<T.Mesh bind:ref rotation.x={10}>
					<T.SphereGeometry args={[1, 32, 16]} />
					<T.MeshBasicMaterial color="#ff6467" />

					<T.LineSegments>
						<T.WireframeGeometry args={[ref.geometry, ref.material]} />
						<T.LineBasicMaterial color="#fff" linewidth={2} />
					</T.LineSegments>
				</T.Mesh>
			</Canvas>
		`,
		`
			<script>
				import { Canvas, T } from '@threlte/core'
			<\/script>

			<Canvas>
				<T.PerspectiveCamera makeDefault fov={50} position.z={3} />

				<T.Mesh rotation.x={10}>
					{#snippet children({ ref })}
						<T.SphereGeometry args={[1, 32, 16]} />
						<T.MeshBasicMaterial color="#ff6467" />

						<T.LineSegments>
							<T.WireframeGeometry args={[ref.geometry, ref.material]} />
							<T.LineBasicMaterial color="#fff" linewidth={2} />
						</T.LineSegments>
					{/snippet}
				</T.Mesh>
			</Canvas>
		`,
		`
			<script>
				import { Canvas, T } from '@threlte/core'
				import { NoToneMapping } from 'three'
			<\/script>

			<Canvas toneMapping={NoToneMapping}>
				<T.PerspectiveCamera makeDefault fov={50} position.z={3} />

				<T.Mesh rotation.x={10}>
					{#snippet children({ ref })}
						<T.SphereGeometry args={[1, 32, 16]} />
						<T.MeshBasicMaterial color="#ff6467" />

						<T.LineSegments>
							<T.WireframeGeometry args={[ref.geometry, ref.material]} />
							<T.LineBasicMaterial color="#fff" linewidth={2} />
						</T.LineSegments>
					{/snippet}
				</T.Mesh>
			</Canvas>
		`
	]
</script>

<Slide class="center">
	<Transition>
		<div class="center flex gap-16">
			<img class="h-[200px] w-[200px]" src="assets/three.png" alt="three" />
			<div class="text-[100px]">👉️</div>
			<img class="h-[200px] w-[200px]" src="assets/threlte.webp" alt="threlte" />
		</div>
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threejs.org/docs/index.html#api/en/geometries/SphereGeometry" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Playground class="grid-cols-[auto_minmax(600px,1fr)]" transition="scale" key={step}>
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
				{#if step === 0}
					<Three width={400} height={400} />
				{/if}

				{#if step >= 1}
					<Threlte {step} width={400} height={400} />
				{/if}
			{/snippet}
		</Playground>
	</Transition>

	<Action
		actions={[
			() => codeBlock.selectLines`2-3`,
			() => codeBlock.selectLines`5-9`,
			() => codeBlock.selectLines`11-14`,
			() => {
				codeBlock.update`${code[1]}`
				codeBlock.selectLines`2,19,20,21`
				step++
			},
			() => {
				codeBlock.update`${code[2]}`
				codeBlock.selectLines`4,5,20`
			},
			() => {
				codeBlock.update`${code[3]}`
				codeBlock.selectLines`4-8,19-22`
			},
			() => {
				codeBlock.update`${code[4]}`
				codeBlock.selectLines`4,6-9,15,19-22`
				step++
			},
			() => {
				codeBlock.update`${code[5]}`
				codeBlock.selectLines`*`
				// step++
			},
			() => {
				codeBlock.update`${code[6]}`
				codeBlock.selectLines`3,6`
				step++
			}
		]}
	/>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threlte.xyz/docs/reference/core/t#props" />
	</Transition>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

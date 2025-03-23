<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Iframe, Playground, Preview, Tabs, Title } from '$lib/components'
	import Example from './canvas.svelte'

	let codeBlock: Code[] = $state([])
	let stylesPreview: Preview[] = $state([])
	let step = $state(0)

	const app = [
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
				import { Sky } from '@threlte/extras'
				import Scene from './scene.svelte'
			<\/script>

			<Canvas>
				<Sky elevation={8} />
				<Scene />
			</Canvas>
		`
	]

	const scene = [
		`
			<script>
				import { T } from '@threlte/core'
			<\/script>
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { useGltf } from '@threlte/extras'

				// 💩 Error: No DRACOLoader instance provided
				const gltf = useGltf('/assets/LittlestTokyo.glb')
			<\/script>

			{#await gltf then { scene }}
				<T is={scene} />
			{/await}
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { useDraco, useGltf } from '@threlte/extras'

				const dracoLoader = useDraco()
				const gltf = useGltf('/assets/LittlestTokyo.glb', { dracoLoader })
			<\/script>

			{#await gltf then { scene }}
				<T is={scene} />
			{/await}
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { useDraco, useGltf } from '@threlte/extras'

				const dracoLoader = useDraco()
				const gltf = useGltf('/assets/LittlestTokyo.glb', { dracoLoader })
			<\/script>

			{#await gltf then { scene }}
				<T is={scene} position={[1, 1, 0]} scale={0.01} />
			{/await}
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { OrbitControls, useDraco, useGltf } from '@threlte/extras'

				const dracoLoader = useDraco()
				const gltf = useGltf('/assets/LittlestTokyo.glb', { dracoLoader })
			<\/script>

			<T.PerspectiveCamera makeDefault fov={40} position={[5, 2, 8]}>
				<OrbitControls
					autoRotate
					autoRotateSpeed={0.2}
					enableDamping
					enableZoom={false}
					target={[0, 0.5, 0]}
				/>
			</T.PerspectiveCamera>

			{#await gltf then { scene }}
				<T is={scene} position={[1, 1, 0]} scale={0.01} />
			{/await}
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { OrbitControls, useDraco, useGltf, useGltfAnimations } from '@threlte/extras'

				const dracoLoader = useDraco()
				const gltf = useGltf('/assets/LittlestTokyo.glb', { dracoLoader })
				const { actions } = useGltfAnimations(gltf)

				$effect(() => {
					$actions['Take 001']?.play()
				})
			<\/script>

			<T.PerspectiveCamera makeDefault fov={40} position={[5, 2, 8]}>
				<OrbitControls
					autoRotate
					autoRotateSpeed={0.2}
					enableDamping
					enableZoom={false}
					target={[0, 0.5, 0]}
				/>
			</T.PerspectiveCamera>

			{#await gltf then { scene }}
				<T is={scene} position={[1, 1, 0]} scale={0.01} />
			{/await}
		`
	]
</script>

<Slide class="center">
	<Transition>
		<Title>⚙️ Loading Assets</Title>
	</Transition>
</Slide>

<Slide class="grid h-full content-center">
	<Transition class="mx-8 flex gap-4 overflow-hidden">
		{#each ['https://sketchfab.com/search?features=downloadable&type=models', 'https://www.mixamo.com/'] as url, i}
			<div class="w-[1400px]">
				<Preview bind:this={stylesPreview[i]} width={1400} height={1000} time={2000} {url} />
			</div>
		{/each}
	</Transition>

	<Action do={() => stylesPreview[1].scrollIntoView()} />
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threejs.org/examples/#webgl_animation_keyframes" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threejs.org/docs/?q=loader#examples/en/loaders/GLTFLoader" />
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Playground class="max-h-[900px] grid-cols-[minmax(800px,auto)_1fr]" key={step}>
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
				<Example {step} width={800} height={820} />
			{/snippet}
		</Playground>
	</Transition>

	<Action
		actions={[
			() => {
				codeBlock[1].update`${scene[1]}`
				codeBlock[1].selectLines`3,5-6,9-11`
			},
			() => {
				codeBlock[1].update`${scene[2]}`
				codeBlock[1].selectLines`3,5-6`
				step++
			},
			() => {
				codeBlock[0].update`${app[1]}`
				codeBlock[0].selectLines`3,8`
				step++
			},
			() => {
				codeBlock[1].update`${scene[3]}`
				codeBlock[1].selectLines`10`
				step++
			},
			() => {
				codeBlock[1].update`${scene[4]}`
				codeBlock[1].selectLines`3,9-17`
				step++
			},
			() => {
				codeBlock[1].update`${scene[5]}`
				codeBlock[1].selectLines`3,7,9-11`
				step++
			},
			() => codeBlock[1].selectLines`*`
		]}
	/>
</Slide>

<Slide class="center">
	<Transition>
		<Iframe src="https://threlte.xyz/docs/reference/gltf/getting-started" />
	</Transition>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

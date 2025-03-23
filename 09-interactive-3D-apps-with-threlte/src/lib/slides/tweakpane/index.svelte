<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Canvas, T } from '@threlte/core'
	import { Color, Folder, Pane, Slider } from 'svelte-tweakpane-ui'
	import { Playground, Tabs, Title } from '$lib/components'
	import { fade } from 'svelte/transition'

	let codeBlock: Code
	let show = $state(false)

	const light = $state({ x: 10, y: 20, z: 10, intensity: 2 })
	const ambient = $state({ color: '#d6efff' })
	const sphere = $state({ color: '#ff6467' })

	const code = [
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

				const light = $state({ x: 10, y: 20, z: 10, intensity: 2 })
				const ambient = $state({ color: '#d6efff' })
				const sphere = $state({ color: '#ff6467' })
			<\/script>

			<T.DirectionalLight
				position={[light.x, light.y, light.z]}
				intensity={light.intensity}
				castShadow
			/>
			<T.AmbientLight color={ambient.color} />

			<T.Mesh>
				<T.SphereGeometry args={[2.5, 32, 32]} />
				<T.MeshStandardMaterial color={sphere.color} />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { Color, Folder, Pane, Slider } from 'svelte-tweakpane-ui'

				const light = $state({ x: 10, y: 20, z: 10, intensity: 2 })
				const ambient = $state({ color: '#d6efff' })
				const sphere = $state({ color: '#ff6467' })
			<\/script>

			<T.DirectionalLight
				position={[light.x, light.y, light.z]}
				intensity={light.intensity}
				castShadow
			/>
			<T.AmbientLight color={ambient.color} />

			<T.Mesh>
				<T.SphereGeometry args={[2.5, 32, 32]} />
				<T.MeshStandardMaterial color={sphere.color} />
			</T.Mesh>
		`,
		`
			<script>
				import { T } from '@threlte/core'
				import { Color, Folder, Pane, Slider } from 'svelte-tweakpane-ui'

				const light = $state({ x: 10, y: 20, z: 10, intensity: 2 })
				const ambient = $state({ color: '#d6efff' })
				const sphere = $state({ color: '#ff6467' })
			<\/script>

			<Pane title="Tweakpane">
				<Folder title="DirectionalLight">
					<Slider label="X" bind:value={light.x} />
					<Slider label="Y" bind:value={light.y} />
					<Slider label="Z" bind:value={light.z} />
					<Slider label="Intensity" bind:value={light.intensity} />
				</Folder>

				<Folder title="AmbientLight">
					<Color label="Color" bind:value={ambient.color} />
				</Folder>

				<Folder title="Sphere">
					<Color label="Color" bind:value={sphere.color} />
				</Folder>
			</Pane>

			<T.DirectionalLight
				position={[light.x, light.y, light.z]}
				intensity={light.intensity}
				castShadow
			/>
			<T.AmbientLight color={ambient.color} />

			<T.Mesh>
				<T.SphereGeometry args={[2.5, 32, 32]} />
				<T.MeshStandardMaterial color={sphere.color} />
			</T.Mesh>
		`
	]
</script>

<Slide class="center">
	<Transition>
		<Title>🎛️ Svelte Tweakpane UI</Title>
	</Transition>
</Slide>

<Slide class="center">
	<Transition>
		<Playground class="h-[800px] grid-cols-[auto_minmax(600px,1fr)]">
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
				{#if show}
					<div in:fade={{ duration: 600 }} class="p-8 pb-0">
						<Pane
							title="Tweakpane"
							position="inline"
							width={400}
							expanded={true}
							theme={{ containerUnitSize: '32px' }}
						>
							<Folder title="DirectionalLight">
								<Slider label="X" bind:value={light.x} />
								<Slider label="Y" bind:value={light.y} />
								<Slider label="Z" bind:value={light.z} />
								<Slider label="Intensity" bind:value={light.intensity} />
							</Folder>

							<Folder title="AmbientLight">
								<Color label="Color" bind:value={ambient.color} />
							</Folder>

							<Folder title="Sphere">
								<Color label="Color" bind:value={sphere.color} />
							</Folder>
						</Pane>
					</div>
				{/if}

				<div class="h-[400px] w-[400px]">
					<Canvas>
						<T.DirectionalLight
							position={[light.x, light.y, light.z]}
							intensity={light.intensity}
							castShadow
						/>
						<T.AmbientLight color={ambient.color} />

						<T.Mesh>
							<T.SphereGeometry args={[2.5, 32, 32]} />
							<T.MeshStandardMaterial color={sphere.color} />
						</T.Mesh>
					</Canvas>
				</div>
			{/snippet}
		</Playground>
	</Transition>

	<Action
		actions={[
			() => {
				codeBlock.update`${code[1]}`
				codeBlock.selectLines`4-6,10-11,14,18`
			},
			() => {
				codeBlock.update`${code[2]}`
				codeBlock.selectLines`3`
			},
			() => {
				codeBlock.update`${code[3]}`
				codeBlock.selectLines`3,10-25`
				show = true
			}
		]}
	/>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

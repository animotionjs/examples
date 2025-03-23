<script lang="ts">
	import { T } from '@threlte/core'
	import { OrbitControls, useDraco, useGltf, useGltfAnimations } from '@threlte/extras'

	let { step } = $props()

	const dracoLoader = useDraco()
	const gltf = useGltf('/assets/LittlestTokyo.glb', { dracoLoader })
	const { actions, mixer } = useGltfAnimations<'Take 001'>(gltf)

	$effect(() => {
		if (step === 5) {
			$actions['Take 001']?.play()
		}
	})
</script>

{#if step === 1}
	{#await gltf then gltf}
		<T is={gltf.scene} />
	{/await}
{/if}

{#if step === 2}
	{#await gltf then gltf}
		<T is={gltf.scene} />
	{/await}
{/if}

{#if step === 3}
	{#await gltf then gltf}
		<T is={gltf.scene} position={[1, 1, 0]} scale={0.01} />
	{/await}
{/if}

{#if step >= 4}
	<T.PerspectiveCamera makeDefault fov={40} position={[5, 2, 8]}>
		<OrbitControls
			autoRotate
			autoRotateSpeed={0.2}
			enableDamping
			enableZoom={false}
			target={[0, 0.5, 0]}
		/>
	</T.PerspectiveCamera>

	{#await gltf then gltf}
		{console.log(gltf)}
		<T is={gltf.scene} position={[1, 1, 0]} scale={0.01} />
	{/await}
{/if}

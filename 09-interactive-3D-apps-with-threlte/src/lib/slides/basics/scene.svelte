<script lang="ts">
	import { T, useTask } from '@threlte/core'
	import { interactivity } from '@threlte/extras'
	import { getContext } from 'svelte'
	import { Spring } from 'svelte/motion'

	interactivity()
	const scale = new Spring(1)

	const step = getContext<{ current: number }>('step')

	let rotation = 0

	useTask((delta) => {
		if (step.current !== 8) return
		rotation += delta * 0.5
	})
</script>

{#if step.current === 1}
	<T.Mesh>
		<T.SphereGeometry args={[2, 32, 32]} />
	</T.Mesh>
{/if}

{#if step.current === 2}
	<T.Mesh>
		<T.SphereGeometry args={[2, 32, 32]} />
		<T.MeshStandardMaterial color="#ff6467" />
	</T.Mesh>
{/if}

{#if step.current === 3}
	<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />

	<T.Mesh>
		<T.SphereGeometry args={[2, 32, 32]} />
		<T.MeshStandardMaterial color="#ff6467" />
	</T.Mesh>
{/if}

{#if step.current === 4}
	<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
	<T.AmbientLight color="#d6efff" />

	<T.Mesh>
		<T.SphereGeometry args={[2, 32, 32]} />
		<T.MeshStandardMaterial color="#ff6467" />
	</T.Mesh>
{/if}

{#if step.current === 5}
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
{/if}

{#if step.current === 6}
	<T.PerspectiveCamera
		makeDefault
		position={[14, 10, 0]}
		oncreate={(ref) => {
			ref.lookAt(0, 0, 0)
		}}
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
{/if}

{#if step.current === 7}
	<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
	<T.AmbientLight color="#d6efff" />

	<T.Mesh
		scale={scale.current}
		onpointerenter={() => (scale.target = 0.5)}
		onpointerleave={() => (scale.target = 1)}
	>
		<T.SphereGeometry args={[2, 32, 32]} />
		<T.MeshStandardMaterial color="#ff6467" />
	</T.Mesh>
{/if}

{#if step.current === 8}
	<T.Mesh rotation.y={rotation}>
		<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
		<T.AmbientLight color="#d6efff" />

		<T.SphereGeometry args={[2, 32, 32]} />
		<T.MeshStandardMaterial color="#ff6467" wireframe />
	</T.Mesh>
{/if}

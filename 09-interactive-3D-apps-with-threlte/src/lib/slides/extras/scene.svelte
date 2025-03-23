<script lang="ts">
	import { T } from '@threlte/core'
	import { OrbitControls, TransformControls } from '@threlte/extras'
	import { getContext } from 'svelte'

	const step = getContext<{ current: number }>('step')
</script>

{#if step.current === 0}
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

{#if step.current === 1}
	<T.PerspectiveCamera
		makeDefault
		position={[14, 10, 0]}
		oncreate={(ref) => {
			ref.lookAt(0, 0, 0)
		}}
	>
		<OrbitControls autoRotate enableDamping />
	</T.PerspectiveCamera>

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

{#if step.current === 2}
	<T.PerspectiveCamera
		makeDefault
		position={[14, 10, 0]}
		oncreate={(ref) => {
			ref.lookAt(0, 0, 0)
		}}
	>
		<OrbitControls autoRotate enableDamping />
	</T.PerspectiveCamera>

	<T.DirectionalLight position={[10, 20, 10]} intensity={2} castShadow />
	<T.AmbientLight color="#d6efff" />

	<TransformControls position.y={2}>
		<T.Mesh castShadow>
			<T.SphereGeometry args={[2, 32, 32]} />
			<T.MeshStandardMaterial color="#ff6467" />
		</T.Mesh>
	</TransformControls>

	<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
		<T.PlaneGeometry args={[10, 10]} />
		<T.MeshStandardMaterial />
	</T.Mesh>
{/if}

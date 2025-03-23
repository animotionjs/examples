<script lang="ts">
	import { T, useTask } from '@threlte/core'

	let rotation = { x: 0, y: 0, z: 0 }

	useTask((delta) => {
		rotation.x += delta * 0.4
		rotation.y += delta * 0.4
	})
</script>

<T.PerspectiveCamera makeDefault fov={75} position.z={2} />

<T.Mesh rotation.x={rotation.x} rotation.y={rotation.y}>
	<T.SphereGeometry args={[1, 0, 0]} />
	<T.MeshBasicMaterial color="#ff6467" wireframe />
</T.Mesh>

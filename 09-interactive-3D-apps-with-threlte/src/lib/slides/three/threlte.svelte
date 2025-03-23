<script lang="ts">
	import { Canvas, T } from '@threlte/core'
	import { NoToneMapping } from 'three'

	let { width = 400, height = 400, step } = $props()
</script>

{#if step === 2}
	<div style="width: {width}px; height: {height}px;">
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
	</div>
{/if}

{#if step === 3}
	<div style="width: {width}px; height: {height}px;">
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
	</div>
{/if}

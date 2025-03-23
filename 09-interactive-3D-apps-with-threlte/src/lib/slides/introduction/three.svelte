<script lang="ts">
	import * as THREE from 'three'

	let { width, height, ...props } = $props()

	function scene(canvas: HTMLCanvasElement, { width = 400, height = 400 }) {
		const scene = new THREE.Scene()
		const camera = new THREE.PerspectiveCamera(75)
		camera.position.z = 2

		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
		renderer.setSize(width, height)
		renderer.setAnimationLoop(animate)

		const geometry = new THREE.SphereGeometry(1, 0, 0)
		const material = new THREE.MeshBasicMaterial({ color: '#ff6467', wireframe: true })
		const sphere = new THREE.Mesh(geometry, material)
		scene.add(sphere)

		function animate() {
			sphere.rotation.x += 0.004
			sphere.rotation.y += 0.004
			renderer.render(scene, camera)
		}
	}
</script>

<canvas use:scene={{ width, height }} {...props}></canvas>

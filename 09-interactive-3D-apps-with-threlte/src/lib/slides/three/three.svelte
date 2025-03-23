<script lang="ts">
	import * as THREE from 'three'

	let { width, height, ...props } = $props()

	function scene(canvas: HTMLCanvasElement, { width = 400, height = 400 }) {
		const scene = new THREE.Scene()

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

		const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
		renderer.setSize(width, height)
		renderer.setAnimationLoop(animate)

		function animate() {
			renderer.render(scene, camera)
		}
	}
</script>

<canvas use:scene={{ width, height }} {...props}></canvas>

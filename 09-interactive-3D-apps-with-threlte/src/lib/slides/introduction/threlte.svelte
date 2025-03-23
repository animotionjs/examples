<script lang="ts">
	import { Canvas } from '@threlte/core'
	import Scene from './scene.svelte'

	let { width = 400, height = 400 } = $props()
</script>

<div style="width: {width}px; height: {height}px;">
	<Canvas>
		<Scene />
	</Canvas>
</div>

<script lang="ts">
	import { Canvas } from '@threlte/core'
	import { setContext } from 'svelte'
	import Scene from './scene.svelte'

	let { width = 400, height = 400, step = 0 } = $props()

	setContext<{ current: number }>('step', {
		get current() {
			return step
		}
	})
</script>

<div style="width: {width}px; height: {height}px;">
	<Canvas>
		<Scene />
	</Canvas>
</div>

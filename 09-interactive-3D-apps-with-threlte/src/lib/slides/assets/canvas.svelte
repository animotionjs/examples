<script lang="ts">
	import { Canvas } from '@threlte/core'
	import { Sky } from '@threlte/extras'
	import Scene from './scene.svelte'

	let { width = 400, height = 400, step = 0 } = $props()
</script>

<div class="relative" style="width: {width}px; height: {height}px;">
	<Canvas>
		{#if step >= 2}
			<Sky elevation={8} />
		{/if}
		<Scene {step} />
	</Canvas>
</div>

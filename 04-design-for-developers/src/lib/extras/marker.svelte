<script lang="ts">
	type Marker = {
		x: number
		y: number
		w: number
		h: number
		opacity: number
	}

	export let markers: Marker[] = []
</script>

<div class="markers">
	{#each markers as marker}
		<div
			class="absolute bg-[yellow] mix-blend-multiply z-50"
			style:left="{marker.x}%"
			style:top="{marker.y}%"
			style:width="{marker.w}px"
			style:height="{marker.h}px"
			style:opacity={marker.opacity}
		/>
	{/each}
</div>

<script lang="ts">
	let layout = false
</script>

<div class="relative h-[1080px] w-[1920px] overflow-hidden" class:layout>
	<div class="h-full p-16">
		<slot />
	</div>
</div>

<style>
	.layout {
		outline: 4px solid aqua;
		outline-offset: -6px;
	}
</style>

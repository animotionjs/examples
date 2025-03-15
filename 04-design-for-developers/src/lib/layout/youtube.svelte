<script lang="ts">
	import { options } from './options'
</script>

<div
	class="relative w-[1920px] h-[1080px] overflow-hidden"
	class:outline={$options.outline}
>
	<div class="h-full p-16">
		<slot />
	</div>
</div>

<style>
	.outline {
		outline: 4px solid aqua;
		outline-offset: -6px;
	}
</style>

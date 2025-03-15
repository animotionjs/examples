<script lang="ts">
	export let props
</script>

<div
	class="absolute -translate-x-1/2 -translate-y-1/2"
	style:top="{$props.y}%"
	style:left="{$props.x}%"
	style:opacity={$props.opacity}
>
	<slot />
</div>

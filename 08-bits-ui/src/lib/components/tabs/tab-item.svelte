<script module lang="ts">
	let id = 0
</script>

<script lang="ts">
	import { getContext } from 'svelte'

	let componentId = id
	id++

	let { children, name } = $props()
	let { tabs, active } = getContext<{ tabs: string[]; active: { current: number } }>('tabs')
	let hidden = $derived(componentId !== active.current)

	if (name) {
		tabs.push(name)
	}
</script>

<div class={{ hidden }}>
	{@render children?.()}
</div>

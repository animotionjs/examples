<script lang="ts">
	import { getContext, type Snippet } from 'svelte'

	type Props = { active?: boolean; name: string; children: Snippet }
	type TabsContext = { active: string | null; tabs: { id: string; name: string }[] }

	let { active, name, children }: Props = $props()

	const id = crypto.randomUUID()
	const tabsContext = getContext<TabsContext>('tabs')

	if (id) {
		tabsContext.tabs.push({ id, name })

		if (tabsContext.active === null) {
			tabsContext.active = tabsContext.tabs[0].id
		}

		if (active) {
			tabsContext.active = id
		}
	}

	const hidden = $derived(tabsContext.active !== id)
</script>

<div class={{ hidden }}>
	{@render children?.()}
</div>

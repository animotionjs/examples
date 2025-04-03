<script lang="ts">
	import { setContext, type Snippet } from 'svelte'

	type Props = { children: Snippet }
	type TabsContext = { active: string | null; tabs: { id: string; name: string }[] }

	let { children }: Props = $props()

	const tabsContext = $state<TabsContext>({ active: null, tabs: [] })
	setContext('tabs', tabsContext)

	const transitionName = `active-${crypto.randomUUID()}`

	function viewTransition(node: HTMLElement) {
		node.style.viewTransitionName = transitionName

		const style = document.createElement('style')
		style.textContent = `
			::view-transition-group(${transitionName}) {
				animation-duration: 0.3s;
				animation-timing-function: ease-out;
			}
		`
		document.head.appendChild(style)

		$effect(() => {
			return () => document.head.removeChild(style)
		})
	}

	function setActiveTabById(id: string) {
		document.startViewTransition(() => {
			tabsContext.active = id
		})
	}

	export function setActiveTabByIndex(index: number) {
		const id = tabsContext.tabs[index].id
		setActiveTabById(id)
	}
</script>

<div class="h-full">
	<div class="grid h-full grid-rows-[auto_1fr]">
		<div class="flex border-b border-neutral-950 text-[18px]">
			{#each tabsContext.tabs as tab (tab)}
				{@const active = tabsContext.active === tab.id}
				<div class={['text-neutral-400', { 'text-white': active }]}>
					<button
						onclick={() => setActiveTabById(tab.id)}
						class="font-inherit relative bg-transparent p-4 text-inherit outline-none"
					>
						<div>{tab.name}</div>

						{#if active}
							<div
								use:viewTransition
								class="absolute -bottom-[1.5px] left-0 h-[2px] w-full bg-red-400"
							></div>
						{/if}
					</button>
				</div>
			{/each}
		</div>

		<div class="scrollbar overflow-auto p-4 text-left text-[32px]">
			{@render children?.()}
		</div>
	</div>
</div>

<script>
	import { Accordion } from 'bits-ui'
	import AccordionItem from './accordion-item.svelte'

	let { items, value = $bindable(), ref = $bindable(null), ...props } = $props()
</script>

<Accordion.Root bind:value bind:ref {...props}>
	{#each items as item, i (item.title + i)}
		<AccordionItem {...item} />
	{/each}
</Accordion.Root>

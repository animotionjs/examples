<script lang="ts">
	import { Accordion, AccordionItem } from 'flowbite-svelte'
</script>

<div class="dark w-[400px] text-left text-[16px]">
	<Accordion flush>
		<AccordionItem>
			<span>Content A</span>
			<span slot="header">Title A</span>
		</AccordionItem>

		<AccordionItem>
			<span>Content B</span>
			<span slot="header">Title B</span>
		</AccordionItem>
	</Accordion>
</div>

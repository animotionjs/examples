<script lang="ts">
	import { Accordion, AccordionItem } from 'flowbite-svelte'
</script>

<div class="dark w-[400px] text-left text-[16px]">
	<Accordion>
		<AccordionItem>
			<span slot="header">Title A</span>
			<span>Content A</span>
		</AccordionItem>

		<AccordionItem>
			<span slot="header">Title B</span>
			<span>Content B</span>
		</AccordionItem>
	</Accordion>
</div>

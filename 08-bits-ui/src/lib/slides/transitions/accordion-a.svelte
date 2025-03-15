<script lang="ts">
	import { Accordion } from 'bits-ui'
</script>

<div class="w-[400px] text-left">
	<Accordion.Root type="single">
		<Accordion.Item class="border-b border-neutral-700 px-2">
			<Accordion.Header>
				<Accordion.Trigger
					class="flex w-full items-center justify-between py-7 text-[24px] text-white select-none [&[data-state=open]>span:nth-of-type(2)]:rotate-95"
				>
					<span class="font-bold">Title A</span>
					<span class="transition-transform duration-200">👉️</span>
				</Accordion.Trigger>
			</Accordion.Header>

			<Accordion.Content
				class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden"
			>
				<div class="pb-7 text-[18px]">Content A</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>

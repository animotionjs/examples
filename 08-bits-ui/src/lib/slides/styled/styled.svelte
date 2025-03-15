<script lang="ts">
	import { Action, Code, Slide } from '@animotion/core'
	import { Playground, Tabs, Title } from '$lib/components'

	import AccordionA from './accordion-a.svelte'
	import AccordionB from './accordion-b.svelte'
	import Select from './select.svelte'

	let flowbiteCode: ReturnType<Code>
	let flowbiteComponent = $state<'A' | 'B' | 'C'>('A')

	const FlowbiteComponent = $derived.by(() => {
		if (flowbiteComponent === 'A') return AccordionA
		if (flowbiteComponent === 'B') return AccordionB
		if (flowbiteComponent === 'C') return Select
	})

	const flowbiteMarkup = [
		`
			<script>
				import { AccordionItem, Accordion } from 'flowbite-svelte'
			<\/script>

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
		`,
		`
			<script>
				import { AccordionItem, Accordion } from 'flowbite-svelte'
			<\/script>

			<Accordion flushed>
				<AccordionItem>
					<span>Content A</span>
					<span slot="header">Title A</span>
				</AccordionItem>

				<AccordionItem>
					<span>Content B</span>
					<span slot="header">Title B</span>
				</AccordionItem>
			</Accordion>
		`,
		`
			<script>
				import { Select } from 'flowbite-svelte'

				let items = [
					{ value: 1, name: 'React' },
					{ value: 2, name: 'Solid' },
					{ value: 3, name: 'Svelte' },
					{ value: 4, name: 'Vue' }
				]
				let selected = $state(0)
			<\/script>

			<Select bind:value={selected} {items} />
		`
	]

	const flowbiteStyles = `
		@import 'tailwindcss';

		@plugin 'flowbite/plugin';

		@custom-variant dark (&:where(.dark, .dark *));

		@theme {
			--color-primary-50: #fff5f2;
			--color-primary-100: #fff1ee;
			--color-primary-200: #ffe4de;
			--color-primary-300: #ffd5cc;
			--color-primary-400: #ffbcad;
			--color-primary-500: #fe795d;
			--color-primary-600: #ef562f;
			--color-primary-700: #eb4f27;
			--color-primary-800: #cc4522;
			--color-primary-900: #a5371b;
		}

		@source '../node_modules/flowbite-svelte/dist';
	`
</script>

<Slide class="center">
	<Title>Prestyled<br /> Components<br /><br /> 📦️</Title>
</Slide>

<Slide class="center">
	<Playground class="h-[720px] w-[1400px]" key={flowbiteComponent}>
		{#snippet content()}
			<Tabs>
				<Tabs.Item name="app.svelte">
					<Code
						bind:this={flowbiteCode}
						lang="svelte"
						theme="poimandres"
						code={flowbiteMarkup[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>

				<Tabs.Item name="app.css">
					<Code
						lang="css"
						theme="poimandres"
						code={flowbiteStyles}
						options={{ containerStyle: false }}
					/>
				</Tabs.Item>
			</Tabs>
		{/snippet}

		{#snippet output()}
			<FlowbiteComponent />
		{/snippet}
	</Playground>

	<Action
		do={() => {
			flowbiteComponent = 'B'
			flowbiteCode.update`${flowbiteMarkup[1]}`
		}}
	/>

	<Action
		do={() => {
			flowbiteComponent = 'C'
			flowbiteCode.update`${flowbiteMarkup[2]}`
		}}
	/>
</Slide>

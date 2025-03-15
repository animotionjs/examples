<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Playground, Tabs, Title } from '$lib/components'

	import AccordionA from '../transitions/accordion-a.svelte'
	import AccordionB from './accordion.svelte'

	let bitsCode: Array<ReturnType<Code>> = []
	let accordionComponent = $state<'A' | 'B'>('A')

	const items = [
		{ title: 'Title A', content: 'Content A' },
		{ title: 'Title B', content: 'Content B' },
		{ title: 'Title C', content: 'Content C' },
		{ title: 'Title D', content: 'Content D' }
	]

	const app = [
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item>
					<Accordion.Header>
						<Accordion.Trigger>
							<span>Title A</span>
							<span>👉️</span>
						</Accordion.Trigger>
					</Accordion.Header>

					<Accordion.Content>
						<div>Content A</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		`,
		`
			<script>
				import Accordion from '$lib/components/accordion.svelte'

				const items = [
					{ title: 'Title A', content: 'Content A' },
					{ title: 'Title B', content: 'Content B' },
					{ title: 'Title C', content: 'Content C' },
					{ title: 'Title D', content: 'Content D' }
				]
			<\/script>
			
			<Accordion {items} type="single" />
		`
	]

	const accordionItem = [
		``,
		`
			<script>
				import { Accordion } from 'bits-ui'

				let { title, content, ...props } = $props()
			<\/script>

			<Accordion.Item {...props}>
				<Accordion.Header>
					<Accordion.Trigger>{title}</Accordion.Trigger>
				</Accordion.Header>

				<Accordion.Content>
					{content}
				</Accordion.Content>
			</Accordion.Item>
		`
	]

	const accordion = [
		``,
		`
			<script>
				import { Accordion } from 'bits-ui'
				import AccordionItem from './accordion-item.svelte'

				let {
					items,
					value = $bindable(),
					ref = $bindable(null),
					...props
				} = $props()
			<\/script>

			<Accordion.Root bind:value bind:ref {...props}>
				{#each items as item, i (item.title + i)}
					<AccordionItem {...item} />
				{/each}
			</Accordion.Root>
		`
	]
</script>

<Slide class="center">
	<Transition visible>
		<Title>Reusable<br /> Components<br /><br /> 🍱</Title>
	</Transition>
</Slide>

<Slide class="center">
	<Playground class="h-[840px] w-[1600px]">
		{#snippet content()}
			<Tabs>
				<Tabs.Item name="app.svelte">
					<Code
						bind:this={bitsCode[0]}
						lang="svelte"
						theme="poimandres"
						code={app[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>

				<Tabs.Item name="accordion.svelte">
					<Code
						bind:this={bitsCode[2]}
						lang="svelte"
						theme="poimandres"
						code={accordion[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>

				<Tabs.Item name="accordion-item.svelte">
					<Code
						bind:this={bitsCode[1]}
						lang="svelte"
						theme="poimandres"
						code={accordionItem[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>
			</Tabs>
		{/snippet}

		{#snippet output()}
			{#if accordionComponent === 'A'}
				<AccordionA />
			{/if}

			{#if accordionComponent === 'B'}
				<div class="w-[400px] text-left">
					<AccordionB {items} type="single" />
				</div>
			{/if}
		{/snippet}
	</Playground>

	<Action
		actions={[
			() => bitsCode[1].update`${accordionItem[1]}`,
			() => bitsCode[2].update`${accordion[1]}`,
			() => {
				accordionComponent = 'B'
				bitsCode[0].update`${app[1]}`
			}
		]}
	/>
</Slide>

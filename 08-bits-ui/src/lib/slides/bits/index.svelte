<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Playground, Tabs, Title } from '$lib/components'

	import AccordionA from './accordion-a.svelte'
	import AccordionB from './accordion-b.svelte'
	import AccordionC from './accordion-c.svelte'
	import AccordionD from './accordion-d.svelte'

	let bitsCode: ReturnType<Code>
	let bitsComponent = $state<'A' | 'B' | 'C' | 'D' | 'none'>('none')

	const BitsComponent = $derived.by(() => {
		if (bitsComponent === 'A') return AccordionA
		if (bitsComponent === 'B') return AccordionB
		if (bitsComponent === 'C') return AccordionC
		if (bitsComponent === 'D') return AccordionD
	})

	const bitsMarkup = [
		``,
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<!-- ... -->
			</Accordion.Root>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item>
					<!-- ... -->
				</Accordion.Item>
			</Accordion.Root>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item>
					<Accordion.Header>
						<Accordion.Trigger>
							<span>👉️</span>
							<span>Title A</span>
						</Accordion.Trigger>
					</Accordion.Header>

					<!-- ... -->
				</Accordion.Item>
			</Accordion.Root>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item>
					<Accordion.Header>
						<Accordion.Trigger>
							<span>👉️</span>
							<span>Title A</span>
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
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item class="border-b border-neutral-700 px-2">
					<Accordion.Header>
						<Accordion.Trigger class="flex w-full items-center
							justify-between py-7 text-[24px] select-none
							[&[data-state=open]>span:nth-of-type(2)]:rotate-95"
						>
							<span class="font-bold">Title A</span>
							<span class="transition-transform duration-200">👉️</span>
						</Accordion.Trigger>
					</Accordion.Header>

					<Accordion.Content class="overflow-hidden">
						<div class="pb-7 text-[18px]">Content A</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'

				let value = $state()
				let ref = $state(null)
			<\/script>

			<Accordion.Root bind:value bind:ref type="single">
				{#each ['A', 'B', 'C', 'D'] as value}
					<Accordion.Item {value} class="border-b border-neutral-700 px-2">
						<Accordion.Header>
							<Accordion.Trigger class="flex w-full items-center
								justify-between py-7 text-[24px] select-none
								[&[data-state=open]>span:nth-of-type(2)]:rotate-95"
							>
								<span class="font-bold">Title {value}</span>
								<span class="transition-transform duration-200">👉️</span>
							</Accordion.Trigger>
						</Accordion.Header>

						<Accordion.Content class="overflow-hidden">
							<div class="pb-7 text-[18px]">Content {value}</div>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'

				let value = $state()

				function getValue() {
					return value
				}

				function setValue(newValue) {
					value = newValue
				}
			<\/script>

			<Accordion.Root bind:value={getValue, setValue} type="single">
				{#each ['A', 'B', 'C', 'D'] as value}
					<Accordion.Item {value} class="border-b border-neutral-700 px-2">
						<Accordion.Header>
							<Accordion.Trigger class="flex w-full items-center
								justify-between py-7 text-[24px] select-none
								[&[data-state=open]>span:nth-of-type(2)]:rotate-95"
							>
								<span class="font-bold">Title {value}</span>
								<span class="transition-transform duration-200">👉️</span>
							</Accordion.Trigger>
						</Accordion.Header>

						<Accordion.Content class="overflow-hidden">
							<div class="pb-7 text-[18px]">Content {value}</div>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		`
	]
</script>

<Slide class="center">
	<Transition visible>
		<Title>Headless<br /> Components</Title>
	</Transition>

	<Transition>
		<!-- svelte-ignore a11y_missing_attribute -->
		<img
			class="mt-16 aspect-video rounded-md shadow-md shadow-black"
			src="https://c.tenor.com/NZ_UBWBSEP4AAAAC/tenor.gif"
		/>
	</Transition>
</Slide>

<Slide class="center">
	<Playground class="h-[820px] w-[1600px]" key={bitsComponent}>
		{#snippet content()}
			<Tabs>
				<Tabs.Item name="app.svelte">
					<Code
						bind:this={bitsCode}
						lang="svelte"
						theme="poimandres"
						code={bitsMarkup[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>
			</Tabs>
		{/snippet}

		{#snippet output()}
			{#if bitsComponent !== 'none'}
				<BitsComponent />
			{/if}
		{/snippet}
	</Playground>

	<Action
		actions={[
			() => bitsCode.update`${bitsMarkup[1]}`,
			() => bitsCode.update`${bitsMarkup[2]}`,
			() => bitsCode.update`${bitsMarkup[3]}`,
			() => bitsCode.update`${bitsMarkup[4]}`,
			() => {
				bitsComponent = 'A'
				bitsCode.update`${bitsMarkup[5]}`
			},
			() => {
				bitsComponent = 'B'
				bitsCode.update`${bitsMarkup[6]}`
			},
			() => {
				bitsComponent = 'C'
				bitsCode.update`${bitsMarkup[7]}`
			},
			() => {
				bitsComponent = 'D'
				bitsCode.update`${bitsMarkup[8]}`
			},
			() => bitsCode.update`${bitsMarkup[9]}`
		]}
	/>
</Slide>

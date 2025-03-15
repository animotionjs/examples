<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Playground, Preview, Tabs, Title } from '$lib/components'

	import AccordionA from './accordion-a.svelte'
	import AccordionB from './accordion-b.svelte'

	let bitsCode: Array<ReturnType<Code>> = []
	let bitsComponent = $state<'A' | 'B'>('A')

	const BitsComponent = $derived.by(() => {
		if (bitsComponent === 'A') return AccordionA
		if (bitsComponent === 'B') return AccordionB
	})

	const bitsMarkup = [
		`
			<script>
				import { Accordion } from 'bits-ui'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item class="border-b border-neutral-700 px-2">
					<Accordion.Header>
						<Accordion.Trigger class="flex w-full items-center
							justify-between py-7 text-[24px] text-white select-none
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
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item class="border-b border-neutral-700 px-2">
					<Accordion.Header>
						<Accordion.Trigger class="flex w-full items-center
							justify-between py-7 text-[24px] text-white select-none
							[&[data-state=open]>span:nth-of-type(2)]:rotate-95"
						>
							<span class="font-bold">Title A</span>
							<span class="transition-transform duration-200">👉️</span>
						</Accordion.Trigger>
					</Accordion.Header>

					<Accordion.Content class="
						data-[state=closed]:animate-accordion-up
						data-[state=open]:animate-accordion-down
						overflow-hidden"
					>
						<div class="pb-7 text-[18px]">Content A</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		`,
		`
			<script>
				import { Accordion } from 'bits-ui'
				import { slide } from 'svelte/transition'
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item class="border-b border-neutral-700 px-2">
					<Accordion.Header>
						<Accordion.Trigger class="flex w-full items-center
							justify-between py-7 text-[24px] text-white select-none
							[&[data-state=open]>span:nth-of-type(2)]:rotate-95"
						>
							<span class="font-bold">Title A</span>
							<span class="transition-transform duration-200">👉️</span>
						</Accordion.Trigger>
					</Accordion.Header>

					<Accordion.Content forceMount={true}>
						{#snippet child({ props, open })}
							{#if open}
								<div class="pb-7 text-[18px]" transition:slide {...props}>
									Content A
								</div>
							{/if}
						{/snippet}
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		`
	]
	const bitsStyles = [
		`
			@keyframes accordion-down {
				from {
					height: 0;
				}
				to {
					height: var(--bits-accordion-content-height);
				}
			}

			@keyframes accordion-up {
				from {
					height: var(--bits-accordion-content-height);
				}
				to {
					height: 0;
				}
			}
				
			@theme {
				--animate-accordion-down: accordion-down 0.2s ease-out;
				--animate-accordion-up: accordion-up 0.2s ease-out;
			}
	`
	]
</script>

<Slide class="center">
	<Transition visible>
		<Title>Transitions 🪄</Title>
	</Transition>
</Slide>

<Slide class="center">
	<Playground class="h-[840px] w-[1600px]" key={bitsComponent}>
		{#snippet content()}
			<Tabs>
				<Tabs.Item name="app.svelte">
					<Code
						bind:this={bitsCode[0]}
						lang="svelte"
						theme="poimandres"
						code={bitsMarkup[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>

				<Tabs.Item name="app.css">
					<Code
						bind:this={bitsCode[1]}
						lang="css"
						theme="poimandres"
						code={bitsStyles[0]}
						options={{ duration: 600, stagger: 0.3, containerStyle: false }}
					/>
				</Tabs.Item>
			</Tabs>
		{/snippet}

		{#snippet output()}
			<BitsComponent />
		{/snippet}
	</Playground>

	<Action
		actions={[
			() => bitsCode[0].update`${bitsMarkup[1]}`,
			() => {
				bitsComponent = 'B'
				bitsCode[0].update`${bitsMarkup[2]}`
			}
		]}
	/>
</Slide>

<Slide class="center">
	<Preview width={1400} url="https://bits-ui.com/docs/transitions" />
</Slide>

<script lang="ts">
	import { Action, Code, Slide, Transition } from '@animotion/core'
	import { Iframe, Playground, Preview, Tabs, Title } from '$lib/components'

	import AccordionA from './accordion-a.svelte'

	let bitsCode: Array<ReturnType<Code>> = []
	let bitsComponent = $state<'A'>('A')

	const BitsComponent = $derived.by(() => {
		if (bitsComponent === 'A') return AccordionA
	})

	const stylesPreview: Preview[] = $state([])

	const bitsMarkup = [
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
			<\/script>

			<Accordion.Root type="single">
				<Accordion.Item class="accordion-item">
					<Accordion.Header>
						<Accordion.Trigger class="accordion-trigger">
							<span>Title A</span>
							<span>👉️</span>
						</Accordion.Trigger>
					</Accordion.Header>

					<Accordion.Content class="accordion-content">
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
				<Accordion.Item>
					<Accordion.Header>
						<Accordion.Trigger>
							{#snippet child({ props })}
								<button class="accordion-trigger" {...props}>
									<span>Title A</span>
									<span>👉️</span>							
								</button>
							{/snippet}
						</Accordion.Trigger>
					</Accordion.Header>

					<Accordion.Content>
						<div>Content A</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>

			<style>
				.accordion-trigger {
					/* ... */
				}
			<\/style>
		`
	]

	const bitsStyles = [
		`
			.accordion-item {
				/* ... */
			}

			.accordion-trigger {
				/* ... */
			}

			.accordion-content {
				/* ... */
			}
		`,
		`
			[data-accordion-item] { /* ... */ }

			[data-accordion-trigger] { /* ... */ }

			[data-accordion-trigger][data-state='open'] { /* ... */ }

			[data-accordion-trigger][data-disabled] { /* ... */ }

			[data-accordion-content] {
				overflow: hidden;
				transition: height 300ms ease-out;
				height: 0;
			}

			[data-accordion-content][data-state='open'] {
				height: var(--bits-accordion-content-height);
			}

			[data-accordion-content][data-state='closed'] {
				height: 0;
			}
		`
	]
</script>

<Slide class="center">
	<Transition visible>
		<Title>Styling 💅</Title>
	</Transition>
</Slide>

<Slide class="center">
	<Iframe src="https://bits-ui.com/docs/components/accordion" />
</Slide>

<Slide class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
	<div class="flex snap-x gap-4 overflow-hidden p-8">
		{#each ['https://tailwindcss.com/', 'https://unocss.dev/'] as url, i}
			<div class="w-[1400px] snap-center">
				<Preview bind:this={stylesPreview[i]} width={1400} height={1000} {url} />
			</div>
		{/each}
	</div>
	<Action do={() => stylesPreview[1].scrollIntoView()} />
</Slide>

<Slide class="center">
	<Playground class="h-[820px] w-[1600px]" key={bitsComponent}>
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
				bitsCode[0].update`${bitsMarkup[2]}`
				bitsCode[1].update`${bitsStyles[1]}`
			},
			() => bitsCode[0].update`${bitsMarkup[3]}`
		]}
	/>
</Slide>

<Slide class="center">
	<Preview width={1400} url="https://bits-ui.com/docs/styling" />
</Slide>

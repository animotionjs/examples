<script lang="ts">
	import { Slide, Action } from '@animotion/core'
	import { Title, Loop } from '$lib/components'

	let loop: Loop<string>

	const components = [
		'Accordion',
		'Alert Dialog',
		'Aspect Ratio',
		'Avatar',
		'Button',
		'Calendar',
		'Checkbox',
		'Collapsible',
		'Combobox',
		'Command',
		'Context Menu',
		'Date Field',
		'Date Picker',
		'Date Range Field',
		'Date Range Picker',
		'Dialog',
		'Dropdown Menu',
		'Label',
		'Link Preview',
		'Menubar',
		'Meter',
		'Navigation Menu',
		'Pagination',
		'PIN Input',
		'Popover',
		'Progress',
		'Radio Group',
		'Range Calendar',
		'Scroll Area',
		'Select',
		'Separator',
		'Slider',
		'Switch',
		'Tabs',
		'Toggle',
		'Toggle Group',
		'Toolbar',
		'Tooltip',
		''
	]
</script>

<Slide class="center">
	<Title class="text-[140px]">30+ Components</Title>
</Slide>

<Slide class="h-full text-[32px] font-bold" transition="fade">
	<div class="grid h-full grid-cols-8">
		<Loop bind:this={loop} items={components} delay={100}>
			{#snippet item(item)}
				<div class="grid h-full w-full place-content-center border border-neutral-800">
					{item}
				</div>
			{/snippet}
		</Loop>
	</div>
	<Action do={() => loop.play()} />
</Slide>

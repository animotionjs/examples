<script lang="ts">
	import { Slide, Code, Action } from '@animotion/core'
	import { Image, Playground, Preview, Tabs, Title } from '$lib/components'
	import RegularSelect from './regular-select.svelte'

	let step = $state(0)
	let codeBlock: ReturnType<typeof Code>
	let preview: ReturnType<typeof Preview>[] = $state([])

	let steps = [
		`
			<select>
				<option value="">🔥 Hot frameworks</option>
				<hr />
				<option value="angular">🅰️ Angular</option>
				<option value="react">⚛️ React</option>
				<option value="solid">🚀 Solid</option>
				<option value="svelte">⚡️ Svelte</option>
				<option value="vue">✨ Vue</option>
			</select>
    `,
		`
			<select>
				<option value="">🔥 Hot frameworks</option>
				<hr />
				<option value="angular">🅰️ Angular</option>
				<option value="react">⚛️ React</option>
				<option value="solid">🚀 Solid</option>
				<option value="svelte">⚡️ Svelte</option>
				<option value="vue">✨ Vue</option>
			</select>

			<style>
				select {
					appearance: none;
					font: inherit;
					padding: 1rem;
					border: none;
					border-radius: 1rem;
					background-color: #222;
					line-height: 1.6;
					
					&:open {
						background-color: #444;
					}
					
					option {
						background-color: #444;
					}
				}
			<\/style>
    `
	]
</script>

<Slide>
	<!-- ... -->
</Slide>

<Slide class="center">
	<Title>🤦Select</Title>
</Slide>

<Slide class="center">
	<Image src="assets/select-styling.png" />
</Slide>

<Slide class="center">
	<Playground class="grid w-[1400px] grid-cols-2" transition="scale" key={step}>
		{#snippet input()}
			<Tabs>
				<Tabs.Item name="index.html">
					<Code
						bind:this={codeBlock}
						lang="html"
						code={steps[0]}
						options={{ duration: 1300, lineNumbers: true, containerStyle: false }}
					/>
				</Tabs.Item>
			</Tabs>
		{/snippet}

		{#snippet output()}
			<RegularSelect {step} />
		{/snippet}
	</Playground>

	<Action
		actions={[
			() => {
				step = 1
			},
			() => {
				codeBlock.update`${steps[1]}`
			},
			() => {
				codeBlock.selectLines`13-19`
				step = 2
			},
			() => {
				codeBlock.selectLines`21-23`
			},
			() => {
				codeBlock.selectLines`25-27`
			},
			() => {
				codeBlock.selectLines`*`
			}
		]}
	/>
</Slide>

<Slide class="center">
	<Title class="text-center">That sucks! 😩</Title>
</Slide>

<Slide class="center">
	<Preview bind:this={preview[0]} width={1400} url="https://www.w3.org/WAI/ARIA/apg/patterns/" />
	<Action do={() => preview[0].scrollEnd(20_000)} />
</Slide>

<Slide class="center">
	<Preview
		bind:this={preview[1]}
		width={1400}
		url="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/"
	/>
	<Action do={() => preview[1].scrollEnd(20_000)} />
</Slide>

<Slide>
	<!-- ... -->
</Slide>

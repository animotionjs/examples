<script lang="ts">
	import { Slide, Code, Action } from '@animotion/core'
	import { Iframe, Image, Playground, Tabs, Title } from '$lib/components'
	import SelectDiagram from './select-diagram.svelte'
	import CustomSelect from './custom-select.svelte'

	let codeBlock: ReturnType<typeof Code> = $state([])
	let tabs: ReturnType<typeof Tabs>
	let step = $state(0)

	let html = [
		`
			<select>
				<!-- ... -->
			</select>
    `,
		`
			<select>
				<option value="">🔥 Hotest framework</option>
				<hr />
			</select>
    `,
		`
			<select>
				<option value="">🔥 Hotest framework</option>
				<hr />

				<option value="angular">
					<svg aria-hidden>…</svg>
					<span>Angular</span>
				</option>
			</select>
    `,
		`
			<select>
				<option value="">🔥 Hotest framework</option>
				<hr />

				<option value="angular">
					<svg aria-hidden>…</svg>
					<span>Angular</span>
				</option>
				
				<option value="react">
					<svg aria-hidden>…</svg>
					<span>React</span>
				</option>
				
				<option value="solid">
					<svg aria-hidden>…</svg>
					<span>Solid</span>
				</option>
				
				<option value="svelte">
					<svg aria-hidden>…</svg>
					<span>Svelte</span>
				</option>
				
				<option value="vue">
					<svg aria-hidden>…</svg>
					<span>Vue</span>
				</option>
			</select>
    `,
		`
			<select>
				<button>
					<selectedcontent></selectedcontent>
					<span class="picker">👇️</span>
				</button>

				<option value="angular">
					<svg aria-hidden>…</svg>
					<span>Angular</span>
				</option>

				<option value="react">
					<svg aria-hidden>…</svg>
					<span>React</span>
				</option>

				<option value="solid">
					<svg aria-hidden>…</svg>
					<span>Solid</span>
				</option>

				<option value="svelte">
					<svg aria-hidden>…</svg>
					<span>Svelte</span>
				</option>

				<option value="vue">
					<svg aria-hidden>…</svg>
					<span>Vue</span>
				</option>
			</select>
    `
	]

	let css = [
		``,
		`
			select {
				&, &::picker(select) {
					appearance: base-select;
				}
			}
		`,
		`
			select {
				min-inline-size: 14ch;
				justify-content: space-between;

				&, &::picker(select) {
					appearance: base-select;
					padding: 1rem;
					border: none;
					border-radius: 1rem;
					background-color: #222;
					line-height: 1.6;
				}
			}
		`,
		`
			select {
				min-inline-size: 14ch;
				justify-content: space-between;

				&, &::picker(select) {
					appearance: base-select;
					padding: 1rem;
					border: none;
					border-radius: 1rem;
					background-color: #222;
					line-height: 1.6;
				}

				&::picker(select) {
					margin-block-start: 0.5rem;
				}

				&::picker-icon {
					display: none;
				}

				.picker {
					transition: rotate 0.3s ease;

					:open & {
						rotate: 90deg;
					}
				}
			}
		`,
		`
			<style>
				select {
					min-inline-size: 14ch;
					justify-content: space-between;

					&,
					&::picker(select) {
						appearance: base-select;
						padding: 1rem;
						border: none;
						border-radius: 1rem;
						background-color: #222;
						line-height: 1.6;
					}

					&::picker(select) {
						margin-block-start: 0.5rem;
					}

					&::picker-icon {
						display: none;
					}

					.picker {
						transition: rotate 0.3s ease;

						:open & {
							rotate: 90deg;
						}
					}

					selectedcontent > * {
						transition: translate 1s var(--spring-easing), opacity 1s;

						@starting-style {
							opacity: 0;
							translate: 0% 100%;
						}
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
	<Title>👨‍🎨 Custom Select</Title>
</Slide>

<Slide class="center">
	<Image
		class="aspect-square"
		src="https://i.giphy.com/d31vTpVi1LAcDvdm.webp"
		width={480}
		height={362}
	/>
</Slide>

<Slide class="center">
	<div class="absolute top-8 left-8 text-left">
		<div class="text-[24px] font-bold capitalize">Custom &lt;select&gt; examples</div>
		<div class="mt-2 flex items-center gap-2 text-[18px] text-neutral-400">
			<img
				class="rounded-full"
				width="24"
				height="24"
				src="https://assets.codepen.io/5928893/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1616020020&width=512"
				alt="codepen.io/una"
			/>
			<span>codepen.io/web-dot-dev</span>
		</div>
	</div>
	<Iframe
		src="https://codepen.io/web-dot-dev/embed/gbOKyRZ?default-tab=html%2Cresult&theme-id=dark"
	/>
</Slide>

<Slide class="center">
	<div class="absolute top-8 left-8 text-left">
		<div class="text-[24px] font-bold capitalize">Gmail select with hover effect</div>
		<div class="mt-2 flex items-center gap-2 text-[18px] text-neutral-400">
			<img
				class="rounded-full"
				width="24"
				height="24"
				src="https://assets.codepen.io/6291/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512"
				alt="codepen.io/una"
			/>
			<span>codepen.io/una</span>
		</div>
	</div>
	<Iframe src="https://codepen.io/una/embed/dyBWYxR?default-tab=html%2Cresult&theme-id=dark" />
</Slide>

<Slide class="center">
	<div class="absolute top-8 left-8 text-left">
		<div class="text-[24px] font-bold capitalize">Currency picker</div>
		<div class="mt-2 flex items-center gap-2 text-[18px] text-neutral-400">
			<img
				class="rounded-full"
				width="24"
				height="24"
				src="https://assets.codepen.io/6291/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1&width=512"
				alt="codepen.io/una"
			/>
			<span>codepen.io/una</span>
		</div>
	</div>
	<Iframe src="https://codepen.io/una/embed/MWMmYxb?default-tab=html%2Cresult&theme-id=dark" />
</Slide>

<Slide class="center">
	<Title>🦾 &lt;select&gt; anatomy</Title>
</Slide>

<Slide class="center">
	<SelectDiagram />
</Slide>

<Slide class="center">
	<Playground class="grid h-[1000px] w-[1600px] grid-cols-2" transition="scale" key={step}>
		{#snippet input()}
			<Tabs bind:this={tabs}>
				<Tabs.Item name="index.html">
					<Code
						bind:this={codeBlock[0]}
						lang="html"
						code={html[0]}
						options={{ duration: 1000, lineNumbers: true, containerStyle: false }}
					/>
				</Tabs.Item>

				<Tabs.Item name="app.css">
					<Code
						bind:this={codeBlock[1]}
						lang="css"
						code={css[0]}
						options={{ duration: 1000, lineNumbers: true, containerStyle: false }}
					/>
				</Tabs.Item>
			</Tabs>
		{/snippet}

		{#snippet output()}
			<CustomSelect {step} />
		{/snippet}
	</Playground>

	<Action
		actions={[
			() => {
				codeBlock[0].update`${html[1]}`
				codeBlock[0].selectLines`2-3`
				step = 1
			},
			() => {
				codeBlock[0].update`${html[2]}`
				codeBlock[0].selectLines`5-8`
			},
			() => {
				codeBlock[0].update`${html[3]}`
				codeBlock[0].selectLines`10-28`
			},
			() => {
				codeBlock[0].selectLines`*`
			},
			() => {
				codeBlock[0].update`${html[4]}`
				codeBlock[0].selectLines`2-5`
				step = 2
			},
			() => {
				tabs.setActiveTabByIndex(1)
			},
			() => {
				codeBlock[1].update`${css[1]}`
				step = 3
			},
			() => {
				codeBlock[1].update`${css[2]}`
				codeBlock[1].selectLines`2-3`
				step = 4
			},
			() => {
				codeBlock[1].selectLines`7-11`
			},
			() => {
				codeBlock[1].update`${css[3]}`
				codeBlock[1].selectLines`14-16`
				step = 5
			},
			() => {
				codeBlock[1].selectLines`18-20`
			},
			() => {
				codeBlock[1].selectLines`22-28`
			},
			() => {
				codeBlock[1].update`${css[4]}`
				codeBlock[1].selectLines`32-40`
				step = 6
			},
			() => {
				codeBlock[1].selectLines`*`
			}
		]}
	/>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

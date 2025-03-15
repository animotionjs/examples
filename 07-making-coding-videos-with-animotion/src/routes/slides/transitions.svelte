<script lang="ts">
	import { Slide, Code, Transition, Action } from '@animotion/core'
	import * as fx from '$lib/extras/effects'
	import * as sfx from '$lib/extras/sound'

	let transition: Code
	let css: Code
	let order: Code

	const box =
		'grid h-[240px] w-[240px] place-content-center rounded-2xl border-t-2 border-white bg-gray-200 text-6xl font-semibold text-black shadow-2xl'
</script>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.beep?.play()}>
		<p use:fx.glitch class="text-8xl font-bold">✨ Transitions</p>
	</Transition>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition
		order={3}
		do={() => transition.selectLines`*`}
		class="grid h-[496px] grid-cols-2 grid-rows-2 gap-4"
	>
		<Transition
			do={() => {
				sfx.click?.play()
				transition.selectLines`2`
			}}
			class={box}>1</Transition
		>
		<Transition
			do={() => {
				sfx.click?.play()
				transition.selectLines`3`
			}}
			class={box}>2</Transition
		>
		<Transition
			do={() => {
				sfx.click?.play()
				transition.selectLines`4`
			}}
			class={box}>3</Transition
		>
		<Transition
			do={() => {
				sfx.click?.play()
				transition.selectLines`5`
			}}
			class={box}>4</Transition
		>
	</Transition>

	<Transition order={1} do={() => sfx.click?.play()} class="mt-16">
		<Code
			bind:this={transition}
			lang="svelte"
			theme="poimandres"
			code={`
				<div class="grid grid-cols-2 grid-rows-2 gap-4">
					<Transition class="box">1</Transition>
					<Transition class="box">2</Transition>
					<Transition class="box">3</Transition>
					<Transition class="box">4</Transition>
				</div>
			`}
			options={{ duration: 600, stagger: 0.1, containerStyle: false }}
		/>
	</Transition>

	<Action order={2} do={() => transition.selectLines`1,6`} />
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition do={() => sfx.click?.play()} class="mt-16">
		<div class="mt-8">
			<Code
				bind:this={css}
				lang="css"
				theme="poimandres"
				code={`
					.enter {
						animation: enter 0.6s var(--ease);
					}

					@keyframes enter {
						from {
							filter: blur(40px);
							scale: 0;
							translate: 0px 100vh;
						}
					}
				`}
				options={{ duration: 600, stagger: 0.1, containerStyle: false }}
			/>
		</div>
	</Transition>

	<Action
		do={() => {
			sfx.click?.play()
			css.update`
				.rotate {
					animation: rotate 0.6s var(--ease);
				}

				@keyframes rotate {
					from {
						filter: blur(4px);
						scale: 2;
						rotate: -1turn;
					}
				}
		`
		}}
	/>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<Transition
		order={4}
		do={() => order.selectLines`*`}
		class="grid h-[496px] grid-cols-2 grid-rows-2 gap-4"
	>
		<Transition
			class={box}
			order={8}
			do={() => {
				sfx.click?.play()
				order.selectLines`2`
			}}
			transition="rotate"
		>
			1
		</Transition>
		<Transition
			class={box}
			order={7}
			do={() => {
				sfx.click?.play()
				order.selectLines`3`
			}}
			transition="rotate"
		>
			2
		</Transition>
		<Transition
			class={box}
			order={6}
			do={() => {
				sfx.click?.play()
				order.selectLines`4`
			}}
			transition="rotate"
		>
			3
		</Transition>
		<Transition
			class={box}
			order={5}
			do={() => {
				sfx.click?.play()
				order.selectLines`5`
			}}
			transition="rotate"
		>
			4
		</Transition>
		<Action do={() => order.selectLines`*`} />
	</Transition>

	<Transition order={1} do={() => sfx.click?.play()} class="mt-16">
		<Code
			bind:this={order}
			lang="svelte"
			theme="poimandres"
			code={`
				<div class="grid grid-cols-2 grid-rows-2 gap-4">
					<Transition class="box">1</Transition>
					<Transition class="box">2</Transition>
					<Transition class="box">3</Transition>
					<Transition class="box">4</Transition>
				</div>
			`}
			options={{ duration: 600, stagger: 0.1, containerStyle: false }}
		/>
	</Transition>

	<Action
		order={2}
		do={() => {
			order.update`
				<div class="grid grid-cols-2 grid-rows-2 gap-4">
					<Transition order={4}>1</Transition>
					<Transition order={3}>2</Transition>
					<Transition order={2}>3</Transition>
					<Transition order={1}>4</Transition>
				</div>		
		`
		}}
	/>

	<Action
		order={3}
		do={() => {
			order.update`
				<div class="grid grid-cols-2 grid-rows-2 gap-4">
					<Transition order={4} enter="rotate">1</Transition>
					<Transition order={3} enter="rotate">2</Transition>
					<Transition order={2} enter="rotate">3</Transition>
					<Transition order={1} enter="rotate">4</Transition>
				</div>		
			`
		}}
	/>
</Slide>

<Slide class="h-full place-content-center place-items-center">
	<img class="rounded-lg shadow-lg" src="/support.png" alt="support" />
</Slide>

<Slide></Slide>

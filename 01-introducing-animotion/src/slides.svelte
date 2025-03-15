<script lang="ts">
	import { tweened } from 'svelte/motion'
	import { quadInOut } from 'svelte/easing'
	import { Presentation, Slide, Code, Step } from '@components'
	import Layout from './layout.svelte'

	let waveform = false
	let progress = tweened(0, { duration: 1500 })
	let width = tweened(960, { duration: 2500, easing: quadInOut })
	let height = tweened(700, { duration: 2500, easing: quadInOut })
	let scale = tweened(1, { duration: 2500, easing: quadInOut })
</script>

<Presentation>
	<!-- intro -->
	<Slide>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Visualizing ideas with code
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<div>
					<img width="400" src="manim.svg" alt="logo" />
					<p>Manim</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<div>
					<img width="400" src="manim.svg" alt="logo" />
					<p>Manim</p>
				</div>

				<div>
					<img width="400" src="motion-canvas.svg" alt="logo" />
					<p>Motion Canvas</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<div>
					<img width="400" src="manim.svg" alt="logo" />
					<p>Manim</p>
				</div>

				<div>
					<img width="400" src="motion-canvas.svg" alt="logo" />
					<p>Motion Canvas</p>
				</div>

				<div>
					<div class="w-[400px] h-[400px] grid place-content-center">
						<img width="300" src="remotion.png" alt="logo" />
					</div>
					<p>Remotion</p>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div
				class="flex h-full items-center justify-center gap-[16px] text-[200px]"
			>
				<p>🪄</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				class="flex h-full items-center justify-center gap-[16px] text-[100px]"
			>
				<p>🪄</p>
				<p>Animotion</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="280" src="vite.svg" alt="logo" />
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="280" src="vite.svg" alt="logo" />
				<img height="280" src="svelte.png" alt="logo" />
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="280" src="vite.svg" alt="logo" />
				<img height="280" src="svelte.png" alt="logo" />
				<img height="280" src="reveal.png" alt="logo" />
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="280" src="vite.svg" alt="logo" />
				<img height="280" src="svelte.png" alt="logo" />
				<img height="280" src="reveal.png" alt="logo" />
				<img height="280" src="tailwind.png" alt="logo" />
			</div>
		</Layout>
	</Slide>

	<!-- bring your own layout -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Bring your own animation engine
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center">
				<div
					data-id="slide"
					class="grid h-[400px] w-[600px] place-items-center rounded-lg border-4"
				>
					<div class="h-[100px] w-[100px] rounded-full bg-[aqua]" />
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[48px]">
				<div
					data-id="slide"
					class="grid h-[400px] w-[600px] place-items-center rounded-lg border-4"
				>
					<div
						data-id="circle"
						class="h-[100px] w-[100px] rounded-full bg-[aqua]"
					/>
				</div>

				<svg
					data-id="arrow"
					width="211"
					height="30"
					viewBox="0 0 211 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 13H0V17H2V13ZM210.414 16.4142C211.195 15.6332 211.195 14.3668 210.414 13.5858L197.686 0.857864C196.905 0.0768158 195.639 0.0768158 194.858 0.857864C194.077 1.63891 194.077 2.90524 194.858 3.68629L206.172 15L194.858 26.3137C194.077 27.0948 194.077 28.3611 194.858 29.1421C195.639 29.9232 196.905 29.9232 197.686 29.1421L210.414 16.4142ZM2 17H209V13H2V17Z"
						fill="white"
					/>
				</svg>

				<div
					class="grid h-[400px] w-[600px] place-items-center rounded-lg border-4"
				/>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[48px]">
				<div
					data-id="slide"
					class="grid h-[400px] w-[600px] place-items-center rounded-lg border-4"
				>
					<div class="h-[100px] w-[100px] rounded-full bg-[aqua]" />
				</div>

				<svg
					data-id="arrow"
					width="211"
					height="30"
					viewBox="0 0 211 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 13H0V17H2V13ZM210.414 16.4142C211.195 15.6332 211.195 14.3668 210.414 13.5858L197.686 0.857864C196.905 0.0768158 195.639 0.0768158 194.858 0.857864C194.077 1.63891 194.077 2.90524 194.858 3.68629L206.172 15L194.858 26.3137C194.077 27.0948 194.077 28.3611 194.858 29.1421C195.639 29.9232 196.905 29.9232 197.686 29.1421L210.414 16.4142ZM2 17H209V13H2V17Z"
						fill="white"
					/>
				</svg>

				<div
					class="pattern grid h-[400px] w-[600px] place-items-center rounded-lg border-4"
				>
					<div
						data-id="circle"
						class="h-[200px] w-[200px] rounded-full bg-[yellow]"
					/>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- ecosystem -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Bring your own library
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="100" src="motion-one.png" alt="logo" />
				<img width="100" src="d3.svg" alt="logo" />
				<img width="400" src="gsap.png" alt="logo" />
				<img width="100" src="three.png" alt="logo" />
				<p class="text-[24px]">Browser APIs</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="100" src="gsap.png" alt="logo" />
				<img width="100" src="d3.svg" alt="logo" />
				<img width="200" src="motion-one.png" alt="logo" />
				<img width="100" src="three.png" alt="logo" />
				<p class="text-[24px]">Browser APIs</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="100" src="gsap.png" alt="logo" />
				<img width="100" src="motion-one.png" alt="logo" />
				<img width="200" src="d3.svg" alt="logo" />
				<img width="100" src="three.png" alt="logo" />
				<p class="text-[24px]">Browser APIs</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="100" src="gsap.png" alt="logo" />
				<img width="100" src="motion-one.png" alt="logo" />
				<img width="200" src="three.png" alt="logo" />
				<img width="100" src="d3.svg" alt="logo" />
				<p class="text-[24px]">Browser APIs</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<img width="100" src="gsap.png" alt="logo" />
				<img width="100" src="motion-one.png" alt="logo" />
				<p class="text-[48px]">Browser APIs</p>
				<img width="100" src="three.png" alt="logo" />
				<img width="100" src="d3.svg" alt="logo" />
			</div>
		</Layout>
	</Slide>

	<!-- you're in control -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Bring Your Own Controls
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				data-id="stops"
				class="relative flex h-full items-center justify-center"
			>
				<Step>
					<div
						class="absolute left-[25%] top-[25%] h-[60px] w-[200px] rounded-[32px] bg-[#46a1ff]"
					/>
				</Step>
				<Step>
					<div
						class="absolute left-[32%] top-[14%] h-[60px] w-[200px] rounded-[32px] bg-[#4659ff]"
					/>
				</Step>
				<Step>
					<div
						class="absolute left-[50%] top-[25%] h-[60px] w-[200px] rounded-[32px] bg-[#8146ff]"
					/>
				</Step>
				<Step>
					<div
						class="absolute left-[54%] top-[14%] h-[60px] w-[500px] rounded-[32px] bg-gradient-to-r from-[#8146FF] to-[#ff46f8]"
					/>
				</Step>
				<img src="waveform.png" alt="waveform" />
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				data-id="stops"
				class="relative top-[25%] flex h-full items-center justify-center"
			>
				<div
					class="absolute left-[25%] top-[25%] h-[60px] w-[200px] rounded-[32px] bg-[#46a1ff]"
				/>
				<div
					class="absolute left-[32%] top-[14%] h-[60px] w-[200px] rounded-[32px] bg-[#4659ff]"
				/>
				<div
					class="absolute left-[50%] top-[25%] h-[60px] w-[200px] rounded-[32px] bg-[#8146ff]"
				/>
				<div
					class="absolute left-[54%] top-[14%] h-[60px] w-[500px] rounded-[32px] bg-gradient-to-r from-[#8146FF] to-[#ff46f8]"
				/>
			</div>
		</Layout>
	</Slide>

	<Slide
		on:in={() => (waveform = true)}
		on:out={() => (waveform = false)}
		animate
	>
		<Layout>
			<div
				data-id="stops"
				class="relative flex h-full items-center justify-center"
			>
				<div>
					<div
						class="absolute left-[25%] top-[25%] h-[60px] w-[200px] rounded-[32px] bg-[#46a1ff]"
					/>
					<div
						class="absolute left-[32%] top-[14%] h-[60px] w-[200px] rounded-[32px] bg-[#4659ff]"
					/>
					<div
						class="absolute left-[50%] top-[25%] h-[60px] w-[200px] rounded-[32px] bg-[#8146ff]"
					/>
					<div
						class="absolute left-[54%] top-[14%] h-[60px] w-[500px] rounded-[32px] bg-gradient-to-r from-[#8146FF] to-[#ff46f8]"
					/>
				</div>
				<img class:waveform src="waveform.png" alt="waveform" />
			</div>
		</Layout>
	</Slide>

	<!-- slides -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Using Animotion
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-center absolute text-[64px]">
				<Code lang="svelte" lines="2|1-3">
					{`
						<script>
							import { Presentation, Slide } from '@components'
						<\/script>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-center absolute text-[64px]">
				<Code lang="svelte" lines="5">
					{`
						<script>
							import { Presentation, Slide } from '@components'
						<\/script>

						<Presentation />
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-center absolute text-[64px]">
				<Code lang="svelte" lines="6,8|7">
					{`
						<script>
							import { Presentation, Slide } from '@components'
						<\/script>

						<Presentation>
							<Slide>
								<p class="text-2xl">Text</p>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-center absolute text-[64px]">
				<Code lang="svelte" lines="7|1-10">
					{`
						<script>
							import { Presentation, Slide } from '@components'
						<\/script>

						<Presentation>
							<Slide>
								<p class="text-[64px]">Title</p>
								<p class="text-2xl">Text</p>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<!-- auto-animate -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Auto-animate
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				data-id="animation"
				class="absolute left-[34%] top-[34%] text-[64px]"
			>
				<Code lang="svelte" lines="1,5|2-4|2">
					{`	
						<Presentation>
							<Slide>
								<p>Animotion</p>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				data-id="animation"
				class="absolute left-[20%] top-[24%] text-[64px]"
			>
				<Code lang="svelte" lines="2|2-4">
					{`	
						<Presentation>
							<Slide animate>
								<p>Animotion</p>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>

			<div class="absolute right-[20%] top-[42%] text-[64px]">
				<p>Animotion</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="absolute left-[20%] top-[24%] text-[64px]">
				<Code lang="svelte" lines="6-8">
					{`	
						<Presentation>
							<Slide animate>
								<p>Animotion</p>
							</Slide>

							<Slide animate>
								<p>Animotion</p>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>

			<div class="absolute right-[20%] top-[42%] text-[64px]">
				<p>Animotion</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="absolute left-[20%] top-[24%] text-[64px]">
				<Code lang="svelte" lines="7|1-10">
					{`	
						<Presentation>
							<Slide animate>
								<p>Animotion</p>
							</Slide>

							<Slide animate>
								<p>🪄</p>
								<p>Animotion</p>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>

			<div class="absolute right-[20%] top-[42%] text-[64px]">
				<p>🪄</p>
				<p class="mt-8">Animotion</p>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-8 text-[42px]">
				<Code lang="svelte" lines="1-14|5,8,9">
					{`
						<Slide animate>
							<div class="flex h-full items-center justify-center gap-8">
								<div class="flex h-[600px] w-[800px] gap-4 p-4">

									<div class="h-full w-full bg-gray-700" />
									
									<div class="flex w-full flex-col gap-4">
										<div class="h-[50%] w-full bg-teal-300" />
										<div class="h-[50%] w-full bg-gray-700" />
									</div>
								
								</div>
							</div>
						</Slide>
					`}
				</Code>

				<div class="flex h-[600px] w-[800px] gap-4 p-4">
					<div data-id="box-1" class="h-full w-full rounded-md bg-gray-700" />
					<div class="flex w-full flex-col gap-4">
						<div
							data-id="box-2"
							class="h-[50%] w-full rounded-md bg-teal-300"
						/>
						<div
							data-id="box-3"
							class="h-[50%] w-full rounded-md bg-gray-700"
						/>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-8 text-[42px]">
				<Code lang="svelte" lines="5,8,9">
					{`
						<Slide animate>
							<div class="flex h-full items-center justify-center gap-8">
								<div class="flex h-[600px] w-[800px] gap-4 p-4">

									<div data-id="1" ... />
									
									<div class="flex w-full flex-col gap-4">
										<div data-id="2" ... />
										<div data-id="3" ... />
									</div>

								</div>
							</div>
						</Slide>
					`}
				</Code>

				<div class="flex h-[600px] w-[800px] gap-4 p-4">
					<div data-id="box-1" class="h-full w-full rounded-md bg-gray-700" />
					<div class="flex w-full flex-col gap-4">
						<div
							data-id="box-2"
							class="h-[50%] w-full rounded-md bg-teal-300"
						/>
						<div
							data-id="box-3"
							class="h-[50%] w-full rounded-md bg-gray-700"
						/>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center gap-8 text-[42px]">
				<Code lang="svelte" lines="3,7|1-14">
					{`
						<Slide animate>
							<div class="flex h-full items-center justify-center gap-8">
								<div class="flex h-[600px] w-[800px] flex-col gap-4 p-4">

									<div data-id="1" ... />
									
									<div class="flex h-[50%] w-full gap-4">
										<div data-id="2" ... />
										<div data-id="3" ... />
									</div>

								</div>
							</div>
						</Slide>
					`}
				</Code>

				<div class="flex h-full items-center justify-center gap-8">
					<div class="flex h-[600px] w-[800px] flex-col gap-4 p-4">
						<div
							data-id="box-1"
							class="h-[50%] w-full rounded-md bg-gray-700"
						/>
						<div class="flex h-[50%] w-full gap-4">
							<div data-id="box-2" class="w-full rounded-md bg-yellow-300" />
							<div data-id="box-3" class="w-full rounded-md bg-gray-700" />
						</div>
					</div>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- code blocks -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Code Blocks
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				class="flex h-full items-center justify-center gap-[280px] text-[48px]"
			>
				<Code class="left-[10%] w-[50%]" lang="svelte" lines="2-8">
					{`
						<Slide animate>
							<Code lang="svelte" lines="1,3|2">
								{\`
									<script>
										let count = 0
									<\/script>
								\`}
							</Code>
						</Slide>
					`}
				</Code>

				<Code class="w-[50%]" lang="svelte" lines="1,3|2">
					{`
						<script>
							let count = 0
						<\/script>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div
				class="flex h-full items-center justify-center gap-[280px] text-[48px]"
			>
				<Code class="left-[10%] w-[50%]" lang="svelte" lines="12-22">
					{`
						<Slide animate>
							<Code lang="svelte" lines="1,3|2">
								{\`
									<script>
										let count = 0
									<\/script>
								\`}
							</Code>
						</Slide>

						<Slide animate>
							<Code lang="svelte" lines="5-7|1-7">
								{\`
									<script>
										let count = 0
									<\/script>

									<button on:click={() => count += 1}>
										{count}
									</button>
								\`}
							</Code>
						</Slide>
					`}
				</Code>

				<Code class="w-[50%]" lang="svelte" lines="5-7|1-7">
					{`
						<script>
							let count = 0
						<\/script>

						<button on:click={() => count += 1}>
							{count}
						</button>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<!-- events -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
					Events
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center text-[64px]">
				<Code lang="svelte">
					{`
						<Slide>
							<!-- ... -->
						</Slide>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="flex h-full items-center justify-center text-[64px]">
				<Code lang="svelte" lines="1-11|7,8|7,8,2,3|1-11">
					{`
						<script>
							const enter = () => {}
							const leave = () => {}
						<\/script>

						<Slide
							on:in={enter}
							on:out={leave}
						>
							<!-- ... -->
						</Slide>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animateRestart>
		<Layout>
			<div class="h-center absolute text-[64px]">
				<Code lang="svelte" lines="1-10|2|2,5|2,5,8|2,5,8,9|1-10">
					{`
					<script>
						import { tweened } from 'svelte/motion'
						import { Presentation, Slide, Code } from '@components'
							
						let progress = tweened(0, { duration: 1500 })		
					<\/script>

					<Slide on:in={() => $progress = 100}>
						{$progress.toFixed(0)}%
					</Slide>
				`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide
		on:in={() => {
			setTimeout(() => {
				$progress = 100
			}, 600)
		}}
		on:out={() => {
			setTimeout(() => {
				progress.set(0, { duration: 0 })
			}, 600)
		}}
	>
		<Layout>
			<div class="grid h-full place-content-center">
				<p class="text-[128px]">
					{$progress.toFixed(0)}%
				</p>
			</div>
		</Layout>
	</Slide>

	<!-- bring your own layout -->
	<Slide animateRestart>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<Step class="w-[1000px] text-[64px] capitalize leading-[120%]">
					Bring your own layout
				</Step>
			</div>
		</Layout>
	</Slide>

	<Slide
		on:in={() =>
			setTimeout(() => {
				$scale = 1.5
			}, 1000)}
		on:out={() =>
			setTimeout(() => {
				scale.set(1, { duration: 0 })
			}, 1000)}
	>
		<Layout>
			<div
				data-id="layout"
				class="pattern h-center absolute grid place-content-center rounded-md border-4 border-[aqua]"
				style:width="{$width}px"
				style:height="{$height}px"
				style:scale={$scale}
			>
				<div class="text-[64px]">
					<span>{$width.toFixed()}</span>x<span>{$height.toFixed()}</span>
				</div>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-center absolute text-[56px]">
				<Code lang="ts" lines="1-16|2-4|5-7|8-9|10-11|12-13|14-15|1-16">
					{`
						const options = {
							// dimensions
							width: 960,
							height: 700,
							// controls
							controls: true,
							progress: true,
							// transition
							transition: 'slide',
							// layout
							disableLayout: false,
							// display mode
							display: 'block',
							// center slides
							center: true,
						}
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate>
		<Layout>
			<div class="h-center absolute text-[56px]">
				<Code lang="ts" lines="1-11|7-8|9-10|5-6|2-4|1-11">
					{`
						const options = {
							// controls
							controls: false,
							progress: false,
							// transition
							transition: 'fade',
							// layout
							disableLayout: true,
							// display mode
							display: 'grid',
						}
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="h-center absolute text-[56px]">
				<Code lang="svelte">
					{`
						<div class="relative h-[1080px] w-[1920px] overflow-hidden">
							<div class="h-full p-16">
								<slot />
							</div>
						</div>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide animate animateRestart>
		<Layout>
			<div class="h-center absolute text-[56px]">
				<Code lang="svelte" lines="1-11|2|2,7-9|1-11">
					{`
						<script>
							import Layout from './layout.svelte'
						<\/script>

						<Presentation>
							<Slide>
								<Layout>
									<!-- ... -->
								</Layout>
							</Slide>
						</Presentation>
					`}
				</Code>
			</div>
		</Layout>
	</Slide>

	<Slide
		on:in={() =>
			setTimeout(() => {
				$width = 1920
				$height = 1080
			}, 1000)}
		on:out={() => {
			setTimeout(() => {
				width.set(960, { duration: 0 })
				height.set(700, { duration: 0 })
			}, 1000)
		}}
	>
		<Layout>
			<div
				data-id="layout"
				class="pattern h-center absolute grid place-content-center rounded-md border-4 border-[aqua]"
				style:width="{$width}px"
				style:height="{$height}px"
			>
				<div class="text-[64px]">
					<span>{$width.toFixed()}</span>x<span>{$height.toFixed()}</span>
				</div>
			</div>
		</Layout>
	</Slide>

	<!-- get started -->
	<Slide>
		<Layout>
			<div class="flex h-full items-center justify-center gap-[100px]">
				<div>
					<Step class="w-[800px] text-[64px] capitalize leading-[120%]">
						Get started
					</Step>
					<Step class="mt-8 text-[64px]" fadeUp>
						<Code>
							{`
								npm create @animotion
							`}
						</Code>
					</Step>
				</div>
			</div>
		</Layout>
	</Slide>
</Presentation>

<style>
	.waveform {
		animation: waveform 2s ease both 1s;
	}

	@keyframes waveform {
		from {
			clip-path: polygon(0 0, 0 100%, 0% 100%, 0% 0);
		}
		to {
			clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
		}
	}
</style>

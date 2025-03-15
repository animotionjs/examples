<script lang="ts" module>
	import { sineInOut } from 'svelte/easing'

	type Options = {
		targetPosition: number
		duration?: number
	}

	function scroll(element: HTMLElement, { targetPosition, duration = 2000 }: Options) {
		const startPosition = element.scrollTop
		const distance = targetPosition - startPosition
		let startTime: number | null = null

		function animation(currentTime: number) {
			if (startTime === null) {
				startTime = currentTime
			}

			const timeElapsed = currentTime - startTime
			const progress = Math.min(1, timeElapsed / duration)
			element.scrollTop = startPosition + distance * sineInOut(progress)

			if (timeElapsed < duration) {
				requestAnimationFrame(animation)
			}
		}

		requestAnimationFrame(animation)
	}
</script>

<script lang="ts">
	type Props = {
		url: string
		width?: number
		height?: number
		time?: number
		class?: string
	}

	let { url, width = 1280, height = 720, time, ...props }: Props = $props()
	let previewEl: HTMLDivElement

	export function scrollTo(targetPosition: number, duration?: number) {
		scroll(previewEl, { targetPosition, duration })
	}

	export function scrollTop(duration?: number) {
		const scrollHeight = previewEl.scrollHeight - previewEl.clientHeight
		scroll(previewEl, { targetPosition: scrollHeight, duration })
	}

	export function scrollEnd(duration?: number) {
		const scrollHeight = previewEl.scrollHeight - previewEl.clientHeight
		scroll(previewEl, { targetPosition: scrollHeight, duration })
	}

	export function scrollIntoView() {
		previewEl.scrollIntoView({ behavior: 'smooth' })
	}
</script>

<div
	class={[
		'h-[800px] w-full overflow-hidden rounded-lg border border-neutral-800 shadow-md',
		props.class
	]}
>
	<div bind:this={previewEl} class="scrollbar-thin h-full w-full overflow-hidden">
		<img src="/api/preview?url={url}&width={width}&height={height}&time={time}" alt="screenshot" />
	</div>
</div>

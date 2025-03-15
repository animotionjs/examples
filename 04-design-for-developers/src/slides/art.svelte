<script lang="ts">
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'
	import { sfx } from '@lib/extras'

	const poster1 = signal({ opacity: 0, x: 50, y: 100 })
	const poster2 = signal({ opacity: 0, x: 50, y: 100 })

	const marker1 = signal({ opacity: 1, w: 0, h: 100, x: 36, y: 28 })
	const marker2 = signal({ opacity: 1, w: 0, h: 100, x: 36, y: 47 })
	const marker3 = signal({ opacity: 0, w: 0, h: 40, x: 22, y: 51 })

	const markerSfx = sfx('marker')

	async function intro() {
		await poster1.to({ opacity: 1, y: 50 })

		markerSfx.play({ duration: 700 })
		await marker1.to({ w: 340 }, { delay: 300 })

		markerSfx.play({ duration: 700 })
		await marker2.to({ w: 440 }, { delay: 300 })

		await all(
			marker1.to({ opacity: 0 }, { delay: 300 }),
			marker2.to({ opacity: 0 }, { delay: 300 }),
			poster1.to({ opacity: 0, y: 200 }, { delay: 1000 })
		)

		await poster2.to({ opacity: 1, y: 50 })
		markerSfx.play()
		await marker3.to({ opacity: 1, w: 950 })
	}

	async function outro() {
		await marker3.to({ opacity: 0 }, { duration: 0 })
		await poster2.to({ opacity: 0, y: 200 })
	}
</script>

<Slide>
	<div class="relative h-full">
		<Step on:in={intro} />
		<Step on:in={outro} />

		{#each [$marker1, $marker2, $marker3] as marker}
			<div
				class="absolute bg-[yellow] mix-blend-multiply z-10"
				style:width="{marker.w}px"
				style:height="{marker.h}px"
				style:left="{marker.x}%"
				style:top="{marker.y}%"
				style:opacity={marker.opacity}
			/>
		{/each}

		<img
			class="max-w-full absolute -translate-x-1/2 -translate-y-1/2 shadow-md rounded"
			alt="poster"
			src="design-is-not-art.jpg"
			style:opacity={$poster1.opacity}
			style:top="{$poster1.y}%"
			style:left="{$poster1.x}%"
		/>

		<img
			class="max-w-full absolute -translate-x-1/2 -translate-y-1/2 shadow-md rounded"
			alt="poster"
			src="utilitarian.png"
			style:opacity={$poster2.opacity}
			style:top="{$poster2.y}%"
			style:left="{$poster2.x}%"
		/>
	</div>
</Slide>

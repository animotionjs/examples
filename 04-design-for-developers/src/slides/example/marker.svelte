<script>
	import { Slide, Step } from '@components'
	import { signal } from '@motion'
	import { Marker } from '@extras'

	const image = signal({ y: 100 }, { duration: 1000 })

	const markerA = signal({ w: 0, h: 40, x: 40, y: 100 }, { duration: 1000 })
	const markerB = signal({ w: 0, h: 30, x: 360, y: 190 }, { duration: 1000 })
	const markerC = signal({ w: 0, h: 30, x: 40, y: 240 }, { duration: 1000 })

	async function highlight() {
		await image.to({ y: 0 })
		await markerA.to({ w: 540, h: 40, x: 40, y: 100 })
		await markerB.to({ w: 220, h: 30, x: 360, y: 190 })
		await markerC.to({ w: 140, h: 30, x: 40, y: 240 })
	}
</script>

<Slide animate>
	<Step on:in={highlight} />

	<Marker markers={[$markerA, $markerB, $markerC]}>
		<img
			class="max-w-[600px] block"
			alt="moon"
			src="https://www.osaarchivum.org/files/blog/8068/moon-2nyt%20jul%2021-1.jpg"
			style:translate="0px {$image.y}px"
		/>
	</Marker>
</Slide>

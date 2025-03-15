<script lang="ts">
	import { Slide, Step } from '@components'
	import { all, signal } from '@motion'
	import { scrambler, sfx } from '@extras'

	const poster1 = signal({ opacity: 0, t: 200, l: 30, r: null, b: null })
	const poster2 = signal({ opacity: 0, t: 200, l: null, r: -5, b: null })
	const poster3 = signal({ opacity: 0, t: 200, l: 50, r: null, b: null })

	const author1 = scrambler('Josef Müller-Brockmann (1959)')
	const author2 = scrambler('Josef Müller-Brockmann (1955)')
	const author3 = scrambler('Carlo Vivarelli (1958)')

	const counterSfx = sfx('counter', { vol: 0.01, duration: 2000 })

	$: posters = [
		{
			src: 'poster-1.jpg',
			author: $author1,
			style: $poster1,
		},
		{
			src: 'poster-2.jpg',
			author: $author2,
			style: $poster2,
		},
		{
			src: 'poster-3.jpg',
			author: $author3,
			style: $poster3,
		},
	]

	async function intro() {
		await poster1.to({ opacity: 1, t: 50 })
		counterSfx.play()
		await author1.scramble()

		await poster2.to({ opacity: 1, t: 50 })
		counterSfx.play()
		await author2.scramble()

		await all(
			poster1.to({ opacity: 0, l: -200 }, { duration: 800, delay: 1000 }),
			poster2.to({ opacity: 0, r: -200 }, { duration: 800, delay: 1000 })
		)

		await poster3.to({ opacity: 1, t: 50 })
		counterSfx.play()
		await author3.scramble()
	}

	async function outro() {
		await poster3.to({ opacity: 1, t: 200 })
		;[poster1, poster2, poster3].forEach((store) => store.reset())
	}
</script>

<Slide>
	<Step on:in={intro} />
	<Step on:in={outro} />

	<div class="relative h-full">
		{#each posters as { src, author, style }}
			<div
				class="absolute h-[800px] bg-white p-2 -translate-x-1/2 -translate-y-1/2 rounded shadow-md"
				style:opacity={style.opacity}
				style:top="{style.t}%"
				style:left="{style.l}%"
				style:right="{style.r}%"
				style:bottom="{style.b}%"
			>
				<img class="block w-full h-full" alt="poster" {src} />
				<p class="mt-8 font-mono text-2xl">{author}</p>
			</div>
		{/each}
	</div>
</Slide>

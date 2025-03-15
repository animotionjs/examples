<script lang="ts">
	import { Slide, Step } from '@components'
	import { signal } from '@motion'
	import { scrambler } from '@extras'

	const cardA = signal({ opacity: 0, scale: 0 })
	const cardB = signal({ opacity: 0, scale: 0 })
	const cardC = signal({ opacity: 0, scale: 0 })

	const textA = scrambler('first')
	const textB = scrambler('second')
	const textC = scrambler('third')

	$: cardsWithText = [
		{ card: $cardA, text: $textA },
		{ card: $cardB, text: $textB },
		{ card: $cardC, text: $textC },
	]

	async function showCards() {
		textA.scramble()
		await cardA.to({ opacity: 1, scale: 1 }, { duration: 800 })
		textB.scramble()
		await cardB.to({ opacity: 1, scale: 1 }, { duration: 800 })
		textC.scramble()
		await cardC.to({ opacity: 1, scale: 1 }, { duration: 800 })
	}
</script>

<Slide animate>
	<Step on:in={showCards} />

	<p class="font-bold text-6xl mt-8">🪄 Animotion</p>

	<div class="w-max flex gap-8 mt-16 mx-auto">
		{#each cardsWithText as { card, text }}
			<div style:opacity={card.opacity}>
				<div
					class="card w-[400px] h-[400px] bg-gray-700 grid place-items-center rounded shadow-md"
					style:scale={card.scale}
				/>
				<p class="mt-12 text-3xl font-mono">
					{text}
				</p>
			</div>
		{/each}
	</div>
</Slide>

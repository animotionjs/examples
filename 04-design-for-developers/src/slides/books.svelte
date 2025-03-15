<script lang="ts">
	import { fly, slide } from 'svelte/transition'
	import { cubicInOut } from 'svelte/easing'
	import { Slide, Step } from '@components'
	import { scrambler } from '@lib/extras'

	let step: 'start' | 'title' | 'books' = 'start'

	const title1 = scrambler('Refactoring UI')
	const title2 = scrambler('Design for hackers')
	const title3 = scrambler('Grid systems')

	$: books = [
		{
			title: $title1,
			cover: 'refactoring-ui.jpg',
		},
		{
			title: $title2,
			cover: 'design-for-hackers.jpg',
		},
		{
			title: $title3,
			cover: 'grid-systems.jpg',
		},
	]
</script>

<Slide>
	<Step on:in={() => (step = 'title')} />
	<Step
		on:in={() => {
			step = 'books'
			title1.scramble()
			title2.scramble()
			title3.scramble()
		}}
	/>
	<Step on:in={() => (step = 'start')} />

	{#if step === 'title'}
		<div class="h-full grid place-items-center">
			<div in:slide={{ duration: 1000, easing: cubicInOut }}>
				<p class="p-2 font-mono text-6xl capitalize">Books</p>
			</div>
		</div>
	{/if}

	{#if step === 'books'}
		<div class="h-full grid grid-cols-3 place-content-center">
			{#each books as book, i}
				<div
					in:fly|global={{ y: 400, duration: 1000, delay: i * 300 }}
					out:fly|global={{ y: 400, duration: 1000 }}
					class="grid place-items-center"
				>
					<img
						class="h-[600px] shadow-lg rounded"
						src={book.cover}
						alt="book"
					/>
					<p class="w-max mt-8 font-mono text-2xl capitalize">
						{book.title}
					</p>
				</div>
			{/each}
		</div>
	{/if}
</Slide>

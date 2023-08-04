<script lang="ts">
	type State = 'start' | 'playing' | 'paused' | 'gameover'

	const emoji = ['🔥', '🦄', '🍌', '💩']
	let cards = ['🔥', '💩', '🦄', '💩', '🍌', '🦄', '🍌', '🔥']
	let state: State = 'playing'
	let matches = []
	let selected = []
	let cardId = null

	function startGame() {
		state = 'playing'
	}

	function selectCard(card: string, id: number) {
		cardId = id
		selected = [...selected, card]
	}

	function match() {
		const [firstCard, secondCard] = selected

		if (firstCard === secondCard) {
			matches = [...matches, firstCard]
		}

		selected = []
	}

	function playAgain() {
		cards = [...emoji, ...emoji]
		state = 'playing'
		matches = []
		selected = []
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			switch (state) {
				case 'playing':
					state = 'paused'
					break
				case 'paused':
					state = 'playing'
					break
			}
		}
	}

	$: selected.length === 2 && match()
	$: matches.length === emoji.length &&
		setTimeout(() => {
			state = 'gameover'
		}, 1000)
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="game">
	{#if state === 'playing'}
		<div class="cards">
			{#each cards as card, id}
				{@const disabled = matches.includes(card)}
				{@const active = cardId === id}

				<button
					data-id={id}
					data-flip={active || disabled}
					class="card"
					class:active
					on:click={() => selectCard(card, id)}
					{disabled}
				>
					<div class="back">{card}</div>
				</button>
			{/each}
		</div>
	{/if}

	{#if state === 'gameover'}
		<button on:click={playAgain} class="btn">Play again</button>
	{/if}
</div>

<style>
	.game {
		height: 600px;
		display: grid;
		place-content: center;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
	}

	.card {
		width: 200px;
		height: 280px;
		display: grid;
		place-content: center;
		padding: 0px 40px;
		font-size: 80px;
		background-image: linear-gradient(
			45deg,
			hsl(220 10% 20%),
			hsl(220 10% 22%)
		);
		border: 1px solid hsl(220 10% 24%);
		border-radius: 16px;
		box-shadow: 1px 1px 10px hsl(220 10% 10% / 40%);
		user-select: none;
		cursor: pointer;
		transition:
			opacity 0.3s ease,
			transform 0.3s ease-out;
		transform-style: preserve-3d;
	}

	.card[data-flip='true'] {
		transform: rotateY(180deg);
		pointer-events: none;
	}

	.card .back {
		position: absolute;
		inset: 0;
		display: grid;
		place-content: center;
		backface-visibility: hidden;
	}

	.card .back {
		transform: rotateY(180deg);
	}

	.card[disabled] .back {
		opacity: 0.6;
	}

	.active {
		border: 4px solid aqua;
	}

	.btn {
		all: unset;
		display: block;
		padding: 1rem;
		font-size: 40px;
		text-transform: capitalize;
		font-weight: 600;
		cursor: pointer;
		color: black;
		background: white;
		border-radius: 4px;
	}
</style>

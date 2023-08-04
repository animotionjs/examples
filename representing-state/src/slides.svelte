<script lang="ts">
	import { Presentation, Slide, Code } from '@components'
	import Game from './game.svelte'
	import { wait } from '@lib/utils'
</script>

<Presentation>
	<!-- managing state -->
	<Slide animate>
		<p class="capitalize">Managing state</p>
	</Slide>

	<Slide animate>
		<p class="capitalize text-gray-400">Managing state</p>
		<p class="mx-auto mt-4 text-6xl capitalize">Avoiding spaghetti code</p>
		<img class="mx-auto mt-10 rounded-lg" src="charlie.gif" alt="GIF" />
	</Slide>

	<Slide
		on:in={() => {
			async function playGame() {
				const cards = [
					document.querySelector('[data-id="0"]'),
					document.querySelector('[data-id="7"]'),
					document.querySelector('[data-id="1"]'),
					document.querySelector('[data-id="3"]'),
					document.querySelector('[data-id="2"]'),
					document.querySelector('[data-id="5"]'),
					document.querySelector('[data-id="4"]'),
					document.querySelector('[data-id="6"]'),
				]

				for await (const card of cards) {
					// @ts-ignore
					card.click()
					await wait(800)
				}
			}

			setTimeout(() => playGame(), 600)
		}}
	>
		<Game />
	</Slide>

	<!-- booleans -->
	<Slide>
		<p>Booleans</p>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[340px]">
			<Code lang="ts">
				{`
					let playing = false
					let paused = false
					let gameOver = false
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[340px]">
			<p class="mb-8 capitalize">Implicit state</p>
			<Code lang="ts">
				{`
					// 2 possible states
					let playing = false
					// 2 possible states
					let paused = false
					// 2 possible states
					let gameOver = false
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[340px]">
			<p class="mb-8 capitalize">Impossible state</p>
			<Code lang="ts">
				{`
					let playing = true
					let gameOver = true
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<p class="mb-8 capitalize">State</p>
			<Code lang="html" lines="1,11|2|3|4|5|6|7|9|10|">
				{`
					<script>
						const emoji = ['🔥', '🦄', '🍌', '💩']
						let cards = shuffle([...emoji, ...emoji])
						let matches = []
						let selected = []
						let playing = false
						let paused = false

						$: selected.length === 2 && matchCards()
						$: gameOver = matches.length === emoji.length
					</\script>
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts" lines="1-3|5-7|9-17|19-23|25-32">
				{`
					function startGame() {
						playing = true
					}

					function selectCard(card) {
						selected = [...selected, card]
					}

					function matchCards() {
						const [firstCard, secondCard] = selected

						if (firstCard === secondCard) {
							matches = [...matches, firstCard]
						}

						selected = []
					}

					function playAgain() {
						cards = shuffle([...emoji, ...emoji])
						matches = []
						selected = []
					}

					function handleKeydown(e) {
						if (e.key === 'Escape') {
							// defensive programming
							if (playing) {
								paused = !paused
							}
						}
					}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="svelte" lines="1|3-7|9-11|13-26|28-32">
				{`
					<svelte:window on:keydown={handleKeydown} />

					{#if !playing}
						<button on:click={startGame}>
							Start game
						</button>
					{/if}

					{#if paused && !gameOver}
						<h1>Game paused</h1>
					{/if}

					{#if playing && !gameOver}
						<div class="cards">
							{#each cards as card}
								{@const disabled = matches.includes(card)}
								<button
									class="card"
									on:click={() => selectCard(card)}
									{disabled}
								>
									{card}
								</button>
							{/each}
						</div>
					{/if}

					{#if gameOver}
						<button on:click={playAgain}>
							Play again
						</button>
					{/if}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="mb-8 capitalize">Bad booleans represent state 👿</p>
	</Slide>

	<Slide animate>
		<p class="mb-8 capitalize text-gray-400">Bad booleans represent state 👿</p>
		<p class="mb-8 capitalize">Not all booleans are bad 😇</p>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<p class="mb-8 capitalize">Good booleans are derived from state</p>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<p class="mb-8 capitalize">Good booleans are derived from state</p>
			<div class="mx-auto w-[600px]">
				<Code lang="ts" lines="1|2|">
					{`
					let state = 'playing'
					let isPlaying = state === 'playing'
				`}
				</Code>
			</div>
		</div>
	</Slide>

	<!-- enums -->
	<Slide animate>
		<div class="mx-auto w-[400px]">
			<p class="mb-8 capitalize">Enums</p>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[340px]">
			<p class="mb-8 capitalize">Implicit state</p>
			<Code lang="ts">
				{`
					let playing = false
					let paused = false
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[900px]">
			<p class="mb-8 capitalize">Explicit state</p>
			<Code lang="ts">
				{`
					type State = 'start' | 'playing' | 'paused' | 'gameover'
					let state: State = 'start'
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[600px]">
			<p class="mb-8 capitalize">JavaScript object</p>
			<Code lang="ts">
				{`
					const state = {
					  START: 'start',
					  PLAYING: 'playing',
					  PAUSED: 'paused',
					  GAME_OVER: 'gameover',
					}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[600px]">
			<p class="mb-8 capitalize">TypeScript enum</p>
			<Code lang="ts">
				{`
					enum State {
					  'START' = 'start',
					  'PLAYING' = 'playing',
					  'PAUSED' = 'paused',
					  'GAME_OVER' = 'gameover',
					}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[700px]">
			<Code lang="ts" lines="2|7|15-22">
				{`
					function startGame() {
						state = 'playing'
					}

					function playAgain() {
						cards = shuffle([...emoji, ...emoji])
						state = 'playing'
						matches = []
						selected = []
					}

					function handleKeydown(e) {
						if (e.key === 'Escape') {
							// defensive programming
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
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[700px]">
			<Code lang="svelte" lines="1,5|7,9|11,24|26,30">
				{`
					{#if state === 'start'}
						<button on:click={startGame}>
							Start game
						</button>
					{/if}

					{#if state === 'paused'}
						<h1>Game paused</h1>
					{/if}

					{#if state === 'playing'}
						<div class="cards">
							{#each cards as card}
								{@const disabled = matches.includes(card)}
								<button
									class="card"
									on:click={() => selectCard(card)}
									{disabled}
								>
									{card}
								</button>
							{/each}
						</div>
					{/if}

					{#if state === 'gameover'}
						<button on:click={playAgain}>
							Play again
						</button>
					{/if}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<img class="mx-auto mt-10 rounded-lg" src="american-psycho.gif" alt="GIF" />
	</Slide>

	<!-- state machines -->
	<Slide animate>
		<p class="mb-8 capitalize">State Machines</p>
	</Slide>

	<Slide animate>
		<p class="mb-8 capitalize text-gray-400">State Machines</p>
		<p class="mb-8 capitalize">Event-driven state</p>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[600px] gap-4 text-left">
			<p class="mb-8 text-2xl">
				Model how a process goes from state to state when an event occurs.
			</p>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto flex gap-4 text-left">
			<div class="self-center text-2xl">
				<p class="mb-8 text-gray-400">
					Model how a process goes from state to state when an event occurs.
				</p>

				<p class="mb-8">
					Capture all the states, events and transitions between them.
				</p>
			</div>

			<div>
				<img class="rounded-lg" src="state-machine.jpg" alt="State machine" />
			</div>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto flex gap-4 text-left">
			<div class="self-center text-2xl">
				<p class="mb-8 text-gray-400">
					Model how a process goes from state to state when an event occurs.
				</p>

				<p class="mb-8 text-gray-400">
					Capture all the states, events and transitions between them.
				</p>

				<p class="mb-8">
					Easier to find impossible states and spot undesirable transitions.
				</p>
			</div>

			<div>
				<img class="rounded-lg" src="state-machine.jpg" alt="State machine" />
			</div>
		</div>
	</Slide>

	<Slide animate>
		<div class="h-[700px]">
			<iframe
				class="h-full w-full"
				src="https://stately.ai/registry/editor/f9e7fe59-2c1d-4543-a3e8-6412fac883bb?machineId=67be7f69-ee9e-45e6-a616-f8dcac61c983"
				title="Stately"
			/>
		</div>
	</Slide>

	<Slide animate>
		<p class="mb-8 capitalize">Reducer pattern</p>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts" lines="1|3,11|4|6-8|10|">
				{`
					import { writable } from 'svelte/store'

					export function useReducer(state, reducer) {
						const { update, subscribe } = writable(state)

						function dispatch(action) {
							update(state => reducer(state, action))
						}

						return [{ subscribe }, dispatch]
					}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts" lines="1|5|6|8|9|11-13|19-27">
				{`
						import { useReducer } from './store'

						function gameReducer(state, action) {
							switch (action.type) {
								case 'play':
									return { ...state, playing: true }
								case 'pause':
									return { ...state, playing: false }
								case 'select':
									// defensive programming
									if (state.playing) {
										// ...
									}
								default:
									throw new Error('Impossible state')
							}
						}

						const [state, dispatch] = useReducer(
							{
								playing: false,
								cards: [],
								matches: [],
								selected: [],
							},
							gameReducer
						)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts" lines="1|2">
				{`
					dispatch({ type: 'PLAY' }) // playing: true
					dispatch({ type: 'PAUSE' }) // playing: false
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<p class="mb-8 capitalize">Faux state machine 😎</p>
	</Slide>

	<Slide animate>
		<p class="mb-8 capitalize text-gray-400">Faux state machine 😎</p>
		<p class="mb-8 text-7xl">
			“You don't need a state machine, we have a state machine at home.”
		</p>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts" lines="1|3,11|4|6-8|10|">
				{`
				import { writable } from 'svelte/store'

				export function useMachine(machine, initial) {
					const state = writable(initial)

					function send(event) {
						state.update(state => machine(state, event))
					}

					return { state, send }
				}
			`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts" lines="1|3|4|5-8|9-23|24-27|28-32|33-35">
				{`
					import { useMachine } from './machine'

					function gameMachine(state, event) {
						switch (state) {
							case 'start':
								if (event.type === 'CLICK') {
									return 'playing'
								}
							case 'playing':
								if (event.type === 'ESCAPE') {
									return 'paused'
								}

								if (event.type === 'CLICK') {
									selectCard(event.data)
									selected.length === 2 && match()

									if (matches.length === emoji.length) {
										return 'gameover'
									}

									return 'playing'
								}
							case 'paused':
								if (event.type === 'ESCAPE') {
									return 'playing'
								}
							case 'gameover':
								if (event.type === 'CLICK') {
									resetGame()
									return 'playing'
								}
							default:
								return state
						}
					}
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[860px]">
			<Code lang="ts">
				{`
  				const { state, send } = useMachine(gameMachine, 'start')
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="svelte" lines="4|10|22-25|36">
				{`
					<script>
						// ...
						function handleKeydown(e) {
							e.key === 'Escape' && send({ type: 'ESCAPE' })
						}
					</\script>

					{#if $state === 'start'}
						<button
							on:click={() => send({ type: 'CLICK' })}
						>
							Start game
						</button>
					{/if}

					{#if $state === 'playing'}
						<div class="cards">
							{#each cards as card}
								{@const disabled = matches.includes(card)}
								<button
									class="card"
									on:click={() => send({
										type: 'CLICK',
										data: card
									})}
									{disabled}
								>
									{card}
								</button>
							{/each}
						</div>
					{/if}

					{#if $state === 'gameover'}
						<button
							on:click={() => send({ type: 'CLICK' })}
						>
							Play again
						</button>
					{/if}
				`}
			</Code>
		</div>
	</Slide>

	<!-- XState -->
	<Slide animate>
		<div class="mx-auto w-[800px]">
			<p class="mb-8 capitalize">XState</p>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<p class="mb-8 capitalize text-gray-400">XState</p>
			<p class="mb-8 text-5xl">🚧 You don't need a library 🚧</p>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[900px]">
			<Code
				lang="ts"
				lines="1-2|4|6-12|13|14-20|21-37|38-49|50-56|57-64|68|69-73|74-86|87-92|94|95-97|98-100|"
			>
				{`
					import { assign, createMachine } from 'xstate'
					import { useMachine } from '@xstate/svelte'

					const gameMachine = createMachine(
						{
							id: 'cards',
							initial: 'start',
							context: {
								cards: shuffle(emoji),
								matches: [],
								selected: [],
							},
							states: {
								start: {
									on: {
										CLICK: {
											target: 'playing',
										},
									},
								},
								playing: {
									always: [
										{
											target: 'gameover',
											cond: 'noCardsLeft',
										},
									],
									on: {
										ESCAPE: {
											target: 'paused',
										},
										CLICK: {
											target: 'checkGuesses',
											actions: 'selectCard',
										},
									},
								},
								checkGuesses: {
									always: [
										{
											target: 'playing',
											actions: 'match',
											cond: 'maxGuesses',
										},
										{
											target: 'playing',
										},
									],
								},
								paused: {
									on: {
										ESCAPE: {
											target: 'playing',
										},
									},
								},
								gameover: {
									on: {
										CLICK: {
											target: 'playing',
											actions: 'resetGame',
										},
									},
								},
							},
						},
						{
							actions: {
								selectCard: assign({
									selected(ctx, event) {
										return [...ctx.selected, event.data]
									},
								}),
								match: assign({
									matches(ctx) {
										const [firstCard, secondCard] = ctx.selected

										if (firstCard === secondCard) {
											ctx.matches = [...ctx.matches, firstCard]
										}

										ctx.selected = []

										return ctx.matches
									},
								}),
								resetGame: assign((ctx) => {
									ctx.cards = shuffle(emoji)
									ctx.matches = []
									ctx.selected = []
									return ctx
								}),
							},
							guards: {
								noCardsLeft(ctx) {
									return ctx.matches.length === 4
								},
								maxGuesses(ctx) {
									return ctx.selected.length === 2
								},
							},
						}
					)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate>
		<div class="mx-auto w-[800px]">
			<Code lang="ts">
				{`
					const { state, send } = useMachine(gameMachine)
				`}
			</Code>
		</div>
	</Slide>

	<Slide animate image="fin.jpg" />
</Presentation>

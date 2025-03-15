import { writable } from 'svelte/store'

type Options = {
	duration?: number
	fps?: number
}

function random() {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'
	const randomIndex = Math.floor(Math.random() * alphabet.length)
	return alphabet[randomIndex]
}

function shuffle(text: string) {
	return text
		.split('')
		.map(() => random())
		.join('')
}

export function scrambler(text: string, defaults: Options = {}) {
	const { subscribe, update } = writable(shuffle(text))

	function scramble(defaults: Options = {}) {
		const { duration = 2000, fps = 10 } = { ...defaults }
		const interval = 1000 / fps
		const start = performance.now()
		let then = start

		return new Promise((resolve) => {
			function loop(timestamp: number) {
				const elapsed = timestamp - then

				if (elapsed > interval) {
					then = timestamp - (elapsed % interval)
					const value = Math.round(
						((timestamp - start) / duration) * text.length
					)

					for (let i = value; i < text.length; i++) {
						update((word) => {
							let letters = word.split('')
							letters[i] = random()
							return letters.join('')
						})
					}

					for (let i = 0; i < value; i++) {
						update((word) => {
							let letters = word.split('')
							letters[i] = text[i]
							return letters.join('')
						})
					}
				}

				if (timestamp - start < duration) {
					requestAnimationFrame(loop)
				} else {
					resolve('finished')
				}
			}

			requestAnimationFrame(loop)
		})
	}

	return { subscribe, scramble }
}

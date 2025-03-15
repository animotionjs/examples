import { browser } from '$app/environment'

export function createSound(src: string, { volume = 1 } = {}) {
	if (!browser) return
	const sound = new Audio()
	sound.src = src
	sound.volume = volume
	return sound
}

export const beep = createSound('/beep.mp3')
export const click = createSound('/click.mp3')
export const cut = createSound('/cut.mp3', { volume: 0.5 })
export const glitch = createSound('/glitch.mp3', { volume: 0.2 })

type Options = {
	vol?: number
	duration?: number
}

export function sfx(sound: string, defaults: Options = {}) {
	const audio = new Audio(`${sound}.mp3`)

	function play(opts: Options = {}) {
		const { vol = 0.5, duration = 1000 } = { ...defaults, ...opts }

		audio.volume = vol
		audio.play()

		return new Promise((resolve, reject) => {
			audio.onended = resolve
			audio.onerror = reject

			setTimeout(() => {
				audio.pause()
				audio.currentTime = 0
				resolve('finished')
			}, duration)
		})
	}

	return { play }
}

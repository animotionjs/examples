<script lang="ts">
	import { URL } from 'svelte/reactivity'

	const url = new URL('https://joyofcode.xyz/')
	let editing: 'none' | 'hostname' | 'pathname' = $state('none')

	function type(word: string, fn: (text: string) => void) {
		const letters = word.split('')
		let text = ''

		const interval = setInterval(() => {
			if (letters.length === 0) {
				clearInterval(interval)
				setTimeout(() => (editing = 'none'), 200)
				return
			}
			text += letters[0]
			fn(text)
			letters.shift()
		}, 200)
	}

	export function hostname() {
		editing = 'hostname'
		type('svelte.dev', (text) => (url.hostname = text))
	}

	export function pathname() {
		editing = 'pathname'
		type('tutorial', (text) => (url.pathname = text))
	}
</script>

<div
	class="grid place-content-center rounded-2xl border-t border-neutral-800 bg-neutral-900 p-8 shadow-2xl"
>
	<div class="grid gap-4 text-left">
		<span class="text-2xl opacity-80">href</span>
		<input
			bind:value={url.href}
			class="rounded-lg border-0 border-t-2 border-white bg-gray-200 p-4 font-sans text-2xl font-semibold shadow-2xl"
		/>

		<span class="text-2xl opacity-80">protocol</span>
		<input
			bind:value={url.protocol}
			class="rounded-lg border-0 border-t-2 border-white bg-gray-200 p-4 font-sans text-2xl font-semibold shadow-2xl"
		/>

		<span class="text-2xl opacity-80">hostname</span>
		<input
			bind:value={url.hostname}
			class="rounded-lg border-0 border-t-2 border-white bg-gray-200 p-4 font-sans text-2xl font-semibold shadow-2xl"
			data-editing={editing === 'hostname'}
		/>

		<span class="text-2xl opacity-80">pathname</span>
		<input
			bind:value={url.pathname}
			class="rounded-lg border-0 border-t-2 border-white bg-gray-200 p-4 font-sans text-2xl font-semibold shadow-2xl"
			data-editing={editing === 'pathname'}
		/>
	</div>
</div>

<style>
	[data-editing] {
		transition: outline 0.3s ease;
	}

	[data-editing='false'] {
		outline: 4px solid transparent;
	}

	[data-editing='true'] {
		outline: 4px solid aqua;
	}
</style>

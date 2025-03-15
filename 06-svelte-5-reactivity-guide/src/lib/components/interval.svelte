<script lang="ts">
	let count = $state(0)
	let millis = $state(1000)
	let countEl: HTMLHeadingElement
	let slowerEl: HTMLButtonElement
	let fasterEl: HTMLButtonElement

	$effect(() => {
		const interval = setInterval(() => count++, millis)
		return () => {
			countEl.animate({ scale: 1.4 }, { duration: 200, easing: 'linear' })
			clearInterval(interval)
		}
	})

	function playMouseClick() {
		const click = new Audio('assets/clack.mp3')
		click.volume = 0.2
		click.play()
	}

	function mouseClick(el: HTMLButtonElement) {
		el.animate({ scale: 0.94 }, { duration: 200, easing: 'ease-out' })
	}

	export function slower() {
		slowerEl.click()
		mouseClick(slowerEl)
		playMouseClick()
	}

	export function faster() {
		fasterEl.click()
		mouseClick(fasterEl)
		playMouseClick()
	}
</script>

<div
	class="grid h-[660px] w-[600px] place-content-center rounded-2xl border-t border-neutral-800 bg-neutral-900 p-24 shadow-2xl"
>
	<h1 bind:this={countEl} class="font-mono text-9xl drop-shadow-sm">{count}</h1>

	<div class="mt-8 flex gap-8">
		<button
			bind:this={slowerEl}
			onclick={() => (millis *= 2)}
			class="rounded-2xl border-0 border-t-2 border-white bg-gray-200 p-4 font-mono text-2xl font-semibold shadow-2xl"
		>
			<span class="drop-shadow-sm">slower</span>
		</button>
		<button
			bind:this={fasterEl}
			onclick={() => (millis /= 2)}
			class="rounded-2xl border-0 border-t-2 border-white bg-gray-200 p-4 font-mono text-2xl font-semibold shadow-2xl"
		>
			<span class="drop-shadow-sm">faster</span>
		</button>
	</div>
</div>

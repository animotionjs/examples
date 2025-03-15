<script lang="ts">
	let count = $state(0)
	let double = $derived(count * 2)
	let logs = $state([
		{ count: 1, double: 0 },
		{ count: 2, double: 2 },
		{ count: 3, double: 4 },
		{ count: 4, double: 6 }
	])
	let counter: HTMLButtonElement

	export async function log() {
		const click = new Audio('assets/clack.mp3')
		click.volume = 0.2

		const interval = setInterval(() => {
			if (count < 4) {
				click.play()
				count++
				counter.animate({ scale: 0.94 }, { duration: 200, easing: 'ease-out' })
			} else {
				clearInterval(interval)
			}
		}, 600)
	}

	export function update() {
		count = 0
		logs = [
			{ count: 1, double: 2 },
			{ count: 2, double: 4 },
			{ count: 3, double: 6 },
			{ count: 4, double: 8 }
		]
	}
</script>

<div class="grid grid-rows-2 overflow-hidden rounded-2xl border-t-1 border-neutral-800 shadow-2xl">
	<div class="grid place-content-center bg-neutral-900">
		<button
			bind:this={counter}
			class="h-[80px] w-[100px] rounded-2xl border-0 border-t-2 border-white bg-gray-200 font-mono text-4xl font-semibold shadow-2xl"
		>
			<div class="mt-1">{double}</div>
		</button>
	</div>

	<div class="border-t-1 border-neutral-700 bg-neutral-800 text-left font-mono">
		{#each logs as log, i}
			<p
				class:opacity-0={log.count > count}
				class:opacity-100={log.count < count}
				class:border-b={i !== logs.length - 1}
				class:border-neutral-700={i !== logs.length - 1}
				class="p-6 text-[20px] transition-opacity duration-300"
			>
				&#9658; &#123; <span class="opacity-80">count</span>:
				<span class="text-[aqua]">{log.count}</span>,
				<span class="opacity-80">double</span>:
				<span class="text-[aqua]">{log.double}</span> &#125;
			</p>
		{/each}
	</div>
</div>

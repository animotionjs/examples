<script lang="ts">
	import { Action, Slide, Transition } from '@animotion/core'
	import { Iframe } from '$lib/components'
	import { fly } from 'svelte/transition'

	let hidden = $state(true)
</script>

<Slide class="center">
	<Transition>
		<div class="stack overflow-hidden">
			{#if hidden}
				<div transition:fly={{ y: 1000, duration: 1000 }}>
					<Iframe src="https://threlte.xyz/docs/reference/core/getting-started" />
				</div>
			{:else}
				<div transition:fly={{ y: 1000, duration: 1000 }}>
					<Iframe src="https://www.theatrejs.com/" />
				</div>
			{/if}
		</div>
	</Transition>

	<Action do={() => (hidden = false)} />
	<Action do={() => (hidden = true)} />
</Slide>

<Slide>
	<!-- ... -->
</Slide>

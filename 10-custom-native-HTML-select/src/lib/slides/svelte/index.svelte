<script lang="ts">
	import { Action, Slide } from '@animotion/core'
	import { Preview } from '$lib/components'

	let preview: ReturnType<typeof Preview>
</script>

<Slide>
	<!-- ... -->
</Slide>

<Slide class="center">
	<Preview
		bind:this={preview}
		class="h-[920px]"
		width={1400}
		url="https://github.com/sveltejs/svelte/issues/15617"
	/>
	<Action do={() => preview.scrollEnd(8000)} />
</Slide>

<Slide>
	<!-- ... -->
</Slide>

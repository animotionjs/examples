<script lang="ts">
	import { Presentation } from '@animotion/core'

	import Intro from '$lib/slides/introduction/index.svelte'
	import Basics from '$lib/slides/basics/index.svelte'
	import Extras from '$lib/slides/extras/index.svelte'
	import Three from '$lib/slides/three/index.svelte'
	import Tweakpane from '$lib/slides/tweakpane/index.svelte'
	import Assets from '$lib/slides/assets/index.svelte'
	import Closing from '$lib/slides/closing.svelte'
	import Credits from '$lib/slides/credits.svelte'
</script>

<Presentation options={{ history: true, transition: 'slide', controls: false, progress: false }}>
	<Intro />
	<Basics />
	<Three />
	<Extras />
	<Tweakpane />
	<Assets />
	<Closing />
	<Credits />
</Presentation>

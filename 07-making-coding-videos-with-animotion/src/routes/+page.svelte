<script lang="ts">
	import { Presentation } from '@animotion/core'

	import Intro from './slides/intro.svelte'
	import Basics from './slides/basics.svelte'
	import Transitions from './slides/transitions.svelte'
	import Layout from './slides/layout.svelte'
	import Code from './slides/code.svelte'
	import Actions from './slides/actions.svelte'
	import Motion from './slides/motion.svelte'
	import Setup from './slides/setup.svelte'
	import Kit from './slides/kit.svelte'
	import Recording from './slides/recording.svelte'
	import Patreon from './slides/patreon.svelte'
</script>

<Presentation options={{ transition: 'zoom', hideCursorTime: 0, controls: false, progress: false }}>
	<Intro />
	<Basics />
	<Transitions />
	<Layout />
	<Code />
	<Actions />
	<Motion />
	<Kit />
	<Recording />
	<Setup />
	<Patreon />
</Presentation>

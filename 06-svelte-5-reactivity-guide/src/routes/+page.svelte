<script lang="ts">
	import { Presentation } from '@animotion/core'
	import type Reveal from 'reveal.js'

	import Intro from './slides/intro.svelte'
	import Reactivity from './slides/reactivity.svelte'
	import Gotchas from './slides/gotchas.svelte'
	import Runes from './slides/runes.svelte'
	import Symbols from './slides/symbols.svelte'
	import Universal from './slides/universal.svelte'
	import Nested from './slides/nested.svelte'
	import Patterns from './slides/patterns.svelte'
	import Props from './slides/props.svelte'
	import Inspect from './slides/inspect.svelte'
	import Svecosystem from './slides/svecosystem.svelte'
	import Outro from './slides/outro.svelte'

	const options: Reveal.Options = {
		display: 'grid',
		disableLayout: true,
		transition: 'zoom',
		controls: false,
		progress: false,
		hash: false,
		hideCursorTime: 0
	}
</script>

<Presentation {options}>
	<Intro />
	<Reactivity />
	<Gotchas />
	<Runes />
	<Symbols />
	<Universal />
	<Nested />
	<Patterns />
	<Props />
	<Inspect />
	<Svecosystem />
	<Outro />
</Presentation>

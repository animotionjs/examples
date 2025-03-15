<script lang="ts">
	import { Presentation } from '@components'
	import { options } from '@layout'

	import Intro from './slides/intro.svelte'
	import Design from './slides/design.svelte'
	// import Art from './slides/art.svelte'
	import Utilitarian from './slides/utilitarian.svelte'
	import Principles from './slides/principles.svelte'
	import Contrast from './slides/contrast.svelte'
	import Text from './slides/text.svelte'
	import Repetition from './slides/repetition.svelte'
	import Alignment from './slides/alignment.svelte'
	import Rules from './slides/rules.svelte'
	import Proximity from './slides/proximity.svelte'
	import Typography from './slides/typography.svelte'
	import Color from './slides/color.svelte'
	import Layout from './slides/layout.svelte'
	import Books from './slides/books.svelte'
	import Patreon from './slides/patreon.svelte'

	$options = { outline: false }
</script>

<Presentation>
	<Intro />
	<Design />
	<Utilitarian />
	<Principles />
	<Contrast />
	<Text />
	<Repetition />
	<Alignment />
	<Rules />
	<Proximity />
	<Typography />
	<Color />
	<Layout />
	<Books />
	<Patreon />
</Presentation>

<!-- <style>
	.code {
		padding: 1rem;
		background-color: var(--r-background-color);
		border-top: 1px solid hsl(226 19% 18%);
		border-left: 1px solid hsl(226 19% 18%);
		border-radius: 8px;
		box-shadow:
			1px 1px 20px hsla(226 19% 0% / 40%),
			1px 1px 40px hsla(226 19% 0% / 20%);
	}
</style> -->

<script lang="ts">
	import { Presentation } from '@animotion/core'

	import Intro from '$lib/slides/intro.svelte'
	import Components from '$lib/slides/components.svelte'
	import Styled from '$lib/slides/styled/styled.svelte'
	import Bits from '$lib/slides/bits/index.svelte'
	import Styling from '$lib/slides/styling/index.svelte'
	import Transitions from '$lib/slides/transitions/index.svelte'
	import ReusableComponents from '$lib/slides/reusable-components/index.svelte'
	import Resources from '$lib/slides/resources.svelte'
	import Credits from '$lib/slides/credits.svelte'
</script>

<Presentation options={{ history: true, transition: 'slide', controls: false, progress: false }}>
	<Intro />
	<Components />
	<Styled />
	<Bits />
	<Styling />
	<Transitions />
	<ReusableComponents />
	<Resources />
	<Credits />
</Presentation>

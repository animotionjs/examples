<script lang="ts">
	import { Presentation } from '@animotion/core'

	import Intro from '$lib/slides/intro/index.svelte'
	import RegularSelect from '$lib/slides/regular-select/index.svelte'
	import CustomSelect from '$lib/slides/custom-select/index.svelte'
	import Svelte from '$lib/slides/svelte/index.svelte'
	import Credits from '$lib/slides/credits/index.svelte'
</script>

<Presentation options={{ history: true, transition: 'slide', controls: false, progress: false }}>
	<Intro />
	<RegularSelect />
	<CustomSelect />
	<Svelte />
	<Credits />
</Presentation>

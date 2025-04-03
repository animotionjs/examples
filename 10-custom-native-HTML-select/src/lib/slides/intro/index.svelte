<script lang="ts">
	import { Slide } from '@animotion/core'
	import { Preview, Title } from '$lib/components'
	import CustomSelect from './custom-select.svelte'

	let preview: ReturnType<typeof Preview>
</script>

<Slide>
	<!-- ...  -->
</Slide>

<Slide class="center">
	<CustomSelect />
</Slide>

<Slide class="center">
	<div class="overflow-hidden rounded-lg bg-white shadow-md">
		<div class="scrollbar h-[800px] overflow-y-scroll rounded-lg">
			<img class="rounded-lg" src="assets/customizable-select.png" width={1400} alt="preview" />
		</div>
	</div>
</Slide>

<Slide class="center">
	<div class="grid gap-8">
		<img
			width="200"
			src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png"
			alt="Google Chrome logo"
		/>
		<Title>135+</Title>
	</div>
</Slide>

<Slide>
	<!-- ... -->
</Slide>

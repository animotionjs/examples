<script>
	import { Select } from 'flowbite-svelte'

	let items = [
		{ value: 1, name: 'React' },
		{ value: 2, name: 'Solid' },
		{ value: 3, name: 'Svelte' },
		{ value: 4, name: 'Vue' }
	]
	let selected = $state(3)
</script>

<div class="dark w-[400px]">
	<Select class="text-[18px]" bind:value={selected} {items} />
</div>

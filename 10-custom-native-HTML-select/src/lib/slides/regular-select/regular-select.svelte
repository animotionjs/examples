<script lang="ts">
	let { step } = $props()
</script>

{#if step >= 1}
	<select class="text-[32px] shadow-md">
		<option value="">🔥 Hot frameworks</option>
		<hr />
		<option value="angular">🅰️ Angular</option>
		<option value="react">⚛️ React</option>
		<option value="solid">🚀 Solid</option>
		<option value="svelte">⚡️ Svelte</option>
		<option value="vue">✨ Vue</option>
	</select>
{/if}

{#if step === 2}
	<style>
		select {
			appearance: none;
			font: inherit;
			padding: 1rem;
			border: none;
			border-radius: 1rem;
			background-color: #222;
			line-height: 1.6;

			&:open {
				background-color: #444;
			}

			option {
				background-color: #444;
			}
		}
	</style>
{/if}

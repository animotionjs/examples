<script lang="ts">
	import { angular, react, solid, svelte, vue } from '$lib/icons/index.svelte'
	import Final from './final.svelte'

	let { step } = $props()
</script>

{#snippet selected()}
	<button>
		<selectedcontent></selectedcontent>
		<span class="picker">👇️</span>
	</button>
{/snippet}

{#if step === 1}
	<select class="text-[32px] shadow-md">
		<option value="">🔥 Hotest framework</option>
		<hr />
		<option value="angular">{@render angular()}</option>
		<option value="react">{@render react()}</option>
		<option value="solid">{@render solid()}</option>
		<option value="svelte">{@render svelte()}</option>
		<option value="vue">{@render vue()}</option>
	</select>
{/if}

{#if step === 2}
	<select class="text-[32px] shadow-md">
		{@render selected()}
		<option value="angular">{@render angular()}</option>
		<option value="react">{@render react()}</option>
		<option value="solid">{@render solid()}</option>
		<option value="svelte">{@render svelte()}</option>
		<option value="vue">{@render vue()}</option>
	</select>
{/if}

{#if step === 3}
	<select class="text-[32px] shadow-md">
		{@render selected()}
		<option value="angular">{@render angular()}</option>
		<option value="react">{@render react()}</option>
		<option value="solid">{@render solid()}</option>
		<option value="svelte">{@render svelte()}</option>
		<option value="vue">{@render vue()}</option>
	</select>

	<style>
		select {
			min-inline-size: 14ch;
			justify-content: space-between;

			&,
			&::picker(select) {
				appearance: base-select;
			}
		}
	</style>
{/if}

{#if step === 4}
	<select class="text-[32px] shadow-md">
		{@render selected()}
		<option value="angular">{@render angular()}</option>
		<option value="react">{@render react()}</option>
		<option value="solid">{@render solid()}</option>
		<option value="svelte">{@render svelte()}</option>
		<option value="vue">{@render vue()}</option>
	</select>

	<style>
		select {
			min-inline-size: 14ch;
			justify-content: space-between;

			&,
			&::picker(select) {
				appearance: base-select;
				padding: 1rem;
				border: none;
				border-radius: 1rem;
				background-color: #222;
				line-height: 1.6;
			}
		}
	</style>
{/if}

{#if step === 5}
	<select class="text-[32px] shadow-md">
		{@render selected()}
		<option value="angular">{@render angular()}</option>
		<option value="react">{@render react()}</option>
		<option value="solid">{@render solid()}</option>
		<option value="svelte">{@render svelte()}</option>
		<option value="vue">{@render vue()}</option>
	</select>

	<style>
		select {
			min-inline-size: 14ch;
			justify-content: space-between;

			&,
			&::picker(select) {
				appearance: base-select;
				padding: 1rem;
				border: none;
				border-radius: 1rem;
				background-color: #222;
				line-height: 1.6;
			}

			&::picker(select) {
				margin-block-start: 0.5rem;
			}

			&::picker-icon {
				display: none;
			}

			.picker {
				transition: rotate 0.3s ease;

				:open & {
					rotate: 90deg;
				}
			}
		}
	</style>
{/if}

{#if step === 6}
	<Final />
{/if}

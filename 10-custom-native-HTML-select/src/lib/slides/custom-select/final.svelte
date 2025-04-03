<script lang="ts">
	import { angular, react, solid, svelte, vue } from '$lib/icons/index.svelte'
</script>

{#snippet selected()}
	<button>
		<selectedcontent></selectedcontent>
		<span class="picker">👇️</span>
	</button>
{/snippet}

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
		--spring-easing: linear(
			0,
			0.009,
			0.035 2.1%,
			0.141,
			0.281 6.7%,
			0.723 12.9%,
			0.938 16.7%,
			1.017,
			1.077,
			1.121,
			1.149 24.3%,
			1.159,
			1.163,
			1.161,
			1.154 29.9%,
			1.129 32.8%,
			1.051 39.6%,
			1.017 43.1%,
			0.991,
			0.977 51%,
			0.974 53.8%,
			0.975 57.1%,
			0.997 69.8%,
			1.003 76.9%,
			1.004 83.8%,
			1
		);

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

		:global(selectedcontent > *) {
			transition:
				translate 1s var(--spring-easing),
				opacity 1s;

			@starting-style {
				opacity: 0;
				translate: 0% 100%;
			}
		}
	}
</style>

<script lang="ts">
	import { Accordion } from 'bits-ui'
</script>

<div class="text-left text-[32px]">
	<Accordion.Root type="single">
		<Accordion.Item>
			<Accordion.Header>
				<Accordion.Trigger class="text-white">
					<span>👉️</span>
					<span>Title A</span>
				</Accordion.Trigger>
			</Accordion.Header>

			<Accordion.Content>
				<div>Content A</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
</div>

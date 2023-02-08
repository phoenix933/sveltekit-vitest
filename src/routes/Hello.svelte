<script lang="ts">
	import { onMount } from "svelte"

	let showMessage = false

	onMount(() => {
		showMessage = true
	})
</script>

{#if showMessage}
	<div>
		Hello
	</div>
{/if}

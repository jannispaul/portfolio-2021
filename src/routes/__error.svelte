<script context="module">
	export function load({ error, status }) {
		return {
			props: {
				status: status,
				message: error.message
			}
		};
	}
</script>

<script>
	export let status;
	export let message;
	import Contact from '/src/components/sections/contact.svelte';
</script>

<section>
	<div class="error-container">
		<h1>{status}</h1>
		<p>{message}</p>
		{#if status === 404}
			<p>This page doesn’t exist anymore.</p>
		{/if}
	</div>
	<Contact tagline="Please let me know" />
</section>

<style>
	h1 {
		font-size: 8rem;
	}
	.error-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>

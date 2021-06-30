<script>
	import Accordeon from '/src/components/accordeon.svelte';
</script>

<section id="faq">
	<div class="faq-container">
		<h2 class="faq-headline">FAQ</h2>
		<Accordeon />
	</div>
</section>

<style>
	section {
		max-width: var(--max-width);
	}
</style>

<script>
	import arrow from '/static/images/arrow-2.svg';
	import Accordeon from '/src/components/accordeon.svelte';
</script>

<section id="faq">
	<div class="faq-container">
		<h2 class="faq-headline">Got questions?<br />I got answers</h2>
		<img src={arrow} alt="" class="desktop-only arrow" />
		<Accordeon />
	</div>
</section>

<style>
section {
			padding-top: 1rem;
			padding-bottom: 4rem;
		}
	@media (min-width: 769px) {
		section {
			display: flex;
			place-items: center;
			min-height: 90vh;
		}
		.faq-container {
			margin: auto;
			max-width: 50rem;
			display: grid;
			grid-template-columns: 1fr 2fr;
		}
		.faq-headline {
			grid-column: 1/3;
			grid-row: 1;
		}
		.arrow {
			grid-column: 1;
			grid-row: 2;
		}
	}
</style>

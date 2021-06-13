<script>
</script>

<header>
	<a href="/">
		<!-- <img src={logo} alt="SvelteKit" /> -->
		Jannis Paul Wicke
	</a>
	<a href="mailto:hi@paul-wicke.de" class="mobile-only">Contact</a>
	<a href="mailto:hi@paul-wicke.de" class="desktop-only">hi@paul-wicke.de</a>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		max-width: var(--max-width);
		margin: auto;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	@media (min-width: 769px) {
		header {
			padding: 4rem;
		}
	}
</style>

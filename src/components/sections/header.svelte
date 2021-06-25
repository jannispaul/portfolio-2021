<script>
</script>

<header>
	<a href="/">
		<!-- <img src={logo} alt="SvelteKit" /> -->
		Jannis Paul Wicke
	</a>
	<nav>
		<a href="#about">About</a>
		<a href="#selected-work">Selected Work</a>
		<a href="#faq">FAQ</a>
		<a href="#contact">Contact</a>
		<a href="#archive">Archive</a>
	</nav>

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
	nav {
		display: none;
	}
	nav > a:not(:last-of-type) {
		margin-right: 1rem;
	}
	@media (min-width: 769px) {
		header {
			padding: 4rem;
		}
		nav {
			display: inline-block;
		}
	}
</style>

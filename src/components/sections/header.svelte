<script>
</script>

<header>
	<a href="/"> Jannis Paul Wicke </a>
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
	nav > a {
		position: relative;
	}
	nav > a::before {
		content: ' ';
		position: absolute;
		bottom: -0.1rem;
		width: 100%;
		left: 0;
		background: var(--color-white);
		height: 0.1rem;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 200ms cubic-bezier(0.54, 0.17, 0.23, 0.97);
	}
	nav > a:hover::before,
	nav > a:focus::before,
	nav > a:active::before {
		visibility: visible;
		transform: scaleX(1);
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

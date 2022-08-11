<footer>
	<div class="footer-container">
		<a href="/imprint">Imprint</a>
		<p>2022</p>
	</div>
</footer>

<style>
	footer {
		padding: 0 var(--side-padding);
		margin-bottom: 1rem;
	}
	a:hover {
		text-decoration: underline;
	}
	.footer-container {
		display: flex;
		justify-content: space-between;
		border-top: 1px solid var(--color-white);
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}
	/* Responsive styles */
	@media (min-width: 769px) {
		footer {
			margin-bottom: 2rem;
		}
	}
</style>

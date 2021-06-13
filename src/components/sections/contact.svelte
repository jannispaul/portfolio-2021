<section id="contact">
	<h2 class="contact-headline">Are you ready?</h2>
	<a href="mailto:hi@paul-wicke.de" class="contact-link">hi@paul-wicke.de</a>
</section>

<style>
section {
			padding-top: 1rem;
			padding-bottom: 4rem;
		}
	.contact-link {
		display: block;
		margin-bottom: 2rem;
		font-size: 2.3rem;
		font-family: serif;
		font-style: italic;
		font-weight: 300;
		color: var(--color-bg);
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: var(--color-white);
		transition: all 200ms ease;
	}
	.contact-link:hover {
		color: var(--color-white);
		/* mix-blend-mode: color;  */
	}

	@media (min-width: 769px) {
		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-height: 40vh;
			padding-bottom: 8rem;
		}
		.contact-headline,
		.contact-link {
			font-size: 5rem;
			text-align: center;
		}
	}
</style>

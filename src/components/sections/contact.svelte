<script>	
	export let tagline = "Are you ready?";
</script>
<section id="contact">
	<h2 class="contact-headline">{tagline}</h2>
	<a href="mailto:hi@paul-wicke.de" class="contact-link" data-text="hi@paul-wicke.de">
		hi@paul-wicke.de
		<span class="outer" aria-hidden="true">
			<span class="inner"> hi@paul-wicke.de </span>
		</span>
	</a>
</section>

<style>
	section {
		padding-top: 8rem;
		padding-bottom: 8rem;
	}
	.contact-headline {
		font-family: 'Verona Serial';
		text-transform: none;
		font-size: 1.875rem;
		line-height: 1;
		margin-bottom: 0;
	}
	.contact-link {
		display: block;
		font-family: 'Verona Serial';
		font-size: 2.3rem;
		font-family: serif;
		font-weight: 300;
		-webkit-text-fill-color: transparent;
		-webkit-text-stroke: clamp(0.5px, 0.05rem, 3px) currentColor;
		transition: all 200ms ease;
		overflow: hidden;
	}
	.outer {
		display: none;
	}

	@media (min-width: 769px) {
		section {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 40vh;
			padding-bottom: 8rem;
		}
		.contact-headline {
			font-size: 3rem;
		}
		.contact-link {
			font-size: 5rem;
			position: relative;
			display: inline-block;
		}
		/* Text fill animation */
		.outer {
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			overflow: hidden;
			-webkit-text-fill-color: var(--color-white);
			transform: translateY(100%);
		}
		.inner {
			display: inline-block;
			transform: translateY(-100%);
		}
		.outer,
		.inner {
			transition: transform 500ms cubic-bezier(0.3, 0.7, 0.7, 1.05);
		}

		a:hover .outer,
		a:hover .inner {
			transform: none;
		}
	}
</style>

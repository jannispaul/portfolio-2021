<script>
	import underline from '/static/images/hero-underline.svg';
</script>

<section>
	<div class="hero-content">
		<h1>Bold websites that simply work</h1>
	</div>
	<img src={underline} alt="decorative underline" class="underline desktop-only" />
</section>

<style>
	section {
		position: relative;
		min-height: calc(60vh - 4rem);
		display: flex;
		align-items: flex-end;
		margin-bottom: 5rem;
		/* padding-top: calc(90vh - 22ch); */
		/* margin: 0 auto 5rem;
		max-width: var(--max-width); */
		pointer-events: none;
	}
	@media (min-width: 769px) {
		section {
			height: calc(100vh - 15rem);
		}
		.hero-content {
			width: 100%;
			max-width: var(--max-width);
			/* margin: auto; */
		}
		.anchor-links > a {
			margin-right: 1rem;
		}
		.underline {
			position: absolute;
			left: 12rem;
			bottom: -2rem;
			height: 4rem;
		}
	}
</style>

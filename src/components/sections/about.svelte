<script>
	import portrait from '/static/images/protrait.jpg';
	import line from '/static/images/line.svg';
</script>

<section id="about">
	<div class="about-container">
		<img src={portrait} alt="Portrait of a young man" class="portrait" />
		<div class="about-content">
			<h2>Who am I?</h2>
			<p>
				I’m Jannis and I create websites that are both elegant and effective. With over a decade of
				experience, my skills span a wide array of disciplines that seamlessly combine design and
				tech. Based in Berlin, I work with people and businesses around the world. If you want a
				website and are looking for a smooth ride from concept to development and beyond, I’m your
				guy.
			</p>
		</div>
		<img src={line} alt="" class="desktop-only about-line" />
	</div>
</section>

<style>
	section {
		position: relative;
		margin-bottom: 2rem;
		padding-top: 2rem;
		padding-bottom: 4rem;
	}
	.about-container {
		position: relative;
		max-width: 40rem;
		margin: auto;
	}
	.about-content {
		padding-top: 13rem;
		position: inherit;
		z-index: 1;
		max-width: 30rem;
	}
	.portrait {
		z-index: 0;
		position: absolute;
		right: var(--side-padding);
		width: 12rem;
		border-radius: 500rem;
	}
	.about-line {
		position: absolute;
		top: -1rem;
		right: 2rem;
	}
	@media (min-width: 769px) {
		section {
			display: flex;
			place-items: center;
			min-height: 90vh;
		}
		.about-container {
			display: grid;
			grid-gap: 2rem;
			grid-template-columns: 2fr 1fr;
			place-items: center;
		}
		.about-content {
			grid-row: 1;
			padding-top: 0;
		}
		.portrait {
			position: relative;
			grid-column: 2;
			right: 0;
			width: 100%;
		}
	}
</style>

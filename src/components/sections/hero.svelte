<script>
	import arrow from '/static/images/arrow.svg';
</script>

<section>
	<div class="hero-content">
		<h1>Bold websites that simply work</h1>
		<nav class="desktop-only anchor-links">
			<a href="#about">About me</a>
			<a href="#selected-work">Selected work</a>
			<a href="#faq">FAQ</a>
			<a href="#contact">Contact</a>
			<a href="#archive">Archive</a>
		</nav>
	</div>
	<img src={arrow} alt="" class="arrow desktop-only" />
</section>

<style>
	section {
		position: relative;
		height:calc(90vh - 4rem);
		display: flex;
		align-items: flex-end;
		/* padding-top: calc(90vh - 22ch); */
	}
	@media (min-width: 769px) {
			section {		
				height:calc(90vh - 15rem);
	}
	.hero-content{
		
	}
		.anchor-links > a{
			margin-right: 1rem;
		}
		.arrow {
			position: absolute;
			top: 0;
			right: 4rem;
			bottom: 0;
			height: 100%;
		}
	}
</style>

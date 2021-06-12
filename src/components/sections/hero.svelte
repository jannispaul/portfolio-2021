<script>
	import arrow from '/static/images/arrow.svg';
</script>

<section>
	<h1>Bold websites that simply work</h1>
	<nav class="desktop-only">
		<a href="#about">About me</a>
		<a href="#selected-work">Selected work</a>
		<a href="#faq">FAQ</a>
		<a href="#contact">Contact</a>
		<a href="#archive">Archive</a>
	</nav>
	<img src={arrow} alt="" class="arrow desktop-only" />
</section>

<style>
	section {
		position: relative;
		padding-top: calc(90vh - 22ch);
	}
	@media (min-width: 769px) {
		.arrow {
			position: absolute;
			top: 0;
			right: 4rem;
			bottom: 0;
			height: 100%;
		}
	}
</style>

<script>
	import portrait from '/static/images/protrait.jpg';
	import line from '/static/images/line.svg';
</script>

<section id="about">
	<img src={portrait} alt="Portrait of a young man" class="portrait" />
	<div class="content">
		<h2>Who am I?</h2>
		<p>
			I’m Jannis and I create websites that are both elegant and effective. With over a decade of
			experience, my skills span a wide array of disciplines that seamlessly combine design and
			tech. Based in Berlin, I work with people and businesses around the world. If you want a
			website and are looking for a smooth ride from concept to development and beyond, I’m your
			guy.
		</p>
	</div>
	<img src={line} alt="" class="desktop-only" />
</section>

<style>
	section {
		position: relative;
		margin-bottom: 2rem;
	}
	.content {
		padding-top: 13rem;
		position: inherit;
		z-index: 1;
	}
	.portrait {
		z-index: 0;
		position: absolute;
		right: var(--side-padding);
		width: 12rem;
		border-radius: 500rem;
	}
</style>

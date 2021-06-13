<script>
	import joinPoliticsThumb from '/static/images/joinpolitics-thumbnail.jpg';
	import line from '/static/images/line.svg';
</script>

<section id="selected-work">
	<div class="selected-work-container">
		<h2>Selected Work</h2>
		<a href="#" class="project">
			<img src={joinPoliticsThumb} alt="Screenshot of joinpolitics website" />
			<h3>Building a digital home for JoinPolitics</h3>
			<p>Webflow Website</p>
		</a>
	</div>
</section>

<style>
	.project img {
		max-width: 100%;
		margin-bottom: 1rem;
	}
	section {
		max-width: 40rem;
		margin: auto;
		padding-top: 2rem;
		padding-bottom: 6rem;
	}
	@media (min-width: 769px) {
		section {
			display: flex;
			place-items: center;
			min-height: 90vh;
		}
	}
</style>

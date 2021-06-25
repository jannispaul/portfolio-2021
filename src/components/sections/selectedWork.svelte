<script>
	import joinPolitics from '/static/images/joinpolitics.jpg';
	// import arrowRightUp from '/static/images/arrow-right-up.svg';
</script>

<section id="selected-work">
	<div class="selected-work-container">
		<h2>Selected Work</h2>
		<a href="#" class="project">
			<img src={joinPolitics} alt="Screenshot of joinpolitics website" class="thumbnail"/>
			<div class="project-copy">
				<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-right-up">
					<path d="M14.6608 0.308594L14.4134 0.308387L14.4106 0.555806L14.3646 4.67706L14.3618 4.92972L14.6145 4.92985L43.7794 4.94486L0.741192 47.9831L0.564415 48.1598L0.741192 48.3366L3.65211 51.2475L3.82889 51.4243L4.00567 51.2475L47.0442 8.20902L47.0742 37.3897L47.0745 37.6432L47.3279 37.6394L51.4339 37.5781L51.6804 37.5744L51.6801 37.3279L51.6495 0.589025L51.6493 0.339442L51.3997 0.339234L14.6608 0.308594Z" stroke="#FFF9F2" stroke-width="0.5"/>
					</svg>
				<h3>Building a digital home for JoinPolitics</h3>
				<small>Webflow Website</small>
			</div>
		</a>
	</div>
</section>

<style>
	section {
		/* max-width: 40rem; */
		margin: auto;
		padding-top: 2rem;
		padding-bottom: 6rem;
	}
	.project img {
		max-width: 100%;
		margin-bottom: 1rem;
	}
	.thumbnail{
		mix-blend-mode: exclusion;
		filter: saturate(0);
		transition: filter 200ms ease;
	}
	a.project:hover .thumbnail{
		filter: saturate(1);
	}
	path{
		fill: rgba(0,0,0,0);
		transition: fill 200ms ease;
	 }
	a.project:hover path{
		fill: var(--color-white);
	}
	.arrow-right-up {
		display: none;
		float: right;
	}
	@media (min-width: 769px) {
		section {
			display: flex;
			place-items: center;
			min-height: 90vh;
		}
	.arrow-right-up {
		display: block;
		}
	}
</style>

<script context="module">
	export const prerender = true;
</script>
<script>
	import joinPolitics from '/static/images/joinpolitics.jpg';
	import joinPolitics2 from '/static/images/joinpolitics 2.jpg';
	import Contact from '/src/components/sections/contact.svelte';
	// import arrowRightUp from '/static/images/arrow-right-up.svg';
</script>

<article>
	<h1>Building a digital home for JoinPolitics</h1>
	<p>
		JoinPolitics, a Berlin startup trying to disrupt the political scene by providing seed capital
		for aspiring talent, needed a website to comunicate their mission. After learning more about
		what they were looking for, I adapted existing designs and crafted original ones to build them a
		site. Using Webflow, I implemented this project with the client’s user experience in mind, and I
		continue to work with them today.
	</p>
	<figure>
		<img src={joinPolitics} width="1814" height="954" alt="Screenshot of joinpolitics website header" class="thumbnail" />
		<figcaption>Header in vibrant brand colors.</figcaption>
	</figure>
	<figure>
		<img src={joinPolitics2} width="1352" height="932" alt="Screenshot of slider on joinpolitics website" class="thumbnail" />
		<figcaption>Custom slider with webflow CMS items.</figcaption>
	</figure>
	<h2>The Results</h2>
	<p>
		JoinPolitics achieved their goal to establish a strong online presence. Now they have an
		impactful website that’s fully editable and doesn’t require technical maintenance. They were
		able to launch their blog and showcase their talent media stories on a website they take pride
		in, one that conveys their values.
	</p>
	<a href="https://www.joinpolitics.org/" class="project-link">
		Visit joinpolitics.org
		<svg
			width="52"
			height="52"
			viewBox="0 0 52 52"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="arrow-right-up"
		>
			<path
				d="M14.6608 0.308594L14.4134 0.308387L14.4106 0.555806L14.3646 4.67706L14.3618 4.92972L14.6145 4.92985L43.7794 4.94486L0.741192 47.9831L0.564415 48.1598L0.741192 48.3366L3.65211 51.2475L3.82889 51.4243L4.00567 51.2475L47.0442 8.20902L47.0742 37.3897L47.0745 37.6432L47.3279 37.6394L51.4339 37.5781L51.6804 37.5744L51.6801 37.3279L51.6495 0.589025L51.6493 0.339442L51.3997 0.339234L14.6608 0.308594Z"
				stroke="#FFF9F2"
				stroke-width="1"
			/>
		</svg>
	</a>
</article>
<Contact />

<style>
	article {
		max-width: 38rem;
		margin: 5rem auto 0;
		padding: var(--side-padding);
	}
	h1 {
		font-size: 1.8rem;
		margin-bottom: 2rem;
	}
	p {
		margin-bottom: 3rem;
	}
	figure {
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: auto;
		margin-bottom: 0.5rem;
	}

	.project-link {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-transform: uppercase;
		text-decoration: none;
		padding: 2rem 0;
		border-top: 0.1rem solid var(--color-white);
	}
	.project-link path {
		fill: rgba(0, 0, 0, 0);
		transition: fill 200ms ease;
	}
	.project-link:hover path {
		fill: var(--color-white);
	}

	@media (min-width: 768px) {
		h1 {
			font-size: 4rem;
			margin-bottom: 3rem;
		}
		p {
			font-size: 0.88rem;
			column-count: 2;
			margin-bottom: 3rem;
		}
	}
</style>

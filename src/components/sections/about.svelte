<script>
	import profile from '/static/images/profile.jpg';
	import copyUnderline from '/static/images/copy-underline.svg';
</script>

<section id="about">
	<div class="about-container">
		<div class="about-content">
			<h2>About me</h2>
			<p class="about-copy">
				I create websites that are elegant and effective. With over a decade of experience, my
				skills span an array of disciplines that seamlessly combine design and tech. Based in
				Berlin, I work with people around the world. If you want a website and are looking for a
				smooth ride from concept to development and beyond, I’m your guy.
				<img src={copyUnderline} alt="decorative line" class="copy-underline desktop-only" />
			</p>
			<div class="profile-container">
				<img
					src={profile}
					width="100"
					height="100"
					alt="Portrait of a young man"
					class="profile-image"
				/>
				<div class="profile-text">
					<p class="profile-name">Jannis Paul Wicke</p>
					<p>Consulting: 100€/hour</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		position: relative;
		margin-bottom: 2rem;
		padding-top: 5rem;
		padding-bottom: 4rem;
	}

	.profile-container {
		display: flex;
		align-items: center;
		margin-top: 1rem;
	}
	.profile-image {
		height: auto;
		width: 3.75rem;
		border-radius: 50%;
		margin-right: 1rem;
	}
	.profile-name {
		font-size: 1.375rem;
	}

	@media (min-width: 769px) {
		.about-content {
			display: grid;
			grid-template-columns: 1fr 37.5rem;
		}
		.about-copy {
			font-size: 1.833rem;
			position: relative;
		}
		.profile-container {
			margin-top: 2rem;
			grid-column: 2;
		}
		.copy-underline {
			width: 22rem;
			position: absolute;
			bottom: 1.6rem;
			left: 9rem;
		}
	}
	/* .about-copy{
		font-size: 1rem;
	} */

	/* .about-container {
		position: relative;
		max-width: 40rem;
		margin: auto;
	} */

	/* 	.about-container {
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
	.profile {
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
	} */
</style>

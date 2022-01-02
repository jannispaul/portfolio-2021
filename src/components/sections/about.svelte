<script>
	import profile from '/images/profile.jpg';
	import copyUnderline from '/images/copy-underline.svg';
</script>

<section id="about">
	<div class="about-container">
		<div class="about-content">
			<h2>About me</h2>
			<p class="about-copy">
				I create websites that are elegant and effective. With over a decade of experience, my
				skills span an array of disciplines that seamlessly combine design and tech. I'm based in
				Berlin and work with people around the world. If you want a website and are looking for a
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
</style>

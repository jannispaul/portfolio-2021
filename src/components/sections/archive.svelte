<script>
	import projects from '/src/data/projects.json';
</script>

<section id="archive" >
<div class="archive-container">
	<h2>Looking for more?</h2>
	<div class="filter">
		<button data-name="all" class="active">All</button>
		<button data-name="projects" class="">Projects</button>
		<button data-name="education" class="">Education</button>
	</div>
	<div class="table">
		{#each projects as { client, category, year, type, description, hidden, link, linkText }, i}
			{#if !hidden}
				<div class="row {link || (description && 'clickable')}" data-name={type}>
					<div class="client">
						<p>
							<span>{client}</span>
						</p>
					</div>
					<div class="">
						<p>
							<span>{category}</span>
						</p>
					</div>
					<div class="date desktop-only">
						<p>{year}</p>
					</div>
				</div>
				{#if link || description}
					<div class="hidden details ">
						{#if description}
							<p class="project-description">{description}</p>
						{/if}
						{#if link}
							<p class="project-link">
								<a href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
							</p>
						{/if}
					</div>
				{/if}
			{/if}
		{/each}
	</div>
	</div>
</section>

<style>
	.archive-container {
		width: 100%;
		max-width: var(--max-width);
		margin: auto;
	}
	.date {
		display: hidden;
	}
	.table {
		width: 100%;
		margin-top: 1rem;
		font-size: 0.89rem;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		border-top: 1px solid var(--color-white);
		/* height: var(--s3); */
		padding: 1rem 0;
		align-items: center;
	}

	.details {
		display: flex;
		flex-wrap: wrap;
		background-image: linear-gradient(
			to right,
			var(--color-white) 0%,
			var(--color-white) 9%,
			rgba(255, 255, 255, 0) 10%
		);
		background-position: top left;
		background-size: calc(1px * 10) 1px;
		background-repeat: repeat-x;
		padding: 1rem 0;
	}

	.row > div:last-of-type:not(:first-of-type) {
		text-align: right;
	}

	.clickable:hover {
		font-style: italic;
		cursor: pointer;
	}
	.clickable div:first-of-type p::after {
		content: '*';
		color: var(--color-white);
		position: absolute;
	}
	button.active::after {
		content: '*';
		color: var(--color-accent);
		position: absolute;
	}
	.hover div:first-of-type p::after,
	.active div:first-of-type p::after {
		content: '*';
		color: var(--color-accent);
		position: absolute;
	}

	@media (min-width: 769px) {
		.table {
			font-size: 1rem;
		}
		.row {
			grid-template-columns: 2.3fr 3fr 1fr;
		}
		.details {
			display: grid;
			grid-template-columns: 2.3fr 3fr 1fr;
		}
		.project-link {
			margin-top: 0;
		}
		.project-description {
			grid-column: 2/4;
		}
		.project-link {
			grid-row: 1/2;
			grid-column: 1/2;
		}
	}
	.hidden {
		display: none;
	}
</style>

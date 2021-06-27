<script>
	import { slide } from 'svelte/transition';
	import projectsConstant from '/src/data/projects.json';

	// Create projects variable (that is not a constant) and add an id to each element
	let projects = projectsConstant.map((project, i) => ({ ...project, id: i }));
	// Create array filteredProjects to apply filters to
	$: filteredProjects = projects;
	// Create variable that stores the active filter
	let activeFilter;

	// Set all active states to false and clicked to true
	const expand = (project) => {
		filteredProjects = filteredProjects.map((s) => {
			s.active = false;
			if (s.id === project.id) {
				s.active = true;
			}
			return s;
		});
	};

	// Filter filteredProjects by type value
	const filter = (type) => {
		activeFilter = type;
		filteredProjects = projects.filter((project) => type === 'all' || project.type === type);
	};
	filter('all');
</script>

<section id="archive">
	<div class="archive-container">
		<div class="table">
			<div class="table-header">
				<h2>Archive</h2>
				<div class="filter">
					<button
						data-name="all"
						class={activeFilter === 'all' && 'active'}
						on:click={() => filter('all')}>All</button
					>
					<button
						data-name="projects"
						class={activeFilter === 'projects' && 'active'}
						on:click={() => filter('projects')}>Projects</button
					>
					<button
						data-name="education"
						class={activeFilter === 'education' && 'active'}
						on:click={() => filter('education')}>Education</button
					>
				</div>
			</div>
			{#each filteredProjects as project}
				{#if !project.hidden}
					<button
						class="row {(project.link && 'clickable') ||
							(project.description && 'clickable')} {project.active && 'active'}"
						data-name={project.type}
						on:click={() => expand(project)}
					>
						<div class="client">
							<p>
								<span>{project.client}</span>
							</p>
						</div>
						<div class="">
							<p>
								<span>{project.category}</span>
							</p>
						</div>
						<div class="date desktop-only">
							<p>{project.year}</p>
						</div>
					</button>
					{#if (project.active && project.link) || (project.active && project.description)}
						<div class="details" transition:slide>
							{#if project.description}
								<p class="project-description">{project.description}</p>
							{/if}
							{#if project.link}
								<p class="project-link">
									<a href={project.link} target="_blank" rel="noopener noreferrer"
										>{project.linkText}</a
									>
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
	/* Hidden on mobile */
	.date,
	.filter {
		display: none;
	}

	.archive-container {
		width: 100%;
		max-width: var(--max-width);
		margin: auto;
	}
	.table {
		width: 100%;
		margin-top: 1rem;
		font-size: 0.89rem;
	}
	.table-header {
		display: flex;
		justify-content: space-between;
	}
	button.row {
		width: 100%;
		border-top: 1px solid var(--color-white);
		padding: 1.5rem 0;
		align-items: center;
		text-align: left;
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
		padding: 1.5rem 0;
	}

	.row > div:last-of-type:not(:first-of-type) {
		text-align: right;
	}

	.clickable:hover,
	.clickable:focus,
	.clickable.active {
		font-style: italic;
		cursor: pointer;
	}
	/* .clickable div:first-of-type p::after {
		content: '*';
		color: var(--color-white);
		position: absolute;
	} */
	.filter button:not(:last-of-type) {
		margin-right: 1rem;
	}
	.filter button.active::after {
		content: '*';
		color: var(--color-accent);
		position: absolute;
	}
	/* .hover div:first-of-type p::after,
	.active div:first-of-type p::after {
		content: '*';
		color: var(--color-accent);
		position: absolute;
	} */
	.project-description {
		margin-bottom: 1rem;
	}

	@media (min-width: 769px) {
		.table {
			font-size: 1rem;
			display: grid;
		}
		.filter,
		.date {
			display: block;
		}
		button.row {
			display: grid;
			grid-template-columns: 2.3fr 3fr 1fr;
		}
		.details {
			display: grid;
			grid-template-columns: 2.3fr 3fr 1fr;
		}
		.project-link {
			margin-top: 0;
		}
		.project-link:hover,
		.project-link:active,
		.project-link:focus {
			text-decoration: underline;
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

<!-- https://svelte.dev/repl/62a22abc6f2344388254ef5f874f073e?version=3.16.0 -->
<script>
	import { slide } from 'svelte/transition';
	import faq from '/src/data/faq.json';

	let visible = true;
	let sections = faq;

	// Set all active states to false and clicked to true
	const expand = (section) => {
		sections = sections.map((s) => {
			s.active = false;
			if (s.id === section.id) {
				s.active = true;
			}
			return s;
		});
	};
</script>

{#each sections as section}
	<div class="accordion">
		<button on:click={() => expand(section)}>{section.question}</button>
		{#if section.active}
			<div class="slider" transition:slide>
				<p>{section.answer}</p>
			</div>
		{/if}
	</div>
{/each}

<style>
	button {
		text-align: left;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
	.accordion {
		margin-bottom: 1rem;
	}
	.slider {
		color: white;
	}
</style>

<!-- Inspired by https://svelte.dev/repl/62a22abc6f2344388254ef5f874f073e?version=3.16.0 -->
<script>
	import faqJSON from '/src/data/faq.json';
	import { slide } from 'svelte/transition';

	// Create editible variable from constant
	let faqs = faqJSON;

	// Set all active states to false and clicked to true
	const expand = (faq) => {
		faqs = faqs.map((s) => {
			s.active = false;
			if (s.id === faq.id) {
				s.active = true;
			}
			return s;
		});
	};
</script>

<div class="accordion">
	{#each faqs as faq}
		<div class="accordion-item ">
			<button on:click={() => expand(faq)} class={faq.active && 'active'}>
				<svg
					width="66"
					height="50"
					viewBox="0 0 66 50"
					xmlns="http://www.w3.org/2000/svg"
					class="arrow before"
				>
					<path
						d="M41.2169 0.82337L41.0421 0.64826L40.8652 0.821261L38.1452 3.48126L37.9646 3.65792L38.1431 3.83668L57.1369 22.85L0.999999 22.85L0.749999 22.85L0.749999 23.1L0.749999 26.9L0.749999 27.15L0.999999 27.15L57.1373 27.15L38.143 46.1834L37.964 46.3628L38.1459 46.5394L40.8659 49.1794L41.0428 49.3511L41.2169 49.1766L65.1769 25.1766L65.3533 25L65.1769 24.8234L41.2169 0.82337Z"
						stroke="#FFF9F2"
					/>
				</svg>
				{faq.question}
				<svg
					width="66"
					height="50"
					viewBox="0 0 66 50"
					xmlns="http://www.w3.org/2000/svg"
					class="arrow after"
				>
					<path
						d="M41.2169 0.82337L41.0421 0.64826L40.8652 0.821261L38.1452 3.48126L37.9646 3.65792L38.1431 3.83668L57.1369 22.85L0.999999 22.85L0.749999 22.85L0.749999 23.1L0.749999 26.9L0.749999 27.15L0.999999 27.15L57.1373 27.15L38.143 46.1834L37.964 46.3628L38.1459 46.5394L40.8659 49.1794L41.0428 49.3511L41.2169 49.1766L65.1769 25.1766L65.3533 25L65.1769 24.8234L41.2169 0.82337Z"
						stroke="#FFF9F2"
					/>
				</svg>
			</button>
			{#if faq.active}
				<div class="answer" transition:slide>
					<p>{faq.answer}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.accordion {
		border-bottom: 0.1rem solid var(--color-white);
	}
	button {
		text-align: left;
		font-family: 'Verona Serial', serif;
		font-size: 1rem;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.5rem 0;
	}
	.arrow.before {
		display: none;
	}
	.arrow {
		fill: rgba(0, 0, 0, 0);
		width: 1.5rem;
		height: 1.5rem;
	}
	.arrow path {
		stroke-width: 1;
	}
	.accordion-item {
		border-top: 0.1rem solid var(--color-white);
		overflow: hidden;
		position: relative;
	}

	.answer {
		margin: 0 0 1.5rem 0;
		color: white;
		max-width: 30rem;
	}
	@media (min-width: 768px) {
		button {
			padding: 2rem 0;
			font-size: 3rem;
			transform: translateX(0);
			transition: transform 200ms ease;
		}
		button:hover,
		button:focus,
		button:active,
		button.active {
			fill: var(--color-white);
			transform: translateX(4rem);
		}
		.arrow {
			width: 3rem;
			height: 3rem;
			transition: transform 200ms ease;
			margin-top: -0.5rem;
		}
		.arrow.before {
			display: block;
			position: absolute;
			left: 0;
			transform: translateX(-4rem);
		}
		.before path {
			fill: var(--color-white);
		}

		.answer {
			font-size: 1.33rem;
			margin: 0 0 2rem 4rem;
		}
	}
</style>

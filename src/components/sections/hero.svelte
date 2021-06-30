<script context="module">
	export const prerender = true;
</script>

<section>
	<div class="hero-content">
		<h1>Bold websites that simply work</h1>
	</div>
	<svg
		width="459"
		height="57"
		viewBox="0 0 459 57"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="underline desktop-only"
	>
		<path
			d="M2.17389 55.8566C123.188 5.8436 291.048 -3.27405 457.348 15.0245"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</section>

<style>
	section {
		position: relative;
		min-height: calc(60vh - 4rem);
		display: flex;
		align-items: flex-end;
		margin-bottom: 5rem;
		pointer-events: none;
	}

	svg path {
		fill: none;
		stroke: var(--color-white);
		stroke-width: 1.5;
		stroke-dasharray: 1000;
		stroke-dashoffset: 1000;
		animation: drawLine 2s 1s cubic-bezier(0,.63,.38,.99) forwards;
	}

	@keyframes drawLine {
		to {
			stroke-dashoffset: 0;
		}
	}
	@media (min-width: 769px) {
		section {
			height: calc(100vh - 15rem);
		}
		.hero-content {
			width: 100%;
			max-width: var(--max-width);
		}
		.underline {
			position: absolute;
			width: 32rem;
			left: 12rem;
			bottom: -2rem;
			height: 4rem;
		}
	}
</style>

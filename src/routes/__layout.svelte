<script>
	import Header from '/src/components/sections/header.svelte';
	import Footer from '/src/components/sections/footer.svelte';
	import '../style.css';

	// Code from Svelte Docs: https://svelte.dev/tutorial/spring
	import { spring } from 'svelte/motion';

	// Svelte animation function that smoothes animation
	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.01,
			damping: 0.6
		}
	);

	// clientWdith is viewport width of client
	// Used to only enable background animation at >768px
	let clientWidth;
</script>

<!-- Watch inner window width and set clientWidth -->
<svelte:window bind:innerWidth={clientWidth} />

<!-- Track mouse movement and set coordinates -->
<div on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}>
	<Header />
	<main>
		<slot />
	</main>
	<!-- dynamically transform blurred gradients -->
	<div
		class="blur"
		style="transform: translate3d({clientWidth > 800 ? $coords.x / 3 : 0}px, {clientWidth > 768
			? $coords.y / 3
			: 0}px, 0px);"
	/>
	<div
		class="blur second"
		style="transform: translate3d({clientWidth > 768 ? $coords.x / 2 : 0}px, {clientWidth > 768
			? $coords.y / 2
			: 0}px, 0px);"
	/>
	<div
		class="blur third"
		style="transform: translate3d({clientWidth > 768 ? $coords.x / 2 : 0}px, {clientWidth > 768
			? $coords.y / 1.5
			: 0}px, 0px);"
	/>
	<Footer />
	<div class="noise" />
</div>

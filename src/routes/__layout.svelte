<script>
	import Header from '/src/components/sections/header.svelte';
	import Footer from '/src/components/sections/footer.svelte';
	import '../style.css';

	// Code from: https://svelte.dev/tutorial/spring
	import { spring } from 'svelte/motion';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.01,
			damping: 0.6
		}
	);

	let size = spring(10);
	// Viewport width: only enable background animation at >768px
	let clientWidth;
</script>

<svelte:window bind:innerWidth={clientWidth} />
<div
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
>
	<Header />
	<main>
		<slot />
	</main>
	<!-- <Background /> -->
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

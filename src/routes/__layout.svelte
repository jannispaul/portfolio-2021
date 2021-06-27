<script>
	import Background from '/src/components/background.svelte';
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

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<meta name="keywords" content="" />
	<meta name="theme-color" content="#333333" />
	<html lang="en" />
	<meta name="keywords" content="Website, webflow, design, berlin, developement, entwicklung">
	<meta name="author" content="Jannis Paul Wicke">
	<!-- <link rel="sitemap" type="application/xml" href="/sitemap.xml" /> -->
	<!-- <link rel="canonical" href="https://paul-wicke.de" /> -->
	<meta property="og:image" content="/static/images/og-image.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="900" />
	<meta property="og:image:alt" content="Bold websites that simply work type on dark background" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://paul-wicke.de/" />
	<meta property="og:title" content="Bold websites that simply work" />

	<meta property="og:description" content="Bold websites that simply work" />
	<meta property="og:image" content="/static/images/og-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://paul-wicke.de/" />
	<meta property="twitter:title" content="Bold websites that simply work" />
	<meta
		property="twitter:description"
		content="Bold websites that simply work"
	/>
	<meta property="twitter:image" content="/static/images/og-image.jpg" />
</svelte:head>
<svelte:window bind:innerWidth={clientWidth}/>
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
	<div class="blur" style="transform: translate3d({clientWidth > 800 ? ($coords.x / 3) : 0}px, {clientWidth > 768 ? ($coords.y / 3) : 0}px, 0px);" />
	<div
		class="blur second"
		style="transform: translate3d({clientWidth > 768 ? ($coords.x / 2) : 0}px, {clientWidth > 768 ? ($coords.y / 2) : 0}px, 0px);"
	/>
	<div
		class="blur third"
		style="transform: translate3d({clientWidth > 768 ? ($coords.x / 2) : 0}px, {clientWidth > 768 ? ($coords.y / 1.5) : 0}px, 0px);"
	/>
	<Footer />
	<div class="noise" />
</div>

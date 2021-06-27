<script>
	import Background from '/src/components/background.svelte';
	import Header from '/src/components/sections/header.svelte';
	import Footer from '/src/components/sections/footer.svelte';
	import '../style.css';

	// Code from: https://svelte.dev/tutorial/spring
	import { spring } from 'svelte/motion';
import { onMount } from 'svelte';

	let coords = spring(
		{ x: 50, y: 50 },
		{
			stiffness: 0.01,
			damping: 0.6
		}
	);

	let size = spring(10);
	// let y;

</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<meta name="keywords" content="" />

	<!-- Google Font -->
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap"
		rel="stylesheet"
	/>

	<meta name="theme-color" content="#333333" />
	<!-- <link rel="sitemap" type="application/xml" href="/sitemap.xml" /> -->
	<link rel="canonical" href="https://paul-wicke.de.com" />
	<meta property="og:image" content="/static/images/og-image.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="900" />
	<meta
		property="og:image:alt"
		content="Bold websites that simply work type on dark background"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://musikversicherung.com/" />
	<meta property="og:title" content="Deine Versicherung für Instrumente und Equipment" />

	<meta property="og:description" content="" />
	<meta property="og:image" content="/social-image.jpg" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://musikversicherung.com/" />
	<meta property="twitter:title" content="Deine Versicherung für Instrumente und Equipment" />
	<meta
		property="twitter:description"
		content="SINFONIMA-Instrumentenversicherung & I'M
    SOUND-Equipmentversicherung - bester Allgefahrenschutz für klassische
    Instrumente und elektronisches Equipment"
	/>
	<meta property="twitter:image" content="/social-image.jpg" />
</svelte:head>
<div
	on:mousemove={(e) => coords.set({ x: e.clientX, y: e.clientY })}
	on:mousedown={() => size.set(30)}
	on:mouseup={() => size.set(10)}
	on:scroll={() => coords.set({ x: coords.x, y: coords.y + y })}
>
	<Header />
	<main>
		<slot />
	</main>
	<!-- <Background /> -->
	<div class="blur" style="transform: translate3d({$coords.x / 3}px, {$coords.y/3}px, 0px);" />
	<div
		class="blur second"
		style="transform: translate3d({$coords.x / 2}px, {$coords.y / 2}px, 0px);"
	/>
	<div class="blur third" style="transform: translate3d({$coords.x / 2}px, {$coords.y/1.5}px, 0px);" />
	<Footer />
	<div class="noise" />
</div>

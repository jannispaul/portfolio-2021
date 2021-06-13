<script>
	import Header from '/src/components/sections/header.svelte';
	import Footer from '/src/components/sections/footer.svelte';
	import '../style.css';
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width,initial-scale=1.0" />
	<meta name="keywords" content="" />
	
	<!-- Google Font -->
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap" rel="stylesheet">
	
	<meta name="theme-color" content="#333333" />
	<!-- <link rel="sitemap" type="application/xml" href="/sitemap.xml" /> -->
	<link rel="canonical" href="https://musikversicherung.com" />
	<meta property="og:image" content="https://musikversicherung.com/static/social-image.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1600" />
	<meta property="og:image:height" content="900" />
	<meta
		property="og:image:alt"
		content="Deine Versicherung für Instrumente und Equipment-Schriftzug vor Stagepiano im Hintergrund"
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
<Header />
<main>
	<slot />
</main>
<Footer />

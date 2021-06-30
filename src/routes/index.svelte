<script context="module">
	export const prerender = true;
</script>

<script>
	import Hero from '/src/components/sections/hero.svelte';
	import About from '/src/components/sections/about.svelte';
	import SelectedWork from '/src/components/sections/selectedWork.svelte';
	import Faq from '/src/components/sections/faq.svelte';
	import Contact from '/src/components/sections/contact.svelte';
	import Archive from '/src/components/sections/archive.svelte';
</script>

<svelte:head>
	<title>Bold websites that simply work – Jannis Wicke</title>
	<meta name="description" content="Take your website to the next level. Custom Webflow websites, from concept to developement and beyond. " />
</svelte:head>

<Hero />
<About />
<SelectedWork />
<Faq />
<Contact />
<Archive />

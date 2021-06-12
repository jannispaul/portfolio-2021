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
	<title>Jannis Paul Wicke</title>
</svelte:head>

<Hero />
<About />
<SelectedWork />
<Faq />
<Contact />
<Archive />

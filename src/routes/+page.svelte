<script lang="ts">
  import type { PageData } from './$types';

  import Navbar from '$lib/components/sections/Navbar.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Contact from '$lib/components/sections/Contact.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Social from '$lib/components/sections/Social.svelte';
  import Tools from '$lib/components/sections/Tools.svelte';
</script>

<main>
  <Navbar />
  <Hero />
  <About />
  <Tools />
  <Social />
  <Contact />
  <Footer />
</main>

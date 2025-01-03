<script lang="ts">
  import { socials } from '$lib/api/socials';
  import { navLinks } from '$lib/components/navigation';

  import EmblemSquare from '$lib/components/graphics/EmblemSquare.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  export let noNavLinks = false;

  const newSocials = socials;
  newSocials.splice(4, Number.MAX_VALUE);

  const footerSocials = newSocials;
</script>

<footer>
  <div class="w-full bg-slate-800 h-max border-t-4 border-slate-800 dark:border-white">
    <Wrappper>
      <div class="w-full py-4">
        <div class="py-6 flex justify-center">
          <!-- Emblem -->
          <div class="flex">
            <div class="my-auto font-mechsuit flex justify-center text-white">
              Justin Nicholas Tamrin
            </div>
          </div>
        </div>

        <!-- Copyright & Credit -->
        <p class="text-slate-200 text-center text-sm">
          &copy; {new Date().getFullYear()}, made with ❤️ by
          <a
            href={noNavLinks ? '/' : '#social'}
            target="_blank"
            class="text-primary hover:underline active:text-custom-3">Justin Nicholas Tamrin</a
          >, using
          <a
            href="https://svelte.dev"
            target="_blank"
            class="text-orange-500 hover:underline active:text-white"
          >
            SvelteKit
          </a>
          and
          <a
            href="https://tailwindcss.com"
            target="_blank"
            class="text-cyan-500 hover:underline active:text-white"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </Wrappper>
  </div>
</footer>

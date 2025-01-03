<script lang="ts">
  import type { ButtonColorVariant } from '$lib/components/colors';
  import justinprofilepic from '$lib/img/Justin_Nicholas Tamrin_Profile Photo.jpg';

  import bg from '$lib/components/graphics/hero-bg.svg';

  import Button from '$lib/components/buttons/Button.svelte';
  import Emblem from '$lib/components/graphics/Emblem.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import Typewriter from 'svelte-typewriter';

  const secondaryButton: ButtonColorVariant = { key: 'secondary' };
</script>

<section>
  <!-- Background image -->
  <div
    class="h-[950px] md:h-[800px] bg-cover bg-no-repeat bg-center flex relative duration-500"
    style="background-image: url({bg});"
  >
    <div class="md:mt-16 w-full flex">
      <Wrappper>
        <div class="w-full md:flex md:gap-4 md:justify-between my-auto">
          <div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center duration-500">
            <!-- Hero text -->
            <h4 id="home" class="dark:text-white duration-500">Hello, my name is</h4>
            <h1 class="mb-2 dark:text-white duration-500">
              Justin Nicholas <span class="font-jetbrains text-inherit text-primary">Tamrin</span>
            </h1>

            <!-- Typing effect -->
            <h4 class="mb-4 dark:text-white duration-500">
              <Typewriter mode={'loop'} interval={25}>
                <span class="text-emerald-600 dark:text-primary">A Full-Stack Developer</span>
                <span class="text-green-600 dark:text-green-400">A back-end Engineer</span>
                <span class="text-orange-600 dark:text-orange-400">A front-end developer</span>
                <span class="text-orange-600 dark:text-orange-400">An App developer</span>
              </Typewriter>
            </h4>
          </div>

          <!-- Emblem logo -->
          <div class="max-md:mx-auto w-max md:my-auto relative">
            <div
              class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 dark:text-white absolute -top-3 right-2 duration-[50ms]"
            >
              <img src={justinprofilepic} alt="Justin Profile Pic" class="rounded-lg shadow-lg" />
            </div>

            <!-- Back outline / shadow -->
            <div
              class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 text-secondary dark:text-transparent dark:stroke-[4] dark:stroke-custom-3 duration-500"
            />
          </div>
        </div>
      </Wrappper>
    </div>
  </div>
</section>

<style>
  .dark:root {
    --cursor-color: #fff;
  }
</style>

<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';


import BaseLogoCarousel from '../ui/BaseLogoCarousel.vue';

</script>

<template>

    <BaseContainer class="space-y-16 py-12">

        <h2 class="text-center text-blue-950 s:text-sm m:text-base l:text-lg md:text-xl">
            Used by the best developers and teams around the world
        </h2>

        <BaseLogoCarousel class="mt-10" />

    </BaseContainer>

    <BaseContainer class="space-y-16 py-12">

        <div class="rounded-2xl py-12 lg:px-12 lg:py-14">

            <div class="flex flex-row items-center justify-center gap-10">

                <div class="max-w-full">
                    <h1 class="text-center text-xl text-blue-950">
                        How SERP API Works?
                    </h1>

                    <p class="text-center wrap-break-word text-sm text-slate-600 py-4 pb-16">
                        Unveil the magic of SERP scrapers and discover how search engine result API work. Learn how
                        they
                        can transform your SEO strategy.
                    </p>


                    <!-- tablet + desktop view image -->
                    <img src="/images/homePage/serp-api-working.png" alt="serp-house working api"
                        class="hidden md:block" />

                    <!-- mobile view image -->
                    <img src="/images/homePage/serp-api-working-mobile.png" alt="serp-house working api"
                        class="block mx-auto md:hidden" />
                </div>

            </div>

        </div>
    </BaseContainer>

    <div class="bg-violet-500 px-6 py-5">
        <div class="mx-auto max-w-6xl">
            <div class="flex flex-col items-center text-center gap-4
                   md:flex-row md:justify-between md:text-left">

                <p class="text-lg font-medium text-white">
                    Here's How SERP API Works:
                </p>

                <a href="#" class="inline-flex items-center gap-2 border-b border-white pb-1 text-white font-semibold">
                    <span>Explore How It Works!</span>
                    <i class="pi pi-arrow-right"></i>
                </a>

            </div>
        </div>
    </div>

</template>
<script setup>

import BaseCheck from '../reusbale/BaseCheck.vue';

</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        <div class="flex flex-col lg:flex-row items-center gap-12">

            <div class="w-full lg:w-1/2">

                <h2 class="text-4xl lg:text-4xl text-blue-950">
                    Get a maintenance-free scraping infrastructure
                </h2>

                <p class="mt-4 text-lg text-slate-600 leading-relaxed">
                    Benefit from our top-tier search results data collection
                    infrastructure that is ready-to-use straight away.
                </p>

                <div class="mt-8 space-y-6">

                    <div class="flex gap-4">
                        <span class="shrink-0 mt-1">
                            <BaseCheck />
                        </span>

                        <p class="text-slate-700">
                            No Need For Custom Scrapers, Parsers, Or Browsers
                        </p>
                    </div>

                    <div class="flex gap-4">
                        <span class="shrink-0 mt-1">
                            <BaseCheck />
                        </span>

                        <p class="text-slate-700">
                            Let Us Handle CAPTCHAS And Overcome IP Blocks For You
                        </p>
                    </div>

                    <div class="flex gap-4">
                        <span class="shrink-0 mt-1">
                            <BaseCheck />
                        </span>

                        <p class="text-slate-700">
                            Allocate your resources towards analyzing data
                        </p>
                    </div>

                </div>

            </div>

            <div class="w-full lg:w-1/2">
                <img src="/images/googleSerpApi/scraping-infrastructure.png" alt="Scraping Infrastructure"
                    class="w-full h-auto">
            </div>

        </div>

    </div>
</template>
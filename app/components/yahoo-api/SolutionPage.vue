<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseCheck from '../reusbale/BaseCheck.vue';
import BaseLink from '../ui/BaseLink.vue';


</script>

<template>
    <BaseContainer class="pb-8 py-24">

        <div class="flex flex-col md:flex-row items-center justify-between w-full px-4 gap-8 pb-12">

            <div class="md:w-1/2 space-y-6">
                <h2 class="text-xl md:text-3xl lg:text-2xl text-blue-950 text-start">
                    Your Complete Search Solution – Images, News, Shopping Made Simple
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                    Quickly find images, get the latest news, and shop—all in one search. Whether you need pictures,
                    updates, or products, it's all here for you.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">High-Quality Images</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Latest News Updates</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Smart Shopping Choices</NuxtLink>
                    </div>

                </div>
            </div>

            <div class="md:w-1/2 flex justify-center">
                <img src="/images/yahooSerpApi/yahoo-all-in-one-search-features.png" alt="Specific Devices"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


            <div class="space-y-4 border-r-0 sm:border-r-2 sm:border-violet-500">
                <h2 class="text-lg text-center md:text-start font-semibold text-blue-950">
                    Enterprise Scaling
                </h2>

                <p class="text-gray-600 text-center md:text-start">
                    For industry leaders: elite data services for top-tier business requirements
                </p>

                <div class="flex s:justify-center md:justify-start">
                    <BaseLink name="Contact us" />
                </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div class="flex items-center gap-3">
                    <BaseCheck />
                    <p>Account manager</p>
                </div>

                <div class="flex items-center gap-3">
                    <BaseCheck />
                    <p>Custom packages</p>
                </div>

                <div class="flex items-center gap-3">
                    <BaseCheck />
                    <p>Tailored onboarding</p>
                </div>

                <div class="flex items-center gap-3">
                    <BaseCheck />
                    <p>Priority support</p>
                </div>

                <div class="flex items-center gap-3">
                    <BaseCheck />
                    <p>Customizations</p>
                </div>

                <div class="flex items-center gap-3">
                    <BaseCheck />
                    <p>Integration support</p>
                </div>
            </div>

        </div>


        <div class="flex flex-col md:flex-row items-center justify-between px-4 gap-8 py-12">

            <div class="w-full md:w-1/2 flex justify-center">
                <img src="/images/yahooSerpApi/yahoo-search-results-data.png" alt="yahoo search"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="text-xl md:text-3xl lg:text-2xl text-blue-950 text-start">
                    Your Complete Search Solution – Images, News, Shopping Made Simple
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                    Quickly find images, get the latest news, and shop—all in one search. Whether you need pictures,
                    updates, or products, it's all here for you.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">High-Quality Images</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Latest News Updates</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Smart Shopping Choices</NuxtLink>
                    </div>

                </div>
            </div>

        </div>

        <div class="flex flex-col md:flex-row items-center justify-between px-4 gap-8 pb-12">

            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="text-xl md:text-3xl lg:text-2xl text-blue-950 text-start">
                    Get a maintenance-free scraping infrastructure
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                    Benefit from our top-tier search results data collection infrastructure that is ready-to-use
                    straight away.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">No Need For Custom Scrapers, Parsers, Or
                            Browsers</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Let Us Handle CAPTCHAS And Overcome IP Blocks
                            For You</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Allocate your resources towards analyzing data
                        </NuxtLink>
                    </div>

                </div>
            </div>

            <div class="w-full md:w-1/2 flex justify-center">
                <img src="/images/yahooSerpApi/scraping-infrastructure.png" alt="scraping infrastructre"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

        </div>
    </BaseContainer>
</template>
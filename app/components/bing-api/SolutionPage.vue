<script setup lang="ts">
import BaseCheck from '../reusbale/BaseCheck.vue';
import BaseLink from '../ui/BaseLink.vue';


</script>

<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-8 py-24">

        <div class="flex flex-col md:flex-row items-center justify-between w-full px-4 gap-8 pb-12">

            <div class="md:w-1/2 space-y-6">
                <h2 class="text-xl md:text-2xl lg:text-2xl text-blue-950 text-start">
                    Find Everything You Need with Bing! - Images, News, and Shopping
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                   Bing makes searching simple. Whether it's trending images, the latest headlines, or top shopping offers, everything you need is just one click away.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Find the Perfect Images</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Stay Informed with Breaking News</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Shop Smarter, Save Time</NuxtLink>
                    </div>

                </div>
            </div>

            <div class="md:w-1/2 flex justify-center">
                <img src="/images/bingSerpApi/bing-all-in-one-search-features.png" alt="Specific Devices"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div class="space-y-4">
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
                <img src="/images/bingSerpApi/bing-search-results-data.png" alt="bing search"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="text-xl md:text-2xl lg:text-2xl text-blue-950 text-start">
                   Bing It Better: The Smarter Way to Search and Find
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                    Bing offers fast, reliable, and organized search results, providing localized content, images, and translations for a seamless, productive search experience.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Accurate and Relevant Results</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Multimedia Search for Images and Videos</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Personalized Search Suggestions</NuxtLink>
                    </div>

                       <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Comprehensive Web Search</NuxtLink>
                    </div>

                </div>
            </div>

        </div>

        <div class="flex flex-col md:flex-row items-center justify-between px-4 gap-8 pb-12">

            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="text-xl md:text-2xl lg:text-2xl text-blue-950 text-start">
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
                <img src="/images/bingSerpApi/scraping-infrastructure.png" alt="scraping infrastructre"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

        </div>
    </div>
</template>
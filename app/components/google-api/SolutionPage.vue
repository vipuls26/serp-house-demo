<script setup lang="ts">
import BaseCheck from '../reusbale/BaseCheck.vue';
import BaseLink from '../ui/BaseLink.vue';


</script>

<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-8 py-24">

        <div class="flex justify-center px-4">
            <h1 class="text-center text-blue-950 text-2xl">Google SERP API for any type of Structure JSON SERP data</h1>
        </div>

        <div class="px-4 py-12 lg:px-8">

            <div class="flex flex-wrap gap-8 justify-center md:gap-12 lg:gap-24 items-center">

                <div class="m-w-[30%]">
                    <div class="flex items-center border-2 p-3 border-violet-500 rounded-lg">
                        <img src="/images/googleSerpApi/search-logo.png" alt="search logo" class="h-12 w-12">
                    </div>
                    <p class="text-center text-lg">Search</p>
                </div>

                <div class="m-w-[30%]">
                    <div class="flex items-center border-2 p-3 border-violet-500 rounded-lg">
                        <img src="/images/googleSerpApi/shopping-logo.png" alt="shopping" class="h-12 w-12">
                    </div>
                    <p class="text-center text-lg">Search</p>
                </div>

                <div class="m-w-[30%]">
                    <div class="flex items-center border-2 p-3 border-violet-500 rounded-lg">
                        <img src="/images/googleSerpApi/map-logo.png" alt="map logo" class="h-12 w-12">
                    </div>
                    <p class="text-center text-lg">Search</p>
                </div>

                <div class="m-w-[30%]">
                    <div class="flex items-center border-2 p-3 border-violet-500 rounded-lg">
                        <img src="/images/googleSerpApi/images-logo.png" alt="image logo" class="h-12 w-12">
                    </div>
                    <p class="text-center text-lg">Search</p>
                </div>

                <div class="m-w-[30%]">
                    <div class="flex items-center border-2 p-3 border-violet-500 rounded-lg">
                        <img src="/images/googleSerpApi/news-logo.png" alt="news logo" class="h-12 w-12">
                    </div>
                    <p class="text-center text-lg">Search</p>
                </div>

            </div>

        </div>


        <div class="flex flex-col md:flex-row items-center justify-between w-full px-4 gap-8 pb-12">

            <div class="md:w-1/2 space-y-6">
                <h2 class="text-xl text-blue-950 text-start">
                    Get it All in One Search - Images, Breaking News, and Shopping
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                    Find the most relevant images, stay updated with the the latest news, and explore a variety of
                    shopping options all from one search interface.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Visual Search, Made Simple</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Get Instant Updates On Breaking News</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Shop Smarter With Google Shopping</NuxtLink>
                    </div>

                </div>
            </div>

            <div class="md:w-1/2 flex justify-center">
                <img src="/images/googleSerpApi/get-all-in-one-search.png" alt="Specific Devices"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>
        </div>


        <div>
            <div class="px-1">
                <h1 class="text-center text-blue-950 text-2xl pb-3">Our complete Google SERP API covers all available
                    features & Filters</h1>
                <p class="text-center text-slate-600 wrap-break-word">Google search has a many filters, those you can
                    automate using SERPHouse Google SERP API</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 xl:px-12 py-6">

                <div class="flex items-start ring-1 ring-slate-300 p-5 rounded-lg gap-3">
                    <img src="/images/googleSerpApi/verbatim-logo.png" alt="verbatim logo" class="shrink-0 h-6">
                    <div>
                        <p class="font-semibold text-blue-950">Verbatim</p>
                        <p class="text-sm text-gray-700">Verbatim is a Google search option that returns results that
                            match the search terms exactly
                            as they appear in the search box.</p>
                    </div>
                </div>

                <div class="flex items-start ring-1 ring-slate-300 p-5 rounded-lg gap-3">
                    <img src="/images/googleSerpApi/result-time-result-logo.png" alt="result time logo"
                        class="shrink-0 h-8">
                    <div>
                        <p class="font-semibold text-blue-950">Result Time</p>
                        <p class="text-sm text-gray-700">It can be used to Filter results by a specific date or time
                            period.</p>
                    </div>
                </div>

                <div class="flex items-start ring-1 ring-slate-300 p-5 rounded-lg gap-3">
                    <img src="/images/googleSerpApi/top-results-logo.png" alt="top result logo" class="shrink-0 h-8">
                    <div>
                        <p class="font-semibold text-blue-950">Top 100 Results</p>
                        <p class="text-sm text-gray-700">Our API by default returns top 100 results of search terms,
                            However, you can limit it by using num_results request params.</p>
                    </div>
                </div>

                <div class="flex items-start ring-1 ring-slate-300 p-5 rounded-lg gap-3">
                    <img src="/images/googleSerpApi/geo-targeting-logo.png" alt="geo targeting logo"
                        class="shrink-0 h-8">
                    <div>
                        <p class="font-semibold text-blue-950">Geo-Targeting</p>
                        <p class="text-sm text-gray-700">You can narrow down your search by specific locations, such as
                            countries, cities, or territories. You can also target a radius around a location.</p>
                    </div>
                </div>

            </div>

        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center xl:px-12 py-6">

            <div class="space-y-4 border-r-0 sm:border-r-2 sm:border-violet-500">
                <h2 class="text-lg text-center md:text-start font-semibold text-blue-950">
                    Enterprise Scaling
                </h2>

                <p class="text-gray-600 text-center md:text-start pr-2">
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
                <img src="/images/googleSerpApi/google-search-results-data.png" alt="google search"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="text-xl text-blue-950 text-start">
                    Google Search results data at your fingertips for all search parameters
                </h2>
                <p class="text-gray-600 text-sm leading-relaxed max-w-lg text-start">
                    Access comprehensive Google Search results instantly, covering all search parameters for complete
                    insights.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Various Search Types</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Supports All Languages</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Pagination Supported</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">99.9% Success Rate</NuxtLink>
                    </div>

                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Free Geo-Location Targeting</NuxtLink>
                    </div>
                    <div class="flex items-center gap-3">
                        <BaseCheck />
                        <NuxtLink href="#" class="text-gray-800 text-sm">Compatible With Multiple Sevices</NuxtLink>
                    </div>


                </div>
            </div>

        </div>

        <div class="flex flex-col md:flex-row items-center justify-between px-4 gap-8 pb-12">

            <div class="w-full md:w-1/2 space-y-6">
                <h2 class="text-xl text-blue-950 text-start">
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
                <img src="/images/googleSerpApi/scraping-infrastructure.png" alt="scraping infrastructre"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

        </div>

    </div>
</template>
<script setup>
import BaseDescription from '../reusbale/BaseDescription.vue';

</script>

<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4 space-y-8">

        <div class="flex flex-col md:flex-row items-center justify-between gap-12">

            <div class="w-full md:w-1/2 flex justify-center">
                <img src="/images/homePage/serp-data-api.png" alt="Real-Time SERP Data"
                    class="w-full max-w-xl object-contain">
            </div>

            <div class="w-full md:w-1/2 space-y-6">

                <h2 class="text-2xl md:text-3xl text-blue-950 text-center md:text-start">
                    What Is A SERP API?
                </h2>

                <p class="text-gray-600 text-sm md:text-base text-center md:text-start">
                    A SERP API (Search Engine Results Page API) lets you programmatically
                    extract search result data from engines like Google, Bing, and Yahoo.
                    SERPHouse turns complex HTML SERPs into clean, structured JSON — so
                    you can track keywords, power SEO dashboards, or analyze competitor
                    insights with ease.
                </p>

                <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">

                    <div class="flex justify-center items-center gap-2">
                        <NuxtLink to="/serp-api-playground"
                            class="text-xs l:text-sm md:text-base text-violet-500 font-semibold whitespace-nowrap underline underline-offset-8">
                            SERP API Playground
                        </NuxtLink>

                        <img src="/images/homePage/arrow-primary.png" alt="arrow" class="h-3 w-auto shrink-0">
                    </div>

                    <div class="flex justify-center items-center gap-2">
                        <NuxtLink to="#"
                            class="text-xs l:text-sm md:text-base text-violet-500 font-semibold whitespace-nowrap underline underline-offset-8">
                            API Documentation
                        </NuxtLink>

                        <img src="/images/homePage/arrow-primary.png" alt="arrow" class="h-3 w-auto shrink-0">
                    </div>

                </div>

            </div>

        </div>

        <div class="py-12">
            <h2 class="text-xl md:text-3xl lg:text-3xl text-blue-950 text-center py-10">
                Key Features
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 md:gap-3  lg:grid-cols-3 lg:gap-6 space-y-4">

                <div class="px-5 ring-1 ring-slate-300 rounded-2xl z-10 p-4">
                    <p class="text-blue-950">Multi-Search Support</p>
                    <p class="text-slate-700 text-sm">Web, Image, News SERPs for Google, Bing & Yahoo</p>
                    <div class="flex justify-end">
                        <img src="/images/homePage/multi-search-support.png" alt="multi-search-support">
                    </div>
                </div>

                <div class="px-5 ring-1 ring-slate-300 rounded-2xl z-10 p-4">
                    <p class="text-blue-950">Device Targeting</p>
                    <p class="text-slate-700 text-sm">Simulate Desktop and Mobile results</p>
                    <div class="flex justify-end">
                        <img src="/images/homePage/device-targeting.png" alt="device-device">
                    </div>
                </div>

                <div class="px-5 ring-1 ring-slate-300 rounded-2xl z-10 p-4">
                    <p class="text-blue-950">Location Targeting</p>
                    <p class="text-slate-700 text-sm">Query any city, state, or country with localized results</p>
                    <div class="flex justify-end">
                        <img src="/images/homePage/location-targeting.png" alt="location-targeting">
                    </div>
                </div>

                <div class="px-5 ring-1 ring-slate-300 rounded-2xl z-10 p-4">
                    <p class="text-blue-950">Webhooks</p>
                    <p class="text-slate-700 text-sm">Push data directly to your server when results are ready</p>
                    <div class="flex justify-end">
                        <img src="/images/homePage/serp-webhooks.png" alt="serp-webhooks">
                    </div>
                </div>

                <div class="px-5 ring-1 ring-slate-300 rounded-2xl z-10 p-4">
                    <p class="text-blue-950">Fast & Scalable</p>
                    <p class="text-slate-700 text-sm">Handles captchas, proxies & queues behind the scenes</p>
                    <div class="flex justify-end">
                        <img src="/images/homePage/fast-and-scalable.png" alt="fast-scalable">
                    </div>
                </div>

                <div class="px-5 ring-1 ring-slate-300 rounded-2xl z-10 p-4">
                    <p class="text-blue-950">Bulk Requests
                    </p>
                    <p class="text-slate-700 text-sm">Submit up to 100 queries per batch for high-volume processing</p>
                    <div class="flex justify-end">
                        <img src="/images/homePage/bulk-requests.png" alt="bulk-reuest">
                    </div>
                </div>

            </div>
        </div>


        <!-- logo -->
        <div class="flex flex-col lg:flex-row md:items-center md:justify-between gap-5">

            <h2 class="text-base text-blue-950 text-center md:text-left">
                Explore Our Search Engine APIs
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

                <NuxtLink to="/#"
                    class="flex items-center justify-center gap-1 ring-1 ring-slate-300 rounded-lg px-3 py-1.5 text-gray-700 whitespace-nowrap">
                    <img src="/images/homePage/google-serp-logo.png" alt="Google" class="h-5 w-5 object-contain">
                    <span>Google SERP API</span>
                </NuxtLink>

                <NuxtLink to="/#"
                    class="flex items-center justify-center gap-1 ring-1 ring-slate-300 rounded-lg px-3 py-1.5 text-gray-700 whitespace-nowrap">
                    <img src="/images/homePage/bing-serp-logo.png" alt="Bing" class="h-5 w-5 object-contain">
                    <span>Bing SERP API</span>
                </NuxtLink>

                <NuxtLink to="/#"
                    class="flex items-center justify-center gap-1 ring-1 ring-slate-300 rounded-lg px-3 py-1.5 text-gray-700 whitespace-nowrap">
                    <img src="/images/homePage/yahoo-serp-logo.png" alt="Yahoo" class="h-5 w-5 object-contain">
                    <span>Yahoo SERP API</span>
                </NuxtLink>

            </div>

        </div>

        <!-- seo -->
        <div class="py-12 mx-auto">
            <h2 class="text-blue-950 font-medium text-center text-2xl">Who It's For</h2>
            <p class="pt-2 text-center text-slate-700">Perfect for Developers, SEOs, and Agencies</p>

            <div class="grid grid-cols-1 md:grid-cols-2 mx-auto space-y-6 pt-8">
                <div class="flex gap-4">
                    <BaseDescription />
                    <p class="text-sm text-slate-600">Build Rank Trackers With Live Serp Data</p>
                </div>

                <div class="flex gap-4">
                    <BaseDescription />
                    <p class="text-sm text-slate-600">Monitor Keyword Visibility At Scale</p>
                </div>

                <div class="flex gap-4">
                    <BaseDescription />
                    <p class="text-sm text-slate-600">Fuel Seo Tools With Real-Time Search Intelligence</p>
                </div>

                <div class="flex gap-4">
                    <BaseDescription />
                    <p class="text-sm text-slate-600">Run Competitive Analysis In Any Location Or Device</p>
                </div>

                <div class="flex gap-4">
                    <BaseDescription />
                    <p class="text-sm text-slate-600">Automate Keyword Monitoring Via Webhooks</p>
                </div>
            </div>


            <div class="flex justify-center pt-8">

                <div class="flex flex-row gap-8 border border-violet-500 border-dashed p-4 rounded-lg justify-center">
                    <p>See It In Action In The</p>

                    <div class="flex flex-row items-center gap-2">
                        <NuxtLink to="/serp-api-playground"
                            class="text-xs l:text-sm md:text-base text-violet-500 font-semibold whitespace-nowrap underline underline-offset-8">
                            SERP API Playground
                        </NuxtLink>
                        <img src="/images/homePage/arrow-primary.png" alt="arrow" class="h-3 w-auto shrink-0">
                    </div>
                </div>

            </div>

        </div>




    </div>
</template>
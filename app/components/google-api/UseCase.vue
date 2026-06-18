<script setup>
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-8 space-y-12 py-12">

        <h1 class="text-center text-blue-950 text-xl md:text-2xl">
            Use Cases For Our SERP API</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="flex flex-col gap-3 p-3 rounded-lg
                        ring-1 ring-gray-300
                        border-b-4 border-transparent
                        hover:border-violet-500
                        transition-all duration-300">

                <div class="flex justify-center">
                    <img src="/images/homePage/seo-use-cases.png" alt="seo use case" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Page Index Checker</p>

                <p class="text-sm text-slate-600 px-8 text-center">Quickly verify which of your web pages are indexed by
                    search engines to improve visibility.</p>

            </div>

            <div class="flex flex-col gap-3 p-3 rounded-lg
                        ring-1 ring-gray-300
                        border-b-4 border-transparent
                        hover:border-violet-500
                        transition-all duration-300">
                <div class="flex justify-center">
                    <img src="/images/homePage/lead-generation.png" alt="lead generation" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Keyword Rank Tracker</p>

                <p class="text-sm text-slate-600 px-8 text-center">Monitor your keyword rankings in real time to
                    optimize your SEO strategy
                </p>

            </div>

            <div class="flex flex-col gap-3 p-3 rounded-lg
                        ring-1 ring-gray-300
                        border-b-4 border-transparent
                        hover:border-violet-500
                        transition-all duration-300">
                <div class="flex justify-center">
                    <img src="/images/homePage/e-commerce-use-cases.png" alt="e-commerce use case" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Ad Tracker</p>

                <p class="text-sm text-slate-600 px-8 text-center">Track your ad performance across platforms and
                    enhance campaign effectiveness.
                </p>

            </div>

            <div class="flex flex-col gap-3 p-3 rounded-lg
                        ring-1 ring-gray-300
                        border-b-4 border-transparent
                        hover:border-violet-500
                        transition-all duration-300">
                <div class="flex justify-center">
                    <img src="/images/homePage/digital-marketing-use-cases.png" alt="Local SEO" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Local SEO </p>

                <p class="text-sm text-slate-600 px-8 text-center">Optimize your online presence for local searches to
                    attract nearby customers.</p>
            </div>

        </div>
    </div>

    <div
        class="mx-auto max-w-360 sm:px-6 lg:px-3 xl:px-16 pb-8 space-y-12  grid gap-8 rounded-3xl bg-white px-6 py-10 shadow-sm md:grid-cols-2 md:items-center md:px-10">

        <div>
            <h2
                class="text-center text-xl xl:text-4xl leading-tight text-blue-950 md:text-left md:text-2xl lg:text-3xl">
                Experience The SERP API For Yourself.
            </h2>

            <p class="text-center text-sm text-gray-500 mt-3 md:text-left xl:text-lg">
                Explore the Scraper APIs Playground on the Oxylabs dashboard for hands-on interaction with our
                APIs, and access detailed technical documentation for all the essential information.
            </p>
        </div>

        <div class="flex flex-col items-center gap-5 md:items-end md:justify-self-end">
            <div class="flex justify-center md:justify-end">
                <BaseLink name="Signup now" />
            </div>

            <div class="flex flex-wrap items-center justify-center gap-3 text-center md:justify-end md:text-right">
                <img src="/images/homePage/credit-card-off.png" alt="Credit card" class="h-5 w-5 opacity-70" />
                <span class="text-sm font-medium text-slate-500 sm:text-base">
                    No Credit Card Required
                </span>
            </div>
        </div>

    </div>

</template>
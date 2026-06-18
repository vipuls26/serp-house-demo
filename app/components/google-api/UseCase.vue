<script setup>
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>

    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-8 space-y-12 py-12">

        <h1 class="text-center text-blue-950 text-xl md:text-2xl">
            Use Cases of Google News API</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div class="group flex flex-col gap-3 p-8 rounded-2xl border border-transparent
                            transition-all duration-300 ease-in-out
                            hover:border-violet-200 hover:shadow-lg
                            hover:-translate-y-2
                        ">
                <p class="text-lg text-blue-950 transition-colors duration-300 group-hover:text-violet-500">
                    Brand & Reputation Monitoring
                </p>

                <p class="text-base text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    Track how companies, products, or individuals appear
                    across Google News results. Monitor media coverage,
                    emerging narratives, and publisher activity.
                </p>

                <span class="h-0.5 w-15 bg-violet-500 transition-all duration-300 group-hover:w-20"></span>
            </div>

            <div class="group flex flex-col gap-3 p-8 rounded-2xl border border-transparent
                            transition-all duration-300 ease-in-out
                            hover:border-violet-200 hover:shadow-lg
                            hover:-translate-y-2
                        ">
                <p class="text-lg text-blue-950 transition-colors duration-300 group-hover:text-violet-500">
                    SEO & News Visibility Analysis
                </p>

                <p class="text-base text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    Understand which stories surface for target keywords. Analyze news ranking behavior, placement
                    shifts, and publisher presence within Google News.
                </p>

                <span class="h-0.5 w-15 bg-violet-500 transition-all duration-300 group-hover:w-20"></span>
            </div>

            <div class="group flex flex-col gap-3 p-8 rounded-2xl border border-transparent
                            transition-all duration-300 ease-in-out
                            hover:border-violet-200 hover:shadow-lg
                            hover:-translate-y-2
                        ">
                <p class="text-lg text-blue-950 transition-colors duration-300 group-hover:text-violet-500">
                    Market & Trend Research
                </p>

                <p class="text-base text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    Identify breaking stories, rising topics, and regional developments using real-time news search
                    data.
                </p>

                <span class="h-0.5 w-15 bg-violet-500 transition-all duration-300 group-hover:w-20"></span>
            </div>

            <div class="group flex flex-col gap-3 p-8 rounded-2xl border border-transparent
                            transition-all duration-300 ease-in-out
                            hover:border-violet-200 hover:shadow-lg
                            hover:-translate-y-2
                        ">
                <p class="text-lg text-blue-950 transition-colors duration-300 group-hover:text-violet-500">
                    Competitive Intelligence
                </p>

                <p class="text-base text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    Observe competitor mentions, media exposure, and news coverage patterns across industries and
                    locations.
                </p>

                <span class="h-0.5 w-15 bg-violet-500 transition-all duration-300 group-hover:w-20"></span>
            </div>

            <div class="group flex flex-col gap-3 p-8 rounded-2xl border border-transparent
                            transition-all duration-300 ease-in-out
                            hover:border-violet-200 hover:shadow-lg
                            hover:-translate-y-2
                        ">
                <p class="text-lg text-blue-950 transition-colors duration-300 group-hover:text-violet-500">
                    Content Aggregation & News Platforms
                </p>

                <p class="text-base text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    Power news feeds, alerts, and research tools with structured Google News API data.
                </p>

                <span class="h-0.5 w-15 bg-violet-500 transition-all duration-300 group-hover:w-20"></span>
            </div>

            <div class="group flex flex-col gap-3 p-8 rounded-2xl border border-transparent
                            transition-all duration-300 ease-in-out
                            hover:border-violet-200 hover:shadow-lg
                            hover:-translate-y-2
                        ">
                <p class="text-lg text-blue-950 transition-colors duration-300 group-hover:text-violet-500">
                    Financial & Industry Monitoring
                </p>

                <p class="text-base text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    Track company announcements, sector updates, and economic events appearing in Google News.
                </p>

                <span class="h-0.5 w-15 bg-violet-500 transition-all duration-300 group-hover:w-20"></span>
            </div>

        </div>
    </div>

    <div
        class="mx-auto max-w-360 sm:px-6 lg:px-3 xl:px-16 pb-8 space-y-12  grid gap-8 rounded-3xl bg-white px-6 py-10 shadow-sm md:grid-cols-2 md:items-center md:px-10">

        <div>
            <h2
                class="text-center text-xl xl:text-4xl leading-tight text-blue-950 md:text-left md:text-2xl lg:text-3xl">
                Test the API with Free Credits
            </h2>

            <p class="text-center text-sm text-gray-500 mt-3 md:text-left xl:text-lg">
               Use free credits to test requests, responses, and integrations.
            </p>
        </div>

        <div class="flex flex-col items-center gap-5 md:items-end md:justify-self-end">
            <div class="flex justify-center md:justify-end">
                <BaseLink name="Get Free Credits" />
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
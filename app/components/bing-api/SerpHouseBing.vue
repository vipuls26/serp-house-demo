<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseArrow from '../reusbale/BaseArrow.vue';
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>

    <BaseContainer class="pb-4 space-y-6">


        <h1 class="text-center text-2xl font-medium text-blue-950 mb-8">
            Why Choose SERPHouse For Bing SERP Data?
        </h1>

        <div class="flex flex-col md:flex-row items-center gap-4">

            <div class="w-full md:w-2/3">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 md:px-0">

                    <div class="flex items-start gap-2">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                Real Time Data:
                            </h3>
                            <p class="text-sm text-gray-600">
                                Access Live Bing Search Engine Results pages.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-2">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                Historical Data:
                            </h3>
                            <p class="text-sm text-gray-600">
                                Retrieve past SERP data for in-depth analysis.
                            </p>
                        </div>

                    </div>

                    <div class="flex items-start gap-4">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                Cost-Effective Solution:
                            </h3>
                            <p class="text-sm text-gray-600">
                                Affordable plans to suit your needs.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                99% Uptime:
                            </h3>

                            <p class="text-sm text-gray-600">
                                View results specific to any location.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                Accuracy & Reliability:
                            </h3>

                            <p class="text-sm text-gray-600">
                                Trust in precise and dependable SERP results.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                Instant Updates:
                            </h3>

                            <p class="text-sm text-gray-600">
                                Stay ahead of the curve with real-time data.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                Advanced Filtering:
                            </h3>

                            <p class="text-sm text-gray-600">
                                Tailor Your Queries for precise information.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4">
                        <BaseArrow class="shrink-0 mt-1" />

                        <div>
                            <h3 class="text-lg font-medium text-blue-950 mb-1">
                                24/7 Support:
                            </h3>

                            <p class="text-sm text-gray-600">
                                Get assistance whenever you need it.
                            </p>
                        </div>
                    </div>

                </div>
            </div>


            <div class="w-full md:w-1/3 flex justify-center">
                <img src="/images/bingSerpApi/bing-api-use.png" alt="bing api use" class="max-w-full h-auto">
            </div>

        </div>

        <div
            class="mx-auto grid gap-8 rounded-3xl bg-white px-6 py-10 shadow-sm md:grid-cols-2 md:items-center md:px-10">

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


    </BaseContainer>
</template>
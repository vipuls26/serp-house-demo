<script setup>
import BaseLink from '../ui/BaseLink.vue';
</script>

<template>
    <section class="bg-slate-50 py-16 lg:py-20">
        <div class="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">

            <div
                class="mx-auto grid max-w-5xl gap-8 rounded-3xl bg-white px-6 py-10 shadow-sm md:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.9fr)] md:items-center md:px-10">

                <div>
                    <h2 class="text-center text-3xl font-semibold leading-tight text-slate-900 md:text-left lg:text-4xl">
                        Experience The SERP API For Yourself.
                    </h2>

                    <p class="mt-5 text-center text-base leading-7 text-slate-600 md:text-left">
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

            <div class="mx-auto max-w-3xl space-y-4">
                <h2 class="text-center text-3xl font-semibold text-slate-900">
                    API Playground
                </h2>

                <p class="text-center text-lg leading-8 text-slate-600 break-words-1">
                    SERPHouse effortlessly powers your SEO apps and services. Try our complete and easy to use API.
                </p>
            </div>

        </div>
    </section>
</template>

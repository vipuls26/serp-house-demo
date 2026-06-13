<script setup>
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 py-12">


        <div class="rounded-2xl px-8 py-12 lg:px-12 lg:py-14">

            <div class="flex flex-row lg:items-center lg:justify-between gap-10">


                <div class="max-w-full">
                    <h1 class="text-3xl leading-tight">
                        Experience The SERP API For Yourself.
                    </h1>

                    <p class="mt-6 text-md text-gray-700 leading-relaxed">
                        Explore the Scraper APIs Playground on the Oxylabs
                        dashboard for hands-on interaction with our APIs,
                        and access detailed technical documentation for all
                        the essential information.
                    </p>
                </div>


                <div class="flex flex-col items-start lg:items-center gap-6 shrink-0 pt-8">

                    <BaseLink link="/auth/register" name="Signup now" />

                    <div class="flex items-center gap-3 text-gray-700 font-medium">
                        <img src="/images/homePage/credit-card-off.png" alt="Credit card" class="w-6 h-6" />

                        <span>No Credit Card Required</span>
                    </div>

                </div>

            </div>

        </div>

        <div class="flex flex-col space-y-6">
            <h1 class="text-center text-2xl">API Playground
            </h1>
            <p class="text-center wrap-break-word text-xl text-slate-600">SERPHouse effortlessly powers your SEO apps and services. Try our complete and easy to use API</p>
        </div>

    </div>
</template>
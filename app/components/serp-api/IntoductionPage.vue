<script setup lang="ts">
import BaseDescription from '../reusbale/BaseDescription.vue';

</script>

<template>

    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4 space-y-6">

        <!-- logo -->
        <div class="max-w-3xl w-full mx-auto pt-8 pb-4">
            <div class="grid grid-cols-1 l:grid-cols-2 md:grid-cols-3 gap-8 py-6 mx-auto">

                <NuxtLink to="/" class="flex items-center justify-center gap-7 bg-gray-100 p-3 rounded-xl shadow-xl/10">
                    <img src="/images/homePage/google-serp-logo.png" alt="Google Logo">
                    <p>Google.com</p>
                </NuxtLink>

                <NuxtLink to="/" class="flex items-center justify-center gap-7 bg-gray-100 p-3 rounded-xl shadow-xl/10">
                    <img src="/images/homePage/bing-serp-logo.png" alt="Bing Logo">
                    <p>Bing.com</p>
                </NuxtLink>

                <NuxtLink to="/" class="flex items-center justify-center gap-7 bg-gray-100 p-3 rounded-xl shadow-xl/10">
                    <img src="/images/homePage/yahoo-serp-logo.png" alt="Yahoo Logo">
                    <p>Yahoo.com</p>
                </NuxtLink>

            </div>
        </div>

        <!-- rating -->
        <div class="flex flex-wrap items-center justify-center gap-3.75 md:justify-center ">

            <p class="font-medium text-slate-900">
                Excellent
            </p>

            <NuxtLink to="https://www.trustpilot.com/review/serphouse.com" target="_blank"
                class="flex items-center gap-3.75">
                <img src="/images/homePage/stars-4.5.svg" alt="Trustpilot"
                    class="w-full max-w-28 min-[1441px]:max-w-36" />

                <p class="font-medium text-slate-900">
                    4.7 review on
                </p>
            </NuxtLink>

            <div class="flex items-center gap-2">
                <img src="/images/homePage/one-star.png" alt="Trustpilot" class="max-w-6" />

                <p class="font-medium text-slate-900">
                    Trustpilot
                </p>
            </div>

        </div>

        <!-- real time api -->
        <div class="flex pt-8 justify-center mx-auto">
            <h1 class="text-center text-blue-950 text-4xl font-medium">Real-Time SERP API for Google, Bing & Yahoo</h1>
        </div>

        <div class="flex items-center pt-4 w-full">
            <p class="text-base text-slate-700 px-8 text-center">Get real-time SERP data from Google, Bing & Yahoo — no
                blocks, no delays. With our Free SERP API, you
                can extract search results and use them in your app right away.</p>
        </div>

        <div class="flex flex-col gap-2 md:flex-row md:flex-wrap md:justify-center pt-4">

            <div class="flex items-center gap-2 md:w-[45%]">
                <BaseDescription />
                <p class="text-slate-700 text-sm">
                    Trusted by 500+ developers & SEO teams
                </p>
            </div>

            <div class="flex items-center gap-1 md:w-[45%]">
                <BaseDescription />
                <p class="text-slate-700 text-sm">
                    100% CAPTCHA and proxy management
                </p>
            </div>

            <div class="flex items-center gap-1 md:w-[40%]">
                <BaseDescription />
                <p class="text-slate-700 text-sm">
                    99.9% guaranteed API uptime
                </p>
            </div>

        </div>

    </div>
</template>

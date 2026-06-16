<script setup>
import BaseDescription from '../reusbale/BaseDescription.vue';
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
    <section class="bg-white">
        <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-8 xl:px-12 space-y-16 py-12">
            <div class="grid items-center gap-12 md:grid-cols-2">
                <div class="md:py-6">
                    <div class="flex flex-wrap items-center justify-center gap-3.75 md:justify-start">

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

                    <div class="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">

                        <h1 class="text-center text-5xl font-bold leading-none text-blue-950 md:text-left md:text-6xl">
                            SERP API
                        </h1>

                        <div class="inline-flex items-center gap-2 rounded-full border border-violet-500 px-4 py-2.5">
                            <img src="/images/homePage/bing-btn.png" alt="Yahoo" class="h-6 w-6" />

                            <span class="font-medium text-slate-900">
                                Yahoo
                            </span>
                        </div>

                    </div>

                    <h2 class="mt-4 text-center text-lg text-slate-700 md:text-left">
                        Your Shortcut to SERP Data Insights With Our SERP Scraper.
                    </h2>

                    <div class="mt-6 space-y-4">

                        <div class="flex items-start gap-3">
                            <BaseDescription />
                            <p class="text-sm text-slate-700 leading-relaxed">
                                Reduce data extraction costs with a maintenance-free solution.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <BaseDescription />
                             <p class="text-sm text-slate-700 leading-relaxed">
                                Real-time SERP data with geo and device targeting, delivered in JSON and HTML.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <BaseDescription />
                             <p class="text-sm text-slate-700 leading-relaxed">
                                High exceptional performance at any scale.
                            </p>
                        </div>

                        <div class="flex items-start gap-3">
                            <BaseDescription />
                             <p class="text-sm text-slate-700 leading-relaxed">
                                Pay on successful data response.
                            </p>
                        </div>

                    </div>

                    <div class="mt-6 flex flex-col gap-2 min-[400px]:flex-row min-[400px]:flex-wrap">

                        <div class="flex items-center gap-2">
                            <i class="pi pi-check text-violet-500"></i>
                            <span class="font-semibold text-slate-700">
                                No Captcha, no blocks
                            </span>
                        </div>

                        <div class="flex items-center gap-2">
                            <i class="pi pi-check text-violet-500"></i>
                            <span class="font-semibold text-slate-700">
                                Enterprise Scaling
                            </span>
                        </div>

                        <div class="flex items-center gap-2">
                            <i class="pi pi-check text-violet-500"></i>
                            <span class="font-semibold text-slate-700">
                                24/7 Support
                            </span>
                        </div>

                    </div>

                    <div class="mt-8 flex flex-wrap items-center justify-center gap-6 md:justify-start">
                        <BaseLink name="Activate Free Trial" link="/auth/register" />

                        <BaseLink name="View Pricing" varient="tertiary" link="/pricing" />
                    </div>

                    <div class="mt-6 flex items-center justify-center gap-3 md:justify-start">
                        <img src="/images/homePage/credit-card-off.png" alt="No Credit Card Required" class="h-6 w-6" />

                        <span class="text-slate-700">
                            No Credit Card Required
                        </span>
                    </div>

                </div>

                <div class="flex justify-center">
                    <img src="/images/homePage/serp-apis.webp" alt="SERP API"
                        class="w-full max-w-sm md:max-w-xs lg:max-w-md" />
                </div>

            </div>
        </div>
    </section>
</template>
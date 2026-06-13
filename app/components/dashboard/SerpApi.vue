<script setup>
import BaseDescription from '../reusbale/BaseDescription.vue';
import BaseStart from '../reusbale/BaseStart.vue';
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
    <section class="">
        <div class="max-w-7xl mx-auto px-6 py-16">

            <div class="flex flex-col-reverse lg:flex-row items-center gap-12">

                <div class="w-full lg:w-1/2">

                    <div class="flex flex-wrap items-center justify-center md:justify-start gap-4">

                        <span class="text-lg font-semibold">
                            Excellent
                        </span>

                        <span class="flex items-center gap-1">
                            <BaseStart />
                            <BaseStart />
                            <BaseStart />
                            <BaseStart />
                            <BaseStart />
                        </span>

                        <span class="text-lg">
                            4.7 Review On
                        </span>

                        <span class="flex items-center gap-2 text-lg font-semibold">
                            <BaseStart />
                            Trustpilot
                        </span>

                    </div>

                    <div class="mt-8 flex flex-col xl:flex-row xl:items-center gap-4">
                        <h1 class="text-5xl md:text-6xl font-bold text-[#26175c] leading-none">
                            SERP API
                        </h1>

                        <div
                            class="inline-flex items-center justify-center border border-violet-500 rounded-full px-6 py-2 w-fit">
                            <p>Yahoo</p>
                        </div>
                    </div>


                    <h2 class="mt-8 text-2xl font-semibold text-slate-800 leading-relaxed">
                        Your Shortcut to SERP Data Insights With Our SERP Scraper.
                    </h2>


                    <div class="mt-8 space-y-5">

                        <div class="flex gap-4">

                            <BaseDescription />
                            <p class="text-lg text-slate-700">
                                Reduce operational costs on data extraction with no maintenance concerns.
                            </p>
                        </div>

                        <div class="flex gap-4">
                            <BaseDescription />
                            <p class="text-lg text-slate-700">
                                Real-time SERP data with geo and device targeting, delivered in JSON and HTML.
                            </p>
                        </div>

                        <div class="flex gap-4">
                            <BaseDescription />
                            <p class="text-lg text-slate-700">
                                High exceptional performance at any scale.
                            </p>
                        </div>

                        <div class="flex gap-4">
                            <BaseDescription />
                            <p class="text-lg text-slate-700">
                                Pay on successful data response.
                            </p>
                        </div>

                    </div>


                    <div class="mt-8 flex flex-wrap gap-x-8 gap-y-3">

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


                    <div class="mt-8 flex flex-wrap items-center gap-6">

                        <BaseLink name="Activate Free Trail" link="/auth/register" />

                        <BaseLink name="View Pricing" varient="tertiary" link="/pricing" />

                    </div>


                    <div class="mt-6 flex items-center gap-3">
                        <img src="/images/homePage/credit-card-off.png" alt="" class="w-6 h-6">
                        <span class="text-lg text-slate-700">
                            No Credit Card Required
                        </span>
                    </div>
                </div>


                <div class="w-full lg:w-1/2">
                    <img src="/images/homePage/serp-apis.webp" alt="SERP API" class="w-full h-auto">
                </div>

            </div>

        </div>
    </section>

</template>
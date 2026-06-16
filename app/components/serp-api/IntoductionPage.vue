<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4">

        <div class="max-w-3xl w-full mx-auto">
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


        <div class="max-w-xl w-full mx-auto pt-8">

            <h1 class="text-4xl font-medium text-blue-950 text-center">
                Real-Time SERP API for Google, Bing & Yahoo
            </h1>

            <p class="pt-3 text-sm text-center text-gray-500">
                Get real-time SERP data from Google, Bing & Yahoo — no blocks,
                no delays. With our Free SERP API, you can extract search
                results and use them in your app right away.
            </p>

        </div>


        <div class="w-full max-w-5xl mx-auto pt-8 px-4">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:justify-items-center">


                <div class="flex flex-row items-center gap-2">
                    <BaseDescription />
                    <p class="text-sm text-gray-700 font-medium">
                        Trusted by 500+ developers & SEO teams
                    </p>
                </div>


                <div class="flex flex-row items-center gap-2">
                    <BaseDescription />
                    <p class="text-sm text-gray-700 font-medium">
                        100% CAPTCHA and proxy management included
                    </p>
                </div>

                <div class="flex flex-row md:justify-items-center items-center gap-2">
                    <BaseDescription />
                    <p class="text-sm text-gray-700 font-medium">
                        99.9% guaranteed API uptime
                    </p>
                </div>

            </div>
        </div>


        <div class="w-full flex justify-center gap-4 pt-8">

            <BaseLink name="Get Started Free" varient="primary" />
            <BaseLink name="Try Now" varient="tertiary" />
        </div>

        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mx-auto w-full px-8 sm:px-6 lg:px-8 xl:px-32 space-y-16 py-12">

                <h2 class="text-center text-blue-950 s:text-sm m:text-base l:text-lg md:text-xl">
                    Used by the best developers and teams around the world
                </h2>

                <div class="swiper mt-10 overflow-hidden">
                    <div class="swiper-wrapper flex items-center gap-10">

                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-shopify.png" width="186.66" height="53" loading="lazy"
                                alt="Shopify" class="h-auto w-full object-contain">
                        </div>

                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-world-bank.png" width="186.66" height="36"
                                loading="lazy" alt="the world bank" class="h-auto w-full object-contain">
                        </div>

                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-hotstar.png" width="186.66" height="53" loading="lazy"
                                alt="Disney hotstar" class="h-auto w-full object-contain">
                        </div>

                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-dhl.png" width="186.66" height="25" loading="lazy"
                                alt="DHL" class="h-auto w-full object-contain">
                        </div>

                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-master-card.png" width="97" height="75" loading="lazy"
                                alt="Mastercard" class="max-w-14 md:max-w-20 h-auto object-contain">
                        </div>


                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-royalty-range.png" width="186.66" height="14"
                                loading="lazy" alt="Royalty Range" class="h-auto w-full object-contain">
                        </div>

                        <div class="swiper-slide flex shrink-0 items-center justify-center w-[186.66px]">
                            <img src="/images/homePage/customer-tcs.png" width="186.66" height="51" loading="lazy"
                                alt="TCS-Logo-Image" class="h-auto w-full object-contain">
                        </div>

                    </div>
                </div>

            </div>
        </div>

        <Review />

        <div class="mx-auto w-full px-2 sm:px-6 lg:px-8 xl:px-32  space-y-4">
            <h2 class="text-blue-950 text-center text-2xl font-medium">
                Start Extracting Serp Data In Seconds
            </h2>

            <div class="flex flex-col md:flex-row md:space-x-6 justify-center items-center">

                <div class="justify-start space-y-2">
                    <p class="flex items-center">
                        <span class="mr-2">
                            <BaseTick />
                        </span> 4,000 free searches
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2">
                            <BaseTick />
                        </span> No credit card required
                    </p>
                    <p class="flex items-center">
                        <span class="mr-2">
                            <BaseTick />
                        </span> Cancel at any time
                    </p>
                </div>

            </div>

            <div
                class="flex flex-col l:flex-row justify-center items-center space-y-4 l:space-y-0 l:space-x-4 py-2 pb-8">

                <NuxtLink to="#"
                    class="bg-violet-500 text-white font-medium text-sm text-center px-6 py-2.5 rounded-full">
                    Try Serp Api Now
                </NuxtLink>

                <NuxtLink to="/auth/register"
                    class="border border-violet-500 text-violet-500 hover:bg-violet-50 font-medium text-sm text-center px-8 py-3 rounded-full">
                    Get Started Free
                </NuxtLink>

            </div>

        </div>

    </div>
</template>


<script setup>
import BaseDescription from '../reusbale/BaseDescription.vue';
import BaseButton from '../ui/BaseButton.vue';
import BaseLink from '../ui/BaseLink.vue';
import Review from './Review.vue';

</script>

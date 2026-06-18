<script setup>
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4 space-y-6 py-12">

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

                    <h1 class="text-center text-4xl leading-none md:text-left">
                        <span class="text-blue-950 underline underline-offset-12 decoration-violet-500">Bing</span>

                        <span class="text-violet-500"> Images </span>
                        <span class="text-blue-950">API</span>
                    </h1>


                </div>

                <h2 class="mt-4 text-lg text-blue-950 pt-4">
                    Unlock Visually Compelling Insights from Bing Image Search
                </h2>

                <div class="mt-6 space-y-4 pt-6">

                    <p class="text-base text-slate-700 leading-relaxed">
                        Harness the power of Bing Image Search with our comprehensive API. Extract detailed data for
                        top-ranking images, including title, URL, size, source, and more. Uncover valuable insights into
                        user visual preferences, trending image topics, and competitor strategies. Analyze image
                        popularity, filter results by specific criteria, and inform your content creation with
                        data-driven decisions. Elevate your visual SEO and captivate your audience with powerful Bing
                        image insights.
                    </p>

                    <div class="pt-4">
                        <BaseLink name="Get Started" link="/auth/register" />
                    </div>

                </div>


            </div>

            <div class="flex justify-center">
                <img src="/images/bingSerpApi/bing-news-result-api.png" alt="SERP API"
                    class="w-full max-w-sm md:max-w-xs lg:max-w-md" />
            </div>

        </div>
    </div>
</template>
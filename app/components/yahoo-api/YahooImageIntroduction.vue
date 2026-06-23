<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
     <BaseContainer class="pb-4 space-y-6 py-12">

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
                        <span class="text-blue-950">Yahoo</span> <span class="text-violet-500">Image </span>
                        <span class="text-blue-950">API</span>
                    </h1>


                </div>

                <h2 class="mt-4 text-center text-lg text-slate-700 md:text-left">
                    Unleash The Power Of Yahoo Image Search With SERPHouse API
                </h2>

                <div class="mt-6 space-y-4 pt-6">

                    <div class="flex items-start gap-3">
                        <p class="text-base pl-4 text-slate-700 leading-relaxed">
                            Access high-quality image results to enhance your app's visual content. Optimize your image
                            search capabilities and improve user engagement with SERPHouse's Yahoo Image Results API.
                        </p>
                    </div>

                    <div class="pl-12 pt-4">
                        <BaseLink name="Get Started" link="/auth/register" />
                    </div>

                </div>


            </div>

            <div class="flex justify-center">
                <img src="/images/yahooSerpApi/yahooImage/yahoo-image-result-api.png" alt="Yahoo SERP API"
                    class="w-full max-w-sm md:max-w-xs lg:max-w-md" />
            </div>

        </div>
    </BaseContainer>
</template>
<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';
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

                    <h1 class="text-center text-3xl md:text-4xl md:text-left">
                        <span class="text-blue-950 px-1">Google</span>

                        <span class="text-violet-500">NEWS </span>
                        <span class="text-blue-950 px-1">API</span>
                    </h1>


                </div>

                <h2 class="mt-4 text-lg text-blue-950 pt-4">
                    SERPHouse - Google News API: Stay Ahead of the Curve with Real-time Headlines.
                </h2>

                <div class="mt-6 space-y-4 pt-6">

                    <p class="text-base text-slate-700 leading-relaxed">
                        Tap into global news trends with SERPHouse's Google News API, providing a comprehensive stream
                        of breaking articles. Stay informed across diverse topics, empowering applications and shaping
                        content strategies. Engage users with the latest developments using the influential capabilities
                        of Google News.
                    </p>

                    <div class="flex justify-center md:justify-start  pt-4">
                        <NuxtLink to="/auth/register"
                            class="bg-violet-500 text-white text-sm px-8 py-3 rounded-full font-bold w-full md:w-fit text-center">
                            Get Started
                        </NuxtLink>
                    </div>

                </div>


            </div>

            <div class="flex justify-center">
                <img src="/images/googleSerpApi/googleNews/google-news-api.png" alt="google news API"
                    class="w-full max-w-sm md:max-w-xs lg:max-w-md" />
            </div>

        </div>
    </BaseContainer>
</template>
<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';
</script>

<template>
    <BaseContainer class="pb-4 space-y-6 py-12">

        <h1 class="text-center text-blue-950 text-xl md:text-2xl">Use Cases For Our SERP API</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div class="flex flex-col gap-3">
                <div class="flex justify-center">
                    <img src="/images/bingSerpApi/seo-professionals.png" alt="seo professional" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">SEO Professionals</p>

                <p class="text-sm text-slate-600 px-8 text-center">Track keyword rankings and monitor SERP features.</p>

            </div>

            <div class="flex flex-col gap-3">
                <div class="flex justify-center">
                    <img src="/images/bingSerpApi/digital-marketers.png" alt="digital marketer" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Digital Marketers </p>

                <p class="text-sm text-slate-600 px-8 text-center">Analyze the performance of your marketing campaigns.
                </p>

            </div>

            <div class="flex flex-col gap-3">
                <div class="flex justify-center">
                    <img src="/images/bingSerpApi/data-analysts.png" alt="data analysts" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Data Analysts</p>

                <p class="text-sm text-slate-600 px-8 text-center">Use SERP data for market research and trend analysis.
                </p>

            </div>

            <div class="flex flex-col gap-3">
                <div class="flex justify-center">
                    <img src="/images/bingSerpApi/developers.png" alt="developers" class="h-12">
                </div>

                <p class="text-base text-blue-950 text-center">Developers </p>

                <p class="text-sm text-slate-600 px-8 text-center">Use our API to incorporate search data into your
                    projects.
                </p>

            </div>

        </div>
    </BaseContainer>
</template>
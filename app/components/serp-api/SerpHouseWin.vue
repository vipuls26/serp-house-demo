<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';
</script>

<template>
    <BaseContainer class="pb-4 space-y-6">

        <div class="pb-8">
            <h1 class="text-blue-950 s:text-lg m:text-2xl text-center text-2xl font-medium">Why SERPHouse Wins</h1>
        </div>

        <div class="flex flex-col gap-6">

            <div class="flex flex-wrap justify-center gap-4 md:gap-6">
                <div class="w-full md:w-[48%] lg:w-[42%] border border-violet-500 rounded-lg px-6 py-3 text-center">
                    Lower Pricing Vs Competitors
                </div>

                <div class="w-full md:w-[48%] lg:w-[42%] border border-violet-500 rounded-lg px-6 py-3 text-center">
                    Bulk Request And Webhook Features
                </div>
            </div>

            <div class="flex flex-wrap justify-center gap-6">
                <div class="w-full md:w-[48%] lg:w-[30%] border border-violet-500 rounded-lg px-6 py-3 text-center">
                    Transparent Documentation
                </div>

                <div class="w-full md:w-[48%] lg:w-[30%] border border-violet-500 rounded-lg px-6 py-3 text-center">
                    Developer-First Design
                </div>
            </div>

        </div>

        <!-- btn -->
        <div class="flex s:flex-col l:flex-row  items-center justify-center pt-8 gap-6">

            <NuxtLink to="/pricing" class="bg-violet-500 text-white text-sm s:px-4 s:py-2 px-8 py-3 rounded-full font-bold">
                View Pricing
            </NuxtLink>

            <NuxtLink to="/enterprise-custom-plan-offering" class="inline-flex items-center gap-1 text-violet-500 s:text-sm text-lg pr-3">
                Request Enterprise Quote
                <i class="pi pi-chevron-right text-violet-500"></i>
            </NuxtLink>

        </div>
    </BaseContainer>
</template>
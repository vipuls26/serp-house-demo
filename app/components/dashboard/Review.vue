<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        <h2 class="text-dark text-bolder text-center text-2xl md:text-3xl mx-auto pb-4">
            What Do Our Customers Say?
        </h2>

        <div class="flex flex-col justify-center items-center md:space-x-5 shadow-lg">

            <div class="flex items-center space-x-2">
                <p class="text-lg">Excellent</p>
                <span class="space-x-2 flex items-center">
                    <img src="/images/homePage/stars-4.5.svg" alt="review start"
                        class="w-full max-w-28 min-[1441px]:max-w-36" />
                </span>

                <p class="text-lg pt-3">4.7 Review On</p>
            </div>

            <div class="flex items-center gap-2">
                <img src="/images/homePage/one-star.png" alt="Trustpilot" class="max-w-6" />

                <p class="font-medium text-slate-900">
                    Trustpilot
                </p>
            </div>
            <div>

                <div class="flex flex-col md:flex-row">
                    <BaseReviewCard />
                    <BaseReviewCard />
                    <BaseReviewCard />
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import BaseReviewCard from '../reusbale/BaseReviewCard.vue';

</script>
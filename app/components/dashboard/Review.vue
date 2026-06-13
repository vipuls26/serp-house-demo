<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        <h2 class="text-dark text-bolder text-center text-2xl md:text-3xl mx-auto pb-4">
            What Do Our Customers Say?
        </h2>

        <div class="flex flex-col justify-center items-center md:space-x-5 shadow-lg">

            <div class="flex items-center space-x-2">
                <p class="text-lg">Excellent</p>
                <span class="space-x-1 flex items-center">
                    <BaseStart />
                    <BaseStart />
                    <BaseStart />
                    <BaseStart />
                    <BaseStart />
                </span>

                <p class="text-lg">4.7 Review On</p>
            </div>

            <div class="flex items-center pb-4">
                <p class="text-lg flex items-center">
                    <BaseStart /> Trustpilot
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
import BaseStart from '../reusbale/BaseStart.vue';


</script>
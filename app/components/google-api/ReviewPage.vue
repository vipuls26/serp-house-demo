<template>

    <BaseContainer class="pb-4 space-y-6 py-12">
        <h2 class="text-blue-950 text-bolder text-center text-2xl md:text-3xl mx-auto pb-4">
            What Do Our Customers Say?
        </h2>

        <div class="flex flex-wrap items-center justify-center gap-3.75 md:justify-center">

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

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <BaseReviewCard />
            <BaseReviewCard />
            <BaseReviewCard />
        </div>

    </BaseContainer>
</template>

<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseReviewCard from '../reusbale/BaseReviewCard.vue';

</script>
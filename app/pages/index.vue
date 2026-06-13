<script setup>
import Benefits from '~/components/dashboard/Benefits.vue';
import Cases from '~/components/dashboard/Cases.vue';
import Faqs from '~/components/dashboard/Faqs.vue';
import Potential from '~/components/dashboard/Potential.vue';
import Review from '~/components/dashboard/Review.vue';
import Scaleup from '~/components/dashboard/Scaleup.vue';
import SerpHouse from '~/components/dashboard/SerpHouse.vue';

</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-x-3">


        <!-- benifits -->
        <Benefits />

        <!-- serphouse -->
         <SerpHouse />

        <!-- potential -->
         <Potential />

        <!-- cases -->
         <Cases />

        <!-- faqs -->
        <Faqs />

        <!-- review -->
        <Review />

        <!-- scale -->
        <Scaleup />

    </div>
</template>
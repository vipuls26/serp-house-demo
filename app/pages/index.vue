<script setup>
import ApiPlayground from '~/components/dashboard/ApiPlayground.vue';
import Benefits from '~/components/dashboard/Benefits.vue';
import Cases from '~/components/dashboard/Cases.vue';
import Faqs from '~/components/dashboard/Faqs.vue';
import Potential from '~/components/dashboard/Potential.vue';
import Review from '~/components/dashboard/Review.vue';
import Scaleup from '~/components/dashboard/Scaleup.vue';
import SerpApi from '~/components/dashboard/SerpApi.vue';
import SerpHouse from '~/components/dashboard/SerpHouse.vue';
import SerpHouseWork from '~/components/dashboard/SerpHouseWork.vue';

</script>

<template>
    <div class="">

        <!-- serp api -->
         <SerpApi />

        <!-- serphouse work -->
         <SerpHouseWork />
        <!-- benifits -->
        <Benefits />

        <!-- serphouse -->
        <SerpHouse />

        <!-- api playground -->
        <ApiPlayground />

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
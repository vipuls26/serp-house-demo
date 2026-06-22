<script setup>
import SerpHouseWork from '~/components/dashboard/SerpHouseWork.vue';
import Benefits from '~/components/dashboard/Benefits.vue';
import SerpHouse from '~/components/dashboard/SerpHouse.vue';
import ApiPlayground from '~/components/dashboard/ApiPlayground.vue';
import Potential from '~/components/dashboard/Potential.vue';
import Cases from '~/components/dashboard/Cases.vue';
import Faqs from '~/components/dashboard/Faqs.vue';
import Review from '~/components/dashboard/Review.vue';
import Scaleup from '~/components/dashboard/Scaleup.vue';
import SerpApi from '~/components/dashboard/SerpApi.vue';



</script>

<template>

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

</template>
<template>


    <!-- infrastucture -->
     <PricingInfrastructure />

    <!-- cards -->
    <PricingCard />
    <!-- review -->
    <Review />
</template>

<script setup>
import Review from '~/components/dashboard/Review.vue';
import PricingCard from '~/components/pricing/PricingCard.vue';
import PricingInfrastructure from '~/components/pricing/PricingInfrastructure.vue';


</script>
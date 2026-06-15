<template>

    <!-- pricing -->
    <Pricing />

    <!-- plan -->
    <Plancard />

    <!-- payment method -->
    <PaymentMethod />

    <!-- infrastucture -->
    <PricingInfrastructure />

    <!-- cards -->
    <PricingCard />
    <!-- review -->
    <Review />
</template>

<script setup>
import Review from '~/components/dashboard/Review.vue';
import PaymentMethod from '~/components/pricing/PaymentMethod.vue';
import Plancard from '~/components/pricing/Plancard.vue';
import Pricing from '~/components/pricing/Pricing.vue';
import PricingCard from '~/components/pricing/PricingCard.vue';
import PricingInfrastructure from '~/components/pricing/PricingInfrastructure.vue';


</script>
<script setup>
import BingApiFaq from '~/components/bing-api/BingApiFaq.vue';
import ContactPage from '~/components/bing-api/ContactPage.vue';
import DeveloperPage from '~/components/bing-api/DeveloperPage.vue';
import IntrodutionPage from '~/components/bing-api/IntrodutionPage.vue';
import ReviewPage from '~/components/bing-api/ReviewPage.vue';
import SerpHouseBing from '~/components/bing-api/SerpHouseBing.vue';
import SolutionPage from '~/components/bing-api/SolutionPage.vue';
import UsagePage from '~/components/bing-api/UsagePage.vue';
import UseCase from '~/components/bing-api/UseCase.vue';

</script>

<template>

    <!-- introduction page -->
    <IntrodutionPage />

    <!-- developer page -->
    <DeveloperPage />

    <!-- usage page -->
    <UsagePage />

    <!-- solution -->
    <SolutionPage />

    <!-- why serpHouse -->
    <SerpHouseBing />

    <!-- usecase -->
    <UseCase />

    <!-- faqs -->
    <BingApiFaq />

    <!-- review -->
    <ReviewPage />

    <!-- contact us page -->
    <ContactPage />

</template>
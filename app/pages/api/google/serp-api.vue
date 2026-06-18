<script setup>
import ContactPage from '~/components/google-api/ContactPage.vue';
import DeveloperPage from '~/components/google-api/DeveloperPage.vue';
import GoogleApiFaq from '~/components/google-api/GoogleApiFaq.vue';
import IntrodutionPage from '~/components/google-api/IntrodutionPage.vue';
import ReviewPage from '~/components/google-api/ReviewPage.vue';
import SerpHouseGoogle from '~/components/google-api/SerpHouseGoogle.vue';
import UsagePage from '~/components/google-api/UsagePage.vue';
import UseCase from '~/components/google-api/UseCase.vue';


</script>

<template>

    <!-- introduction -->
    <IntrodutionPage />

    <!-- developer -->
    <DeveloperPage />

    <!-- usage page -->
    <UsagePage />

    <!-- serp house -->
     <SerpHouseGoogle />

    <!-- usecase -->
     <UseCase />

    <!-- faqs -->
    <GoogleApiFaq />

    <!-- review -->
    <ReviewPage />

    <!-- contact page -->
    <ContactPage />
</template>
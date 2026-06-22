<script setup>
import ContactPage from '~/components/google-api/ContactPage.vue';
import FeatureJobsApi from '~/components/google-api/FeatureJobsApi.vue';
import GoogleJobsIntroduction from '~/components/google-api/GoogleJobsIntroduction.vue';
import ReviewPage from '~/components/google-api/ReviewPage.vue';


</script>
<template>

    <!-- introduction -->
    <GoogleJobsIntroduction />

    <!-- feature -->
     <FeatureJobsApi />

    <!-- review -->
    <ReviewPage />

    <!-- contact -->
    <ContactPage />

</template>
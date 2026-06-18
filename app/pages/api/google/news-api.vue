<script setup>
import ContactPage from '~/components/google-api/ContactPage.vue';
import FeatureNewsApi from '~/components/google-api/FeatureNewsApi.vue';
import GoogleNewsIntroduction from '~/components/google-api/GoogleNewsIntroduction.vue';
import ReviewPage from '~/components/google-api/ReviewPage.vue';
import UseCase from '~/components/google-api/UseCase.vue';


</script>

<template>

    <!-- introduction -->
    <GoogleNewsIntroduction />

    <!-- feature -->
    <FeatureNewsApi />

    <!-- use case -->
    <UseCase />

    <!-- review -->
    <ReviewPage />

    <!-- contact us -->
    <ContactPage />
</template>
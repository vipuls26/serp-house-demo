<script setup>
import ContactPage from '~/components/yahoo-api/ContactPage.vue';
import ReviewPage from '~/components/yahoo-api/ReviewPage.vue';
import SerpHouseYahoo from '~/components/yahoo-api/SerpHouseYahoo.vue';
import YahooApiFaq from '~/components/yahoo-api/YahooApiFaq.vue';
import IntrodutionPage from '~/components/yahoo-api/IntrodutionPage.vue';
import DeveloperPage from '~/components/yahoo-api/DeveloperPage.vue';
import UsagePage from '~/components/yahoo-api/UsagePage.vue';
import SolutionPage from '~/components/yahoo-api/SolutionPage.vue';


</script>

<template>

  <!-- introduction page -->
  <IntrodutionPage />

  <!-- developer page -->
  <DeveloperPage />

  <!-- usage page -->
  <UsagePage />

  <!-- solution page -->
  <SolutionPage />

  <!-- serphouse with yahoo -->
  <SerpHouseYahoo />

  <!-- faqs -->
  <YahooApiFaq />

  <!-- review page -->
  <ReviewPage />

  <!-- contact page -->
  <ContactPage />

</template>
<template>
    <BaseLogo />

    <img src="/images/side-image.png" class="max-w-xs md:w-75 md:p-2" />

    <div class="flex flex-col items-center gap-2 py-4">
        <p class="text-center text-2xl font-semibold">Easy and Fast Result</p>
        <p class="text-center text-sm text-gray-600 max-w-sm">
            Each API request runs immediately no waiting for results. It will take up to 5 seconds to return the
            result.
        </p>
    </div>
</template>

<script setup>

import BaseLogo from '../reusbale/BaseLogo.vue';
</script>
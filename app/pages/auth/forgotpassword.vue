<template>
    <div
        class="flex bg-white flex-row rounded-3xl w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 shadow-2xl mx-auto overflow-hidden p-8">

        <div class="hidden md:flex flex-col items-center justify-center gap-3 w-1/2">
            <Banner />
        </div>

        <div class="w-full md:w-1/2 p-4 md:p-0">
            <ForgotPassword />
        </div>

    </div>
</template>


<script setup>

import Banner from '~/components/auth/Banner.vue';
import ForgotPassword from '~/components/auth/ForgotPassword.vue';

definePageMeta({
    layout: 'guest'
})

</script>
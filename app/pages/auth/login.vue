<script setup>
import Banner from '~/components/auth/Banner.vue';
import LoginForm from '~/components/auth/LoginForm.vue';


definePageMeta({
    layout: 'guest'
});
</script>

<template>

    <div class="flex bg-white flex-row rounded-3xl w-11/12 sm:w-4/5 md:w-3/4 lg:w-2/3 shadow-2xl mx-auto overflow-hidden">

        <div class="hidden md:flex flex-col items-center justify-center gap-3 w-1/2">
          <Banner />
        </div>

        <div class="w-full md:w-1/2 p-8 md:p-0">
            <LoginForm />
        </div>

    </div>
</template>

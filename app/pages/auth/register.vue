<script setup>

import Banner from '~/components/auth/Banner.vue';
import RegisterForm from '~/components/auth/RegisterForm.vue';

definePageMeta({
    layout: 'guest'
});
</script>

<template>
    <div
        class="flex bg-white rounded-3xl w-11/12 max-w-6xl shadow-2xl mx-auto overflow-hidden my-8 max-h-[calc(100vh-4rem)]">

        <div
            class="hidden md:flex flex-col w-1/2 items-center justify-center bg-slate-50 border-r border-slate-200 p-8">

            <div class="flex flex-col items-center gap-2 mt-8">
                <Banner />
            </div>
        </div>

        <div class="w-full md:w-1/2 flex overflow-y-auto">
            <div class="m-auto w-full">
                <RegisterForm />
            </div>
        </div>

    </div>
</template>

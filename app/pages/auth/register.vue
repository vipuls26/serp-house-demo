<script setup>

import RegisterForm from '~/components/auth/RegisterForm.vue';

definePageMeta({
    layout: 'guest'
});
</script>

<template>
    <div
        class="flex bg-white rounded-3xl w-11/12 max-w-6xl min-h-[650px] shadow-2xl mx-auto overflow-hidden">

        
        <div class="hidden md:flex flex-col w-1/2 items-center justify-center bg-slate-50 border-r border-slate-200 p-8">

            <img
                src="/images/serphouse-logo.png"
                alt="SerpHouse Logo"
                class="h-12 lg:h-14 w-auto mb-8" />

            <img
                src="/images/side-image.png"
                alt="Register Banner"
                class="w-full max-w-sm" />

            <div class="flex flex-col items-center gap-2 mt-8">
                <h2 class="text-center text-2xl font-semibold text-slate-900">
                    Easy and Fast Result
                </h2>

                <p class="text-center text-sm text-gray-600 max-w-sm">
                    Each API request runs immediately with no waiting for results.
                    Most requests return within a few seconds.
                </p>
            </div>
        </div>

        <div
            class="w-full md:w-1/2 flex items-center justify-center px-6 py-10">

          <RegisterForm />

        </div>

    </div>
</template>



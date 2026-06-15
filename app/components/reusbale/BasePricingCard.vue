<template>
    <div class="bg-violet-50 rounded-3xl p-3 flex flex-col h-full relative
           border border-transparent
           hover:ring-2 ring-slate-200
           transition-all duration-300">


        <p class="w-24 text-center
           py-2
           bg-white text-violet-500
           rounded-full
           font-medium text-sm
           transition-colors duration-300
           hover:bg-violet-500 hover:text-white">
            {{ cardName }}
        </p>

        <div>
            {{ price }} {{ month }}
        </div>

        <div class="w-64 h-0.5 bg-violet-500 mt-2"></div>

        <div v-for="(feature, index) in features" :key="index">
            <div class="flex flex-row gap-3 mt-4">
                <BaseDescription />
                <p>{{ feature }}</p>
            </div>
        </div>

        <div class="w-64 h-0.5 bg-violet-500 mt-2"></div>

        <div class="text-center pt-5 ">
            <NuxtLink :to="link"
                class="bg-white hover:bg-violet-500 px-6 py-3 rounded-3xl hover:text-white text-violet-500 font-bold">
                {{ btnName }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import BaseDescription from './BaseDescription.vue';

defineProps({

    cardName: {
        type: String,
        default: 'Free Trail'
    },
    price: {
        type: String,
        default: '$0.00'
    },
    month: {
        type: String,
        default: ''
    },
    features: {
        type: Array,
        default: () => []
    },
    btnName: {
        type: String,
        default: 'Subscribe Now'
    },
    link: {
        type: String,
        default: '/#'
    }
});

</script>
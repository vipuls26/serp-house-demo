<script setup lang="ts">
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        <div class="flex justify-center pb-12">
            <BaseLink varient="primary" link="/" name="Dive into Use Cases"/>
        </div>

        <div class="flex flex-wrap justify-between mx-auto">

            <div class="flex flex-col items-center">
                <img src="/images/homePage/enterprise-scaling.png" class="w-20" />
            </div>

            <div class="flex flex-col items-center">
                <img src="/images/homePage/cost-efficiency.png" class="w-20" />
            </div>

            <div class="flex flex-col items-center">
                <img src="/images/homePage/dedicated-support.png" class="w-20" />
            </div>

        </div>
    </div>
</template>
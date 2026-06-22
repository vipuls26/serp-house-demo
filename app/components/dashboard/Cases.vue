<script setup lang="ts">
import BaseLink from '../ui/BaseLink.vue';

</script>

<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        <div class="flex justify-center pb-12">
            <BaseLink varient="primary" link="/" name="Dive into Use Cases" />
        </div>

        <div class="flex flex-wrap gap-20 justify-center">

            <div class="flex flex-col items-center text-center">
                <img src="/images/homePage/enterprise-scaling.png" class="h-14 md:h-20 w-auto" />
                <p class="mt-3 text-blue-950 font-medium">
                    Enterprise Scaling
                </p>
            </div>

            <div class="flex flex-col items-center text-center">
                <img src="/images/homePage/cost-efficiency.png" class="h-14 md:h-20 w-auto" />
                <p class="mt-3 text-blue-950 font-medium">
                    Cost Efficiency
                </p>
            </div>

            <div class="flex flex-col items-center text-center">
                <img src="/images/homePage/dedicated-support.png" class="h-14 md:h-20 w-auto" />
                <p class="mt-3 text-blue-950 font-medium">
                    Dedicated Support
                </p>
            </div>

        </div>

    </div>
</template>
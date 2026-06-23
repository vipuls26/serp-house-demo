<template>

    <BaseContainer class="pb-4">

        <!-- btn -->
        <div class="flex flex-row items-center justify-center pt-8 gap-6">

            <NuxtLink to="/auth/register"
                class="bg-violet-500 text-white text-sm s:px-4 s:py-2 px-8 py-3 rounded-full font-bold">
                Get Started Free
            </NuxtLink>

            <NuxtLink to="/pricing" class="inline-flex items-center gap-1 text-violet-500 s:text-sm text-lg pr-3">
                Try Now
                <i class="pi pi-chevron-right text-violet-500"></i>
            </NuxtLink>

        </div>

        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mx-auto w-full px-8 sm:px-6 lg:px-8 xl:px-32 space-y-16 py-12">

                <h2 class="text-center text-blue-950 s:text-sm m:text-base l:text-lg md:text-xl">
                    Used by the best developers and teams around the world
                </h2>

                <BaseLogoCarousel class="mt-10" />

            </div>
        </div>

    </BaseContainer>
</template>
    
<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';


import BaseLogoCarousel from '../ui/BaseLogoCarousel.vue';

</script>
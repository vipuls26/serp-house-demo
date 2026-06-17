<template>

    <div class="mx-auto w-full px-2 sm:px-6 lg:px-8 xl:px-32  space-y-4">
        <h2 class="text-blue-950 text-center text-2xl font-medium">
            Start Extracting Serp Data In Seconds
        </h2>

        <div class="flex flex-col md:flex-row justify-center items-center mx-auto gap-5">

            <div>
                <p class="flex items-center text-blue-950">
                    <span class="mr-2">
                        <BaseTick />
                    </span> 4,000 free searches
                </p>
            </div>

            <div>
                <p class="flex items-center text-blue-950">
                    <span class="mr-2">
                        <BaseTick />
                    </span> No credit card required
                </p>
            </div>

            <div>
                <p class="flex items-center text-blue-950">
                    <span class="mr-2">
                        <BaseTick />
                    </span> Cancel at any time
                </p>
            </div>
        </div>


        <div class="flex flex-col l:flex-row justify-center items-center space-y-4 l:space-y-0 l:space-x-4 py-2 pb-8">

            <NuxtLink to="#" class="bg-violet-500 text-white font-medium text-sm text-center px-6 py-2.5 rounded-full">
                Try Serp Api Now
            </NuxtLink>

            <NuxtLink to="/auth/register"
                class="border border-violet-500 text-violet-500 hover:bg-violet-50 font-medium text-sm text-center px-8 py-3 rounded-full">
                Get Started Free
            </NuxtLink>

        </div>

    </div>
    
</template>


<script setup>
import BaseTick from '../reusbale/BaseTick.vue';
</script>
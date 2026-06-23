<script setup lang="ts">
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseUnderline from '../reusbale/BaseUnderline.vue';

</script>

<template>
    <BaseContainer class="pb-4">

        <div class="flex items-center justify-center gap-x-2 px-8">
            <img src="/images/bingSerpApi/bing-api-logo.png" alt="bing logo" class="h-6">
            <p class="text-blue-950 text-lg font-medium">Bing</p>
        </div>

        <p class="text-slate-600 text-center px-8 mt-4">Using Bing Search API, you can get the below result snippets in
            JSON response.</p>

        <!-- result -->
        <div class="flex flex-wrap justify-center text-center py-4 mx-auto md:px-4 lg:px-12 gap-8">
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 1. Organic Results </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 2. People Also Ask </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 3. Carousel </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 4. Knowledge Graph </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 5. Ad Result </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 6. Related Searches </span>
                <BaseUnderline />
            </div>
        </div>

    </BaseContainer>
</template>
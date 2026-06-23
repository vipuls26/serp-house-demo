<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseUnderline from '../reusbale/BaseUnderline.vue';

</script>

<template>
    <BaseContainer class="pb-4">

        <div class="flex items-center justify-center gap-x-2 px-8">
            <img src="/images/yahooSerpApi/yahoo-api-logo.png" alt="yahoo logo" class="h-6">
            <p class="text-blue-950 text-lg font-medium">Yahoo</p>
        </div>

        <p class="text-slate-600 text-center px-8 mt-4">Using Yahoo Search API, you can get the below result snippets in
            JSON response.</p>

        <!-- result -->
        <div class="flex flex-wrap justify-center text-center py-4 mx-auto md:px-4 lg:px-12 gap-8">
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 1. Top Stories </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 2. Inline Image </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 3. Inline Videos </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 4. Related Questions </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 5. Knowledge Graph </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 6. Ad Result </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 7. Organic Results </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:w-[23%] xl:w-[15%]">
                <span> 8. Related Searches </span>
                <BaseUnderline />
            </div>
        </div>


    </BaseContainer>
</template>
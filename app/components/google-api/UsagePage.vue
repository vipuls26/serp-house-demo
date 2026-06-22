<script setup lang="ts">
import BaseUnderline from '../reusbale/BaseUnderline.vue';

</script>

<template>
    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4">

        <div class="flex items-center justify-center gap-x-2 px-8">
            <img src="/images/googleSerpApi/google-logo.png" alt="bing logo" class="h-6">
            <p class="text-blue-950 text-lg font-medium">Google</p>
        </div>

        <p class="text-slate-600 text-center px-8 mt-4">Using Google Search API, you can get the below result snippets
            in JSON response.</p>

        <!-- result -->
        <div class="flex flex-wrap justify-center text-center py-4 mx-auto md:px-4 lg:px-12 gap-8">
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 1. AI Overview </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 2. Top Stories </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 3. Inline Image </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 4. Inline Videos </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 5. People Also Ask </span>
                <BaseUnderline />
            </div>
            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 6. Knowledge Graph </span>
                <BaseUnderline />
            </div>


            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 7. Ad Result </span>
                <BaseUnderline />
            </div>


            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 8. Organic Results </span>
                <BaseUnderline />
            </div>

            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 9. Related Searches </span>
                <BaseUnderline />
            </div>

            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 10. Inline Product </span>
                <BaseUnderline />
            </div>

            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 11. Map Pack </span>
                <BaseUnderline />
            </div>

            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 12. Carousel </span>
                <BaseUnderline />
            </div>

            <div class="cursor-pointer flex flex-col items-center w-full sm:w-auto md:w-[30%] lg:basis-[18%]">
                <span> 13. Tweet </span>
                <BaseUnderline />
            </div>
        </div>

    </div>
</template>
<template>

    <BaseContainer class="pb-4">

        <!-- about -->
        <div class="max-w-xl w-full mx-auto pt-8">

            <h1 class="text-4xl font-medium text-blue-950 text-center">
                Real-Time SERP API for Google, Bing & Yahoo
            </h1>

            <p class="pt-3 text-sm text-center text-gray-500">
                Get real-time SERP data from Google, Bing & Yahoo — no blocks,
                no delays. With our Free SERP API, you can extract search
                results and use them in your app right away.
            </p>

        </div>

        <!-- point -->
        <div class="w-full max-w-5xl mx-auto pt-8 px-4">

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 md:justify-items-center">


                <div class="flex flex-row items-center gap-2">
                    <BaseDescription />
                    <p class="text-sm text-gray-700 font-medium">
                        Trusted by 500+ developers & SEO teams
                    </p>
                </div>


                <div class="flex flex-row items-center gap-2">
                    <BaseDescription />
                    <p class="text-sm text-gray-700 font-medium">
                        100% CAPTCHA and proxy management included
                    </p>
                </div>

                <div class="flex flex-row md:justify-items-center items-center gap-2">
                    <BaseDescription />
                    <p class="text-sm text-gray-700 font-medium">
                        99.9% guaranteed API uptime
                    </p>
                </div>

            </div>
        </div>

    </BaseContainer>
</template>

<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseDescription from '../reusbale/BaseDescription.vue';

</script>

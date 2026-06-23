<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';

import BaseLink from '../ui/BaseLink.vue';

</script>

<template>

    <BaseContainer>
        <div class="flex md:flex-nowrap flex-wrap xl:py-22.5 lg:py-20 py-16 lg:gap-x-12 gap-x-9 gap-y-12">
            <div>
                <img src="/images/homePage/easy-to-integrate.png" alt="easy-integrate" class="object-contain">
            </div>

            <div class="space-y-4">

                <h1 class="text-blue-950 text-2xl font-medium">Easy To Integrate, Built To Scale</h1>

                <p class="text-gray-600">We provide simple REST endpoints with JSON responses. Get started in minutes
                    using our API Docs. Test
                    your queries in the Playground before integrating into your tools or workflows.</p>

                <div class="space-y-3">
                    <div class="bg-violet-200 p-2 px-6 rounded-full flex items-center gap-3 w-fit">
                        <img src="/images/homePage/code-snapet.png" alt="code-snipet">
                        <p class="text-violet-500 pr-4">cURL, Node.js, Python examples</p>
                    </div>

                    <div class="bg-violet-200 p-2 px-4 rounded-full flex items-center gap-3 w-fit">
                        <img src="/images/homePage/cleaner.png" alt="cleaner">
                        <p class="text-violet-500">Clear error codes and sandbox environment</p>
                    </div>

                    <div class="bg-violet-200 p-2 px-6 rounded-full flex items-center gap-3 w-fit">
                        <img src="/images/homePage/secure-api.png" alt="secure">
                        <p class="text-violet-500">Secure API key auth</p>
                    </div>

                    <div class="py-3">
                        <BaseLink link="/auth/register" name="Start Free" />
                    </div>
                </div>

            </div>
        </div>
    </BaseContainer>

</template>
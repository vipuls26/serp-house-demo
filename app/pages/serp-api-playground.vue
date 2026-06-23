<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';
</script>

<template>
    <BaseContainer class="pb-4 space-y-6">

        <div class="py-8 md:px-8">
            <h1 class="text-center text-blue-950 text-3xl font-medium pt-4 ">
                SERP API Playground
            </h1>

            <p class="text-center text-slate-600 pt-5 md:px-4">SERPHouse provides the best way to get started by playing
                with our API Playground. Use our API playground
                to experiment and explore SERP (Search Engine Results Page) data in a user-friendly environment and see
                the real-time API performance.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">

            <div class="flex flex-col items-center gap-3 p-4 ring-1 ring-slate-300 rounded-lg h-full">
                <img src="/images/tryDemo/search-api-parameters.png" alt="">

                <p class="text-lg text-blue-950 text-center">
                    Experiment with Search API parameters.
                </p>

                <p class="text-sm text-slate-600 text-center">Our API comes with different parameters to control the
                    expected
                    response as per the user neeeds.</p>
            </div>


            <div class="flex flex-col items-center gap-3 p-4 ring-1 ring-slate-300 rounded-lg h-full">
                <img src="/images/tryDemo/web-development.png" alt="">
                <p class="text-lg text-blue-950 text-center">
                    JSON & HTML
                </p>

                <p class="text-sm text-slate-600 text-center">Playground helps you to compare Structured JSON with
                    Realtime
                    HTML. You can eigher use HTML or JSON with your integration.</p>
            </div>


            <div class="flex flex-col items-center gap-3 p-4 ring-1 ring-slate-300 rounded-lg h-full">

                <img src="/images/tryDemo/real-time-api-data.png" alt="">

                <p class="text-lg text-blue-950 text-center">
                    Realtime
                </p>

                <p class="text-sm text-slate-600 text-center">Our API Playground respond you a realtime result on your
                    screen
                    to make compare and validate the result before moving to production</p>
            </div>






        </div>

        <div class="py-4">
            <div>
                <h1 class="text-center text-blue-950 text-2xl font-medium">
                    API Playground
                </h1>

                <p class="text-center text-slate-600 px-8">
                    SERPHouse effortlessly powers your SEO apps and services. Try our complete and easy to use API
                </p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7 pb-8">

            <div class="flex flex-col items-center gap-3 p-4 h-full">
                <img src="/images/tryDemo/vast-proxy-network.png" alt="">

                <p class="text-lg text-blue-950 text-center">
                    Vast Proxy Network
                </p>

                <p class="text-sm text-slate-600 text-center">SERPHouse internally routes requests through a vast
                    network of over 45 million residential proxies for extreme performance and reliability.</p>
            </div>


            <div class="flex flex-col items-center gap-3 p-4 h-full">
                <img src="/images/tryDemo/page-parsing.png" alt="">
                <p class="text-lg text-blue-950 text-center">
                    AI Page Parsing
                </p>

                <p class="text-sm text-slate-600 text-center">AI-powered page parsing, full-browser rendering and
                    javascript execution mean the results SERPHouse returns are exactly that that a human user would
                    see.</p>
            </div>


            <div class="flex flex-col items-center gap-3 p-4 h-full">

                <img src="/images/tryDemo/captcha-solving.png" alt="">

                <p class="text-lg text-blue-950 text-center">
                    Captcha Solving
                </p>

                <p class="text-sm text-slate-600 text-center">SERPHouse internally resolves CAPTCHA challenges via
                    machine learning & crowdsourcing - no maintenance overhead needed - it just works.</p>
            </div>

        </div>
    </BaseContainer>
</template>
<script setup lang="ts">
import BaseStart from '../reusbale/BaseStart.vue';

</script>

<template>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">


        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="/images/homePage/serp-data.png" alt="Real-Time SERP Data"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

            <div class="w-full lg:w-1/2 space-y-6">
                <h2 class="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#201d4a] leading-tight">
                    Real-Time SERP Data From All Major search Engines
                </h2>

                <p class="text-gray-600 text-lg leading-relaxed max-w-lg">
                    Obtain real-time SERP data from all major search APIs, ensuring up-to-date insights for accurate
                    performance tracking.
                </p>

                <div class="space-y-4 pt-2">
                    <div class="flex items-center gap-3">
                        <img src="/images/homePage/check-circle.png" alt="check" class="w-6 h-6">
                        <a href="#" class="text-gray-800 font-semibold">Google Search API</a>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="/images/homePage/check-circle.png" alt="check" class="w-6 h-6">
                        <a href="#" class="text-gray-800 font-semibold">Bing Search API</a>
                    </div>
                    <div class="flex items-center gap-3">
                        <img src="/images/homePage/check-circle.png" alt="check" class="w-6 h-6">
                        <a href="#" class="text-gray-800 font-semibold">Yahoo Search API</a>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="/images/homePage/specific-devices.png" alt="Specific Devices"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

            <div class="w-full lg:w-1/2 space-y-6">
                <h2 class="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#201d4a] leading-tight">
                    Access search results tailored to specific devices
                </h2>
                <p class="text-gray-600 text-lg leading-relaxed max-w-lg">
                    Get accurate search engine results tailored to specific devices, including desktop, mobile, and
                    tablet, to ensure a comprehensive understanding of user experience.
                </p>
            </div>
        </div>


        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="/images/homePage/geographic-location.png" alt="Geographic Location"
                    class="w-full max-w-xl object-contain drop-shadow-sm">
            </div>

            <div class="w-full lg:w-1/2 space-y-6">
                <h2 class="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#201d4a] leading-tight">
                    Accurate Data Based on Geographic Location
                </h2>
                <p class="text-gray-600 text-lg leading-relaxed max-w-lg">
                    Retrieve location-specific search engine results pages (SERPs) from any region, allowing you to
                    track and analyze localized rankings effectively.
                </p>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center justify-center text-center p-6 max-w-2xl mx-auto gap-4">
        <div>
            <h2 class="text-2xl text-gray-900">Industries that Can Benefits from SERPHouse</h2>
        </div>
        <div>
            <p class="text-lg text-gray-600">SERPHouse includes digital marketing, e-commerce, finance, and tech
                startups, all leveraging advanced SERP analysis for competitive insights and growth.</p>
        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <img src="/images/homePage/seo-professional.png" alt="SEO Professional"
                class="w-16 h-16 mb-4 object-contain">
            <h3 class="text-xl mb-2 text-gray-800">SEO Professional</h3>
        </div>

        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <img src="/images/homePage/digital-marketers.png" alt="Digital Marketers"
                class="w-16 h-16 mb-4 object-contain">
            <h3 class="text-xl mb-2 text-gray-800">Digital Marketers</h3>

        </div>



        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <img src="/images/homePage/developers.png" alt="Train AI Models" class="w-16 h-16 mb-4 object-contain">
            <h3 class="text-xl mb-2 text-gray-800">Train AI Models</h3>

        </div>

        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <img src="/images/homePage/data-science.png" alt="Data Science" class="w-16 h-16 mb-4 object-contain">
            <h3 class="text-xl mb-2 text-gray-800">Data Science</h3>

        </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto p-8">

        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <img src="/images/homePage/clock-up-arrow.png" alt="Up Time" class="w-16 h-16 mb-4 object-contain">
            <p class="font-semibold mt-3">99.99%</p>

            <p class="font-semibold mt-3">Up Time</p>
        </div>

        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <p class="font-semibold mt-3">5</p>
            <span>
                <BaseStart />
                <BaseStart />
                <BaseStart />
                <BaseStart />
                <BaseStart />
            </span>


            <p class="font-semibold mt-3">Up Time</p>
        </div>

        <div
            class="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center h-full border-b-4 border-b-transparent hover:border-b-violet-500 transition-colors duration-200">
            <img src="/images/homePage/dolar-sign.png" alt="Up Time" class="w-16 h-16 mb-4 object-contain">
            <p class="font-semibold mt-3">99.99%</p>

            <p class="font-semibold mt-3">Up Time</p>
        </div>


    </div>
</template>
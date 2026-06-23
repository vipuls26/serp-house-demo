<template>

      <BaseContainer class="pb-4 space-y-6">

        <div class="flex flex-col lg:flex-row items-center gap-8">

            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="/images/faq-new.png" alt="FAQs" class="max-w-full h-auto">
            </div>

            <div class="w-full lg:w-1/2">

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5 cursor-pointer"
                        @click="toggleAccordion('faq1')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500 ': activeFaq === 'faq1' }">
                            +
                        </span>
                        <h3 class="text-base transition-colors duration-300 overflow-hidden"
                            :class="activeFaq === 'faq1' ? 'text-violet-500' : 'text-[#494343]'">
                            What Is The Yahoo Serp Api, And How Can It Help My Business?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq1'" class="mt-4 text-gray-600 leading-relaxed">
                        The Yahoo SERP API is a tool that allows users to access Yahoo’s search results
                        programmatically, delivering structured data on search rankings, ads, images, and videos.
                        Businesses can use this API to analyze Yahoo search performance, monitor competitors, and
                        optimize SEO strategies based on Yahoo's unique search ecosystem.
                    </div>

                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5 cursor-pointer"
                        @click="toggleAccordion('faq2')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq2' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300"
                            :class="activeFaq === 'faq2' ? 'text-violet-500' : 'text-[#494343]'">
                            What Data Can I Obtain From The Yahoo Serp Api?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq2'" class="mt-4 text-gray-600 leading-relaxed">
                        The Yahoo SERP API provides a variety of search data including organic search results, ads,
                        featured snippets, related queries, images, and videos. The exact data available may depend on
                        the query type (e.g., web, image, or news search).
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5 cursor-pointer"
                        @click="toggleAccordion('faq3')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq3' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300 text-[#494343]"
                            :class="activeFaq === 'faq3' ? 'text-violet-500' : 'text-[#494343]'">
                            Does The Yahoo Serp Api Support Location-specific Search Results?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq3'" class="mt-4 text-gray-600 leading-relaxed">
                        Yes, most Yahoo SERP API services allow users to specify location parameters to get
                        region-specific search results, which can be valuable for businesses targeting specific
                        geographic audiences.
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5 cursor-pointer"
                        @click="toggleAccordion('faq4')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq4' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300"
                            :class="activeFaq === 'faq4' ? 'text-violet-500' : 'text-[#494343]'">
                            How Frequently Can I Make Requests To The Yahoo Serp Api?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq4'" class="mt-4 text-gray-600 leading-relaxed">
                        The request frequency depends on your subscription plan. Typically, Yahoo SERP APIs come with
                        rate limits, such as a set number of requests per minute, hour, or day, which can be adjusted
                        with higher-tier plans.
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5 cursor-pointer"
                        @click="toggleAccordion('faq5')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq5' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300"
                            :class="activeFaq === 'faq5' ? 'text-violet-500' : 'text-[#494343]'">
                            How Do I Integrate The Yahoo Serp Api Into My Application?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq5'" class="mt-4 text-gray-600 leading-relaxed">
                        Integration is usually done through HTTP GET requests to the API endpoint with the necessary
                        query parameters (like search term, location, and language). The API returns results in a
                        structured format, such as JSON, which can be parsed and displayed within your application.
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5 cursor-pointer"
                        @click="toggleAccordion('faq6')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq6' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300"
                            :class="activeFaq === 'faq6' ? 'text-violet-500' : 'text-[#494343]'">
                            Can I Get Historical Search Data With The Yahoo Serp Api?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq6'" class="mt-4 text-gray-600 leading-relaxed">
                       Most Yahoo SERP APIs focus on real-time data; however, some third-party providers may offer historical data storage or allow access to past data through custom setups.
                    </div>
                </div>

            </div>

        </div>
    </BaseContainer>


</template>

<script setup>
import BaseContainer from '~/components/ui/BaseContainer.vue';


const activeFaq = ref(null)

const toggleAccordion = (faq) => {
    activeFaq.value = activeFaq.value === faq ? null : faq
}
</script>
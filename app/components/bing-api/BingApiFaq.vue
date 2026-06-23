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
                            What Is A Bing SERP API?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq1'" class="mt-4 text-gray-600 leading-relaxed">
                        A Bing SERP (Search Engine Results Page) API allows developers to fetch real-time search engine
                        results from Bing. This includes organic results, ads, featured snippets, and other SERP
                        features.
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
                            How Can I Integrate The Bing SERP API Into My Application?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq2'" class="mt-4 text-gray-600 leading-relaxed">
                        You can integrate the Bing SERP API by using an API key provided upon registration. Use HTTP
                        requests to send queries to the API endpoint and receive results in JSON or XML format.
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
                            What Kind Of Data Can I Retrieve With The Bing SERP API?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq3'" class="mt-4 text-gray-600 leading-relaxed">
                        Yes, each plan comes with a defined request limit. The number of allowed API requests depends on
                        your subscription tier, with higher tiers offering more requests per month.
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
                            Can I Filter Results By Language Or Region?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq4'" class="mt-4 text-gray-600 leading-relaxed">
                        Yes, the Bing SERP API allows you to filter results based on specific languages, countries, or
                        regions to provide localized data.
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
                            How Frequently Are The SERP Results Updated?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq5'" class="mt-4 text-gray-600 leading-relaxed">
                        Bing’s search results are updated in real-time. However, API request results may vary slightly
                        depending on when the query is made, due to caching and regional differences.
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
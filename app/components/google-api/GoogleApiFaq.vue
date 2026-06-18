<template>

    <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12 pb-4 space-y-6">

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
                            What Is A Google SERP API?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq1'" class="mt-4 text-gray-600 leading-relaxed">
                        A Google SERP (Search Engine Results Page) API allows developers to fetch real-time search
                        results from Google, including organic listings, paid ads, featured snippets, knowledge graphs,
                        and other SERP elements.
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
                            How Do I Integrate The Google SERP API Into My Project?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq2'" class="mt-4 text-gray-600 leading-relaxed">


                        To integrate the Google SERP API, sign up for an API key. Use this key to authenticate HTTP
                        requests made to the API’s endpoint, and receive data in formats like JSON or HTML.
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
                            What Type Of Data Can I Retrieve Using The Google Serp Api?

                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq3'" class="mt-4 text-gray-600 leading-relaxed">

                        The API provides access to search results such as organic rankings, featured snippets, image
                        carousels, Google Ads, local packs, and more, including metadata like titles, descriptions, and
                        URLs.
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
                            Is There A Rate Limit On Api Requests?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq4'" class="mt-4 text-gray-600 leading-relaxed">
                        Yes, the number of allowed API requests depends on the plan you choose. Free and lower-tier
                        plans typically have lower request limits, while premium plans offer higher limits.
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
                            Can I Target Results By Language Or Location?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq5'" class="mt-4 text-gray-600 leading-relaxed">
                        Yes, the Google SERP API allows you to retrieve localized SERPs by targeting search results
                        based on specific languages, countries, or locations.
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
                            How Accurate Are The Search Results Retrieved From The Api?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq6'" class="mt-4 text-gray-600 leading-relaxed">
                        The API returns real-time search results directly from Google’s search engine. However, the
                        results may vary slightly due to personalization, location, and device type.
                    </div>
                </div>

            </div>

        </div>
    </div>


</template>

<script setup>

const activeFaq = ref(null)

const toggleAccordion = (faq) => {
    activeFaq.value = activeFaq.value === faq ? null : faq
}
</script>
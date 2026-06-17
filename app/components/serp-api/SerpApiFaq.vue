<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 mb-15">
        <div class="flex flex-col lg:flex-row items-center gap-8">

            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="/images/faq-new.png" alt="FAQs" class="max-w-full h-auto">
            </div>

            <div class="w-full lg:w-1/2">

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5"
                        @click="toggleAccordion('faq1')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500 ': activeFaq === 'faq1' }">
                            +
                        </span>
                        <h3 class="text-base transition-colors duration-300 overflow-hidden"
                            :class="activeFaq === 'faq1' ? 'text-violet-500' : 'text-[#494343]'">
                            What’s The Response Format?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq1'" class="mt-4 text-gray-600 leading-relaxed">
                        JSON with structured data for organic, paid, map pack, etc.
                    </div>
                    
                </div>


                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5"
                        @click="toggleAccordion('faq2')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq2' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300"
                            :class="activeFaq === 'faq2' ? 'text-violet-500' : 'text-[#494343]'">
                            Is There A Free Trial?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq2'" class="mt-4 text-gray-600 leading-relaxed">
                        Yes, we provide a 7-day free trial with 4,000 API Credits included.
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5"
                        @click="toggleAccordion('faq3')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq3' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300 text-[#494343]"
                            :class="activeFaq === 'faq3' ? 'text-violet-500' : 'text-[#494343]'">
                            Can I Search In Different Languages?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq3'" class="mt-4 text-gray-600 leading-relaxed">
                       Yes, fully language-localizable.
                    </div>
                </div>

                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5"
                        @click="toggleAccordion('faq4')">
                        <span class="text-2xl transition-transform duration-300 text-[#494343]"
                            :class="{ 'rotate-45 text-violet-500': activeFaq === 'faq4' }">
                            +
                        </span>

                        <h3 class="text-base transition-colors duration-300"
                            :class="activeFaq === 'faq4' ? 'text-violet-500' : 'text-[#494343]'">
                            Is This Scraping Legal?
                        </h3>
                    </button>

                    <div v-show="activeFaq === 'faq4'" class="mt-4 text-gray-600 leading-relaxed">
                        Scraping public data is legal unless your usage is otherwise illegal. Illegal activities include
                        but are not limited to cyber criminality, terrorism, pornography, denial of service attacks, and
                        war crimes.
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
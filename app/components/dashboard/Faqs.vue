<template>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col lg:flex-row items-center gap-8">


            <div class="w-full lg:w-1/2 flex justify-center">
                <img src="/images/faq-new.png" alt="FAQs" class="max-w-full h-auto">
            </div>


            <div class="w-full lg:w-1/2 space-y-5">

                <div v-for="(faq, index) in faqs" :key="index"
                    class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <button class="w-full flex items-center justify-start text-left space-x-2.5" @click="toggleAccordion(index)">

                        <span class="text-2xl transition-transform duration-300"
                            :class="{ 'rotate-45': activeIndex === index }">
                            +
                        </span>


                        <h3 class="text-lg hover:text-violet-500 text-violet-500">
                            {{ faq.question }}
                        </h3>


                    </button>

                    <div v-show="activeIndex === index" class="mt-4 text-gray-600 leading-relaxed">
                        {{ faq.answer }}
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup>

const activeIndex = ref(null)

const faqs = [
    {
        question: 'How Are Search Credits Counted?',
        answer: 'We only count successful requests. Failed requests need to be retried.'
    },
    {
        question: "What's Your Refund Policy?",
        answer: 'We offer a full refund unless you have not used 25% of your searches within 10 days.'
    },
    {
        question: 'What If I Need More Search Credits?',
        answer: 'We offer a custom plan based on your requirements. You have to write us at getsupport@serphouse.com with your Monthly/Yearly requirement.'
    },
    {
        question: 'Scaping Is Legal?',
        answer: 'Scraping public data is legal unless your usage is otherwise illegal.'
    },
    {
        question: 'Can I Use The SERP API For Commercial Purposes?',
        answer: 'Yes, you can use the SERP API for commercial and business purposes.'
    },
    {
        question: 'Is Serp Api Free?',
        answer: 'Refer to the official documentation for current pricing and free-tier information.'
    }
]

const toggleAccordion = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
}

</script>
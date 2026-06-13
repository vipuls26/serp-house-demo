<template>
    <section class="relative bg-gray-50">

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div class="flex flex-col lg:flex-row gap-16 items-start">

                <div class="w-full lg:w-1/2">
                    <ContactBanner />
                </div>

                <div class="relative w-full lg:w-1/2 max-w-2xl mx-auto lg:-mb-28 z-10">

                    <div class="relative bg-white rounded-xl p-8 lg:p-10">

                        <ContactForm />
                    </div>

                </div>

            </div>
        </div>

    </section>

</template>

<script setup>
import ContactBanner from './ContactBanner.vue';
import ContactFooter from './ContactFooter.vue';
import ContactForm from './ContactForm.vue';

</script>

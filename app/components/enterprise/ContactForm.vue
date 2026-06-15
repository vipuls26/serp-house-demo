<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseFloatingTextarea from '../ui/BaseFloatingTextarea.vue';
import BaseInput from '../ui/BaseInput.vue';

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    requirement: ''
})
</script>

<template>



    <form novalidate @submit.prevent="handleSubmit" class="space-y-3">


        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 space-x-4">


            <BaseInput name="firstname" id="firstname" type="text" placeholder="First Name" />

            <BaseInput name="lastname" id="lastname" type="text" placeholder="Last Name" />

        </div>

        <BaseInput id="email" type="email" placeholder="Email Address" />

        <BaseInput id="message" placeholder="Message" />

        <BaseInput id="requirement" placeholder="Requirement per month e.g. 500k, 1M etc" type="text" />


        <div class="flex w-full items-center justify-between pt-1 smx:pt-2">
            <label class="flex items-center gap-2 cursor-pointer">

                <BaseInput name="term_condition" type="checkbox" />

                <span class="text-sm text-slate-500 leading-5">
                    By checking this box, you agree to our
                    <NuxtLink to="/#" class="text-violet-500 underline">
                        Terms of Service
                    </NuxtLink>
                    and
                    <NuxtLink to="/#" class="text-violet-500 underline">
                        Privacy Policy
                    </NuxtLink>
                </span>
            </label>
        </div>

        <BaseButton label="Submit" varient="tertiary" />

    </form>
</template>
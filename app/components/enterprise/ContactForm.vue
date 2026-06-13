<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseFloatingInput from '../ui/BaseFloatingInput.vue';
import BaseFloatingTextarea from '../ui/BaseFloatingTextarea.vue';

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    requirement: ''
})
</script>

<template>



     <form novalidate @submit.prevent="handleSubmit">
    

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
            <BaseFloatingInput
                id="first_name"
                label="First Name"
                v-model="form.firstName"
            />

            <BaseFloatingInput
                id="last_name"
                label="Last Name"
                v-model="form.lastName"
            />
        </div>

        <BaseFloatingInput
            id="email"
            type="email"
            label="Email ID"
            v-model="form.email"
        />

        <BaseFloatingTextarea
            id="message"
            label="Message"
            v-model="form.message"
        />

        <BaseFloatingInput
            id="requirement"
            label="Requirement per month e.g. 500k, 1M etc"
            v-model="form.requirement"
        />

        <BaseButton label="Submit" varient="tertiary" />

    </form>
</template>
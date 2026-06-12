<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseInput from '../ui/BaseInput.vue';



const formData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    term_condition: ''
});

const handleSubmit = () => {
    console.log('Register form submitted', formData.value);
};

</script>

<template>


    <div class="flex flex-col py-8 px-4 sm:px-8 md:py-18 md:px-8 lg:px-12 gap-5">

        <p class="text-3xl font-medium text-slate-900">Create Your Account</p>

        <p class="text-gray-700">Set up your SERPHouse account to start accessing high volume SERP APIs. </p>


        <form novalidate @submit.prevent="handleSubmit">

            <!-- name -->
            <div class="px-4">
                <BaseInput v-model="formData.name" type="text" id="name" label="Name" placeholder="Enter Name" />
            </div>

            <!-- email -->
            <div class="px-4">
                <BaseInput v-model="formData.email" type="email" id="email" label="Email Address"
                    placeholder="Enter E-Mail Address" />
            </div>

            <!-- password -->
            <div class="px-4">
                <BaseInput v-model="formData.password" type="password" id="password" label="Password"
                    placeholder="Enter Password" />
            </div>

            <!-- confirm password -->
            <div class="px-4">
                <BaseInput v-model="formData.password_confirmation" type="password" id="password_confirmation"
                    label="Confirm Password" placeholder="Enter Confirm Password" />
            </div>

            <!-- terms and condition -->
            <div class="pt-4">
                <BaseInput v-model="formData.term_condition" type="checkbox" />
                
                    <span class="text-sm text-slate-500">
                        I agree to the
                        <NuxtLink to="/#" class="text-blue-600">Terms of Service</NuxtLink>
                        and
                        <NuxtLink to="/#" class="text-blue-600">Privacy Policy</NuxtLink>
                    </span>
                

            </div>


            <!-- button -->
            <div class="flex justify-center pt-14">
                <BaseButton label="Register" button="submit" />
            </div>

            <!-- registration link -->
            <div class="flex justify-center pt-8">
                <p class="text-sm">
                    Already have an account?
                    <NuxtLink to="/auth/login" class="underline font-semibold text-slate-700">
                        Sign in
                    </NuxtLink>
                </p>
            </div>

        </form>

    </div>
</template>
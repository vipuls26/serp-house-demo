<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseInput from '../ui/BaseInput.vue';


const formData = ref({
    email: '',
});


const handleSubmit = () => {
    console.log('Password reset form submitted', formData.value);
};



</script>

<template>

    <div>
        <div class="flex flex-col py-8 px-2 sm:px-8 md:py-18 md:px-6 lg:px-12 gap-5">


            <div class="block md:hidden">
                <div class="flex justify-center">
                    <BaseLogo />
                </div>
            </div>

            <p class="text-3xl font-medium text-slate-900">Reset Password</p>

            <p class="text-gray-700">
                <i class="pi pi-lock text-2xl"></i>
            </p>

            <!-- form -->
            <form novalidate @submit.prevent="handleSubmit">

                <div class="px-4">
                    <BaseInput v-model="formData.email" type="email" id="email" label="Email Address"
                        placeholder="E-Mail Address" />
                </div>
                <!-- button -->
                <div class="flex justify-center pt-6">
                    <BaseButton label="Send Password Reset Link" button="submit" />
                </div>
            </form>

            <!-- registration link -->

            <div class="flex justify-center pt-6">
                <NuxtLink to="/auth/register" class="underline font-semibold text-slate-700">
                    Create an Account
                </NuxtLink>

            </div>

            <div class="flex justify-center">
                <p class="text-sm">
                Already have an account?
                <NuxtLink to="/auth/login" class="underline font-semibold text-slate-700">
                    Log in
                </NuxtLink>
            </p>
            </div>



            

        </div>



    </div>

</template>

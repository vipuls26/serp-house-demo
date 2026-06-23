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
    <div class="w-full max-w-md px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 mx-auto flex flex-col gap-4">

        <div class="block md:hidden mb-2">
            <div class="flex justify-center">
                <BaseLogo />
            </div>
        </div>

        <div>
            <h1 class="text-2xl sm:text-3xl font-medium text-slate-900">
                Reset Password
            </h1>
            <p class="mt-2 text-sm text-slate-500">
                Enter your email to receive a password reset link.
            </p>
        </div>

        <!-- form -->
        <form novalidate @submit.prevent="handleSubmit" class="mt-4 space-y-4">

            <BaseInput v-model="formData.email" type="email" id="email" label="Email Address"
                placeholder="E-Mail Address" />

            <!-- button -->
            <div class="flex justify-center pt-2">
                <BaseButton label="Send Password Reset Link" button="submit" class="w-full" />
            </div>
        </form>

        <div class="flex flex-col items-center gap-2 pt-4">
            <p class="text-sm text-slate-600">
                Already have an account?
                <NuxtLink to="/auth/login" class="font-semibold underline text-slate-700 ml-1">
                    Log in
                </NuxtLink>
            </p>
            <p class="text-sm text-slate-600">
                Don't have an account?
                <NuxtLink to="/auth/register" class="font-semibold underline text-slate-700 ml-1">
                    Create an Account
                </NuxtLink>
            </p>
        </div>

    </div>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseInput from '../ui/BaseInput.vue';
import BaseLogo from '../reusbale/BaseLogo.vue';


const formData = ref({

    email: '',
    password: '',
    remember_me: '',
});

const handleSubmit = () => {
    console.log('Login form submitted', formData.value);
};

</script>

<template>
    <div class="flex flex-col py-8 px-2 sm:px-8 md:py-18 md:px-6 lg:px-12 gap-5">

        <div class="block md:hidden">
            <div class="flex justify-center">
                <BaseLogo />
            </div>
        </div>

        <p class="text-3xl font-medium text-slate-900">Login Here!</p>

        <p class="text-gray-700">Welcome </p>

        <!-- form -->
        <form novalidate @submit.prevent="handleSubmit">
            <!-- email -->
            <div class="px-4">
                <BaseInput v-model="formData.email" type="email" id="email" label="Email Address"
                    placeholder="E-Mail Address" />
            </div>

            <!-- password -->
            <div class="px-4">
                <BaseInput v-model="formData.password" type="password" id="password" label="Password"
                    placeholder="Password" />
            </div>

            <!-- remember + forgot password link -->
            <div class="flex w-full items-center justify-between px-4 pt-4">
                <div class="flex items-start">
                    <BaseInput v-model="formData.remember_me" type="checkbox" /> <span
                        class="text-xs text-slate-500">Remember me</span>
                </div>
                <div>
                    <NuxtLink to="/auth/forgotpassword" class="underline text-xs text-slate-500">Forgot Password?
                    </NuxtLink>
                </div>
            </div>

            <!-- button -->
            <div class="flex justify-center pt-4">
                <BaseButton label="Login" button="submit" />
            </div>
        </form>

        <!-- registration link -->
        <div class="flex justify-center pt-8">
            <p class="text-sm">
                Don’t have an account?
                <NuxtLink to="/auth/register" class="underline font-semibold text-slate-700">
                    Sign up
                </NuxtLink>
            </p>
        </div>

    </div>
</template>
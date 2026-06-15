<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseInput from '../ui/BaseInput.vue';
import BaseLogo from '../reusbale/BaseLogo.vue';

</script>

<template>
    <div class="flex flex-col px-4 py-6 xs:px-4 xs:py-6 smx:px-5 smx:py-7 m:px-6 m:py-8 sm:px-8 sm:py-10 md:px-10 md:py-12">

        <div class="block md:hidden mb-4 smx:mb-5 sm:mb-6">
            <div class="flex justify-center">
                <BaseLogo />
            </div>
        </div>

        <div class="w-full max-w-xs smx:max-w-sm sm:max-w-md md:max-w-sm">

            <p class="text-2xl smx:text-3xl font-medium text-slate-900">Login Here!</p>
            <p class="text-sm smx:text-base text-gray-700 mt-1 mb-4 smx:mb-5 sm:mb-6">Welcome</p>

            <form novalidate @submit.prevent="handleSubmit" class="space-y-3 smx:space-y-4 sm:space-y-5">

                <BaseInput name="email" type="email" id="email" label="Email Address"
                    placeholder="E-Mail Address" />

                <BaseInput name="password" type="password" id="password" label="Password"
                    placeholder="Password" />

                <div class="flex w-full items-center justify-between pt-1 smx:pt-2">
                    <label class="flex items-center gap-2 cursor-pointer">
                        <BaseInput name="remember_me" type="checkbox" />
                        <span class="text-xs text-slate-500">Remember me</span>
                    </label>
                    <NuxtLink to="/auth/forgotpassword" class="underline text-xs text-slate-500">
                        Forgot Password?
                    </NuxtLink>
                </div>

                <div class="flex justify-center pt-2 smx:pt-3 sm:pt-4">
                    <BaseButton label="Login" button="submit" />
                </div>
            </form>

            <div class="flex justify-center pt-6 smx:pt-7 sm:pt-8">
                <p class="text-sm">
                    Don't have an account?
                    <NuxtLink to="/auth/register" class="underline font-semibold text-slate-700">
                        Sign up
                    </NuxtLink>
                </p>
            </div>

        </div>

    </div>
</template>

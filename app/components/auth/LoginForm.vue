<script setup>
import BaseButton from '../ui/BaseButton.vue';
import BaseInput from '../ui/BaseInput.vue';
import BaseLogo from '../reusbale/BaseLogo.vue';

</script>

<template>
    <div class="w-full max-w-md px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 mx-auto">
        
        <div class="block md:hidden mb-6">
            <div class="flex justify-center">
                <BaseLogo />
            </div>
        </div>

        
        <div>
            <h1 class="text-2xl sm:text-3xl font-medium text-slate-900">
                Login Here!
            </h1>

            <p class="mt-2 text-sm text-slate-500">
                Welcome back
            </p>
        </div>

        
        <form novalidate @submit.prevent="handleSubmit" class="mt-6 space-y-4">

            <BaseInput name="email" type="email" id="email" label="Email Address" placeholder="Enter your email" required />

            <BaseInput name="password" type="password" id="password" label="Password" placeholder="Enter your password" required />

            
            <div class="flex items-center justify-between gap-3">

                <label class="flex items-center gap-2 cursor-pointer">
                    <BaseInput name="remember_me" type="checkbox" />

                    <span class="text-sm text-slate-500">
                        Remember me
                    </span>
                </label>

                <NuxtLink to="/auth/forgotpassword" class="text-sm text-slate-500 hover:underline">
                    Forgot Password?
                </NuxtLink>

            </div>

            
            <div class="pt-2 flex justify-center">
                <BaseButton label="Login" button="submit" variant="tertiary" class="w-full" />
            </div>

            <!-- register link -->
            <div class="pt-4 text-center">
                <p class="text-sm text-slate-600">
                    Don't have an account?
                    <NuxtLink to="/auth/register" class="font-semibold underline text-slate-800 ml-1">
                        Sign up
                    </NuxtLink>
                </p>
            </div>

        </form>
    </div>
</template>

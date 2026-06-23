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
                Create Your Account
            </h1>

            <p class="mt-2 text-sm text-slate-500">
                Create an account to start using our platform.
            </p>
        </div>

        <form novalidate @submit.prevent="handleSubmit" class="mt-6 space-y-4">

            <BaseInput id="name" name="name" type="text" label="Name" placeholder="Enter Name" />

            <BaseInput id="email" name="email" type="email" label="Email Address" placeholder="Enter E-Mail Address" />

            <BaseInput id="password" name="password" type="password" label="Password" placeholder="Enter Password" />

            <BaseInput id="password_confirmation" name="password_confirmation" type="password" label="Confirm Password"
                placeholder="Enter Confirm Password" />

            <label class="flex items-start gap-3 cursor-pointer">
                <BaseInput name="term_condition" type="checkbox" />

                <span class="text-sm text-slate-500 leading-5">
                    I agree to the
                    <NuxtLink to="/#" class="text-blue-600 hover:underline">
                        Terms of Service
                    </NuxtLink>
                    and
                    <NuxtLink to="/#" class="text-blue-600 hover:underline">
                        Privacy Policy
                    </NuxtLink>
                </span>
            </label>


            <div class="flex justify-center">
                <BaseButton label="Register" button="submit" class="w-full" />
            </div>

            <div class="flex justify-center pt-2">
                <span class="text-sm text-slate-600">
                    Already have an account?
                    <NuxtLink to="/auth/login" class="font-semibold text-slate-700 underline">
                        Sign in
                    </NuxtLink>
                </span>
            </div>

        </form>

    </div>
</template>

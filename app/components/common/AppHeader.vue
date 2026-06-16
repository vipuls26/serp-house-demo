<template>
    <nav class="relative bg-white border-b border-gray-100 shadow-sm p-2">
        <div class="mx-auto max-w-360 px-4 sm:px-6 lg:px-3 xl:px-12">

            <div class="flex items-center justify-between h-16 pt-2">

                <div class="flex shrink-0 items-center">
                    <a href="/" class="flex items-center justify-center font-bold">
                        <BaseLogo />
                    </a>

                </div>

                <div class="hidden lg:flex items-center gap-4 text-gray-600">

                    <button class="flex items-center space-x-1 text-violet-500">
                        <span>Product</span>
                        <i class="pi pi-angle-down text-xs ml-1"></i>
                    </button>

                    <button class="flex items-center space-x-1">
                        <span>Features</span>
                        <i class="pi pi-angle-down text-xs ml-1"></i>
                    </button>

                    <a href="#" class="hover:text-violet-500 transition">Try Demo</a>
                    <a href="#" class="hover:text-violet-500 transition">Pricing</a>

                    <button class="flex items-center space-x-1 hover:text-violet-500 transition">
                        <span>Use Cases</span>
                        <i class="pi pi-angle-down text-xs ml-1"></i>
                    </button>

                    <a href="#" class="hover:text-violet-500">Documentation</a>
                    <div class="w-0.5 bg-slate-300 h-8"></div>


                    <a href="#" class="hover:text-violet-500">Contact Sales</a>

                    <NuxtLink to="/auth/login" class="flex items-center space-x-1 text-violet-500">
                        <span>Login</span>
                        <i class="pi pi-angle-right text-lg"></i>
                    </NuxtLink>

                    <NuxtLink to="/auth/register"
                        class="bg-violet-500 text-white font-medium rounded-full max-w-43.25 lg:py-2.5 lg:px-4 xl:py-3 xl:px-8 transition shadow-sm">
                        Free Sign Up
                    </NuxtLink>
                </div>

                <div class="lg:hidden flex items-center space-x-4">
                    <button @click="toggleMenu" class="text-gray-500 hover:text-gray-600 focus:outline-none">

                        <i :class="['pi', isOpen ? 'pi-times' : 'pi-bars', 'text-2xl']"></i>
                    </button>
                    <NuxtLink to="/auth/register"
                        class="bg-violet-500 text-white font-semibold px-6 py-2 rounded-full transition shadow-sm">
                        Free Sign Up
                    </NuxtLink>

                </div>

            </div>
        </div>

        <div v-show="isOpen"
            class="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg mx-auto pl-3">

            <button class="w-full text-left py-2 text-violet-500">
                <span>Product</span>
                <i class="pi pi-angle-down text-xs ml-1"></i>
            </button>

            <button class="w-full text-left py-2 hover:text-violet-500">
                <span>Features</span>
                <i class="pi pi-angle-down text-xs ml-1"></i>
            </button>


            <a href="#" class="block py-2 hover:text-violet-500">Try Demo</a>

            <a href="#" class="block py-2 hover:text-violet-500">Pricing</a>

            <button class="w-full text-left py-2 hover:text-violet-500">
                <span>Use Cases</span>
                <i class="pi pi-angle-down text-xs ml-1"></i>
            </button>

            <a href="#" class="block py-2 hover:text-violet-500">Documentation</a>

            <a href="#" class="block py-2 hover:text-violet-500">Contact Sales</a>

            <a href="/auth/login" class="block py-2 text-violet-500">Login</a>

        </div>
    </nav>


</template>

<script setup>

import BaseLogo from '../reusbale/BaseLogo.vue';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};
</script>

<template>
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div class="mx-auto px-4 max-w-360 md:px-8 lg:px-8">

            <div class="flex items-center justify-between h-20">

                <div class="shrink-0 items-center">
                    <NuxtLink to="/" class="flex items-center justify-center font-bold">
                        <BaseLogo />
                    </NuxtLink>

                </div>

                <div class="hidden lg:flex items-center justify-between flex-1 ml-8">

                    <div class="flex items-center lg:gap-2 xl:gap-8 text-slate-600">

                        <BaseDropdown :item="productMenu" />

                        <button class="flex items-center space-x-1">
                            <span
                                class="text-[15px] font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">
                                Features
                            </span>
                            <i class="pi pi-angle-down text-xs ml-1"></i>
                        </button>

                        <NuxtLink to="#"
                            class="text-[15px] font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">
                            Try Demo
                        </NuxtLink>

                        <NuxtLink to="/pricing"
                            class="text-[15px] font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">
                            Pricing
                        </NuxtLink>

                        <button
                            class="flex items-center space-x-1 text-[15px] font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">
                            <span>Use Cases</span>
                            <i class="pi pi-angle-down text-xs ml-1"></i>
                        </button>

                        <NuxtLink to="#"
                            class="text-[15px] font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">
                            Documentation
                        </NuxtLink>

                        <div class="h-6 w-px bg-slate-200"></div>

                        <NuxtLink to="/enterprise-custom-plan-offering"
                            class="text-[15px] font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">
                            Contact Sales
                        </NuxtLink>

                    </div>

                    <div class="flex items-center gap-4 shrink-0 ml-6">

                        <NuxtLink to="/auth/login" class="flex items-center space-x-1 text-violet-500">
                            <span>Login</span>
                            <i class="pi pi-angle-right text-lg"></i>
                        </NuxtLink>

                        <NuxtLink to="/auth/register"
                            class="inline-flex items-center justify-center bg-violet-500 text-white font-medium rounded-full px-5 py-2.5 shadow-sm hover:bg-violet-600 transition-colors">
                            Free Sign Up
                        </NuxtLink>

                    </div>

                </div>

                <div class="lg:hidden flex items-center space-x-4">
                    <button @click="toggleMenu" class="text-gray-500 hover:text-gray-600 focus:outline-none">

                        <i :class="['pi', isOpen ? 'pi-times' : 'pi-bars', 'text-2xl']"></i>
                    </button>
                    <NuxtLink to="/auth/register"
                        class="inline-flex items-center justify-center bg-violet-500 text-white font-medium rounded-full px-5 py-2.5 lg:px-6 lg:py-2.5 xl:px-8 shadow-sm">
                        Free Sign Up
                    </NuxtLink>

                </div>

            </div>
        </div>

        <div v-show="isOpen"
            class="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl px-6 py-5 space-y-4">
            <BaseDropdown :item="productMenu" @close="isOpen = false" />

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
import BaseDropdown from '../ui/BaseDropdown.vue';

const isOpen = ref(false);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};


const productMenu = {
    label: "Products",
    children: [
        {
            label: "SERP API",
            link: "/api/serp/serp-api",
        },
        {
            label: "Google API",
            children: [
                { label: "Google SERP API", link: "/api/google/serp-api" },
                { label: "Google News Api", link: "/api/google/news-api" },
                { label: "Google Job API", link: "/api/google/jobs-api" },
                { label: "Google Videos API", link: "/api/google/videos-api" },
            ]
        },
        {
            label: "Bing Api",
            children: [
                { label: "Bing SERP API", link: "/api/bing/serp-api" },
                { label: "Bing News API", link: "/api/bing/news-api" },
                { label: "Bing Images API", link: "/api/bing/image-api" }
            ]
        },
        {
            label: "Yahoo Api",
            children: [
                { label: "Yahoo SERP API", link: "/api/yahoo/serp-api" },
                { label: "Yahoo News API", link: "/api/yahoo/news-api" },
                { label: "Yahoo Images API", link: "/api/yahoo/image-api" }
            ]
        }
    ]
}


const featureMenu = [
    {
        label: "SERP TYPE",
        link: "#"
    },
    {
        label: "Mobile & Desktop"
    }
]

</script>

<template>
    <nav class="relative bg-white border-b border-gray-100 shadow-sm p-2">
        <div class="mx-auto max-w-360 px-4 sm:px-6  xl:px-12">

            <div class="flex items-center justify-between h-16 pt-2">

                <div class="flex shrink-0 items-center">
                    <NuxtLink to="/" class="flex items-center justify-center font-bold">
                        <BaseLogo />
                    </NuxtLink>

                </div>

                <div class="hidden lg:flex items-center lg:gap-2 xl:gap-4 text-gray-600">

                    <BaseDropdown :item="productMenu" />


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
                    <div class="hidden xl:block w-0.5 bg-slate-300 h-8"></div>

                    <a href="#" class="hover:text-violet-500">Contact Sales</a>

                    <NuxtLink to="/auth/login" class="flex items-center space-x-1 text-violet-500">
                        <span>Login</span>
                        <i class="pi pi-angle-right text-lg"></i>
                    </NuxtLink>

                    <NuxtLink to="/auth/register"
                        class="inline-flex items-center justify-center bg-violet-500 text-white font-medium rounded-full px-6 py-3 lg:px-7 lg:py-3 xl:px-8 shadow-sm">
                        Free Sign Up
                    </NuxtLink>
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
            class="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg mx-auto pl-3">

            <BaseDropdown :item="productMenu" />

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
            // image: "/images/navBar/serp-api-logo.png"
        },
        {
            label: "Google API",
            // image: "/images/navBar/google-api.png",
            children: [
                { label: "Google SERP API", link: "/api/google/serp-api" },
                { label: "Google News Api", link: "#" },
                { label: "Google Job API", link: "#" },
                { label: "Google Videos API", link: "#" },
                { label: "Google Images API", link: "#" },
                { label: "Google Shopping API", link: "#" },
                { label: "Google Short Video API", link: "#" },
                { label: "Google Autocomplete API", link: "#" },
                { label: "Google Forums API", link: "#" },
                { label: "Google Locak API", link: "#" }
            ]
        },
        {
            label: "Bing Api",
            // image: "/images/navBar/bing-api.png",
            children: [
                { label: "Bing SERP API", link: "/api/bing/serp-api" },
                { label: "Bing News API", link: "/api/bing/news-api" },
                { label: "Bing Images API", link: "/api/bing/image-api" }
            ]
        },
        {
            label: "Yahoo Api",
            // image: "/images/navBar/yahoo-api.png",
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

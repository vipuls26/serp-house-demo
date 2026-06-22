<template>
    <div class="w-full overflow-hidden">
        <div ref="swiperEl" class="swiper">
            <div class="swiper-wrapper items-center">
                <div v-for="(logo, i) in logos" :key="i"
                    class="swiper-slide flex! items-center justify-center">
                    <img :src="logo.src" :width="logo.width" :height="logo.height" :alt="logo.alt"
                        loading="lazy" :class="logo.class ?? 'h-auto w-full object-contain'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Swiper from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const swiperEl = ref(null)
let swiperInstance = null

const logos = [
    {
        src: '/images/homePage/customer-shopify.png',
        width: 186,
        height: 53,
        alt: 'Shopify',
    },
    {
        src: '/images/homePage/customer-world-bank.png',
        width: 186,
        height: 36,
        alt: 'The World Bank',
    },
    {
        src: '/images/homePage/customer-hotstar.png',
        width: 186,
        height: 53,
        alt: 'Disney Hotstar',
    },
    {
        src: '/images/homePage/customer-dhl.png',
        width: 186,
        height: 25,
        alt: 'DHL',
    },
    {
        src: '/images/homePage/customer-master-card.png',
        width: 97,
        height: 75,
        alt: 'Mastercard',
        class: 'max-w-[80px] h-auto object-contain',
    },
    {
        src: '/images/homePage/customer-royalty-range.png',
        width: 186,
        height: 14,
        alt: 'Royalty Range',
    },
    {
        src: '/images/homePage/customer-tcs.png',
        width: 186,
        height: 51,
        alt: 'TCS',
    },
]

onMounted(() => {
    swiperInstance = new Swiper(swiperEl.value, {
        modules: [Autoplay],
        loop: true,
        speed: 3000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        slidesPerView: 2,
        spaceBetween: 32,
        breakpoints: {
            480: { slidesPerView: 3, spaceBetween: 32 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 48 },
            1280: { slidesPerView: 5, spaceBetween: 56 },
        },
    })
})

onBeforeUnmount(() => {
    swiperInstance?.destroy(true, true)
})
</script>

<style scoped>
.swiper {
    transition-timing-function: linear !important;
}
.swiper-wrapper {
    transition-timing-function: linear !important;
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    button: {
        type: String,
        default: 'button'
    },

    label: {
        type: String,
        default: 'Button'
    },

    variant: {
        type: String,
        default: 'primary'
    },

    disabled: {
        type: Boolean,
        default: false
    }
})

const buttonClass = computed(() => {
    const base = `
        transition-all
        duration-300
        cursor-pointer

        text-sm
        md:text-base

        px-8
        py-2

        md:px-10
        md:py-2.5

        lg:px-12
        lg:py-3

        rounded-full
        font-semibold
    `

    const variants = {
        primary: `
            bg-violet-500
            text-white
            hover:bg-violet-600
        `,

        secondary: `
            border
            border-violet-500
            text-violet-500
            hover:bg-violet-50
        `,

        tertiary: `
            w-full
            bg-violet-500
            text-white

            rounded-xl

            py-3
            md:py-4

            hover:bg-violet-600
        `
    }

    return `${base} ${variants[props.variant]}`
})
</script>

<template>
    <button
        :type="button"
        :disabled="disabled"
        :class="buttonClass"
    >
        {{ label }}
    </button>
</template>
<script setup>
import { computed, ref } from 'vue'

const showPassword = ref(false)

defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },

    name: {
        type: String,
        default: ''
    },

    id: {
        type: String,
        default: ''
    },

    label: {
        type: String,
        default: ''
    },

    placeholder: {
        type: String,
        default: ''
    },

    type: {
        type: String,
        default: 'text'
    },

    required: {
        type: Boolean,
        default: false
    }
})

const inputClass = computed(() => `
    w-full
    border-b-2
    border-slate-300
    outline-none

    transition-all
    duration-300

    px-3
    py-2
    text-sm

    m:px-3.5
    m:py-2.5

    l:px-4
    l:py-2.5

    md:px-4
    md:py-3
    md:text-base

    lg:px-5
    lg:py-3.5

    xl:px-8
    xl:py-6
    xl:text-lg

    placeholder:text-slate-400

    focus:border-violet-500
`)
</script>

<template>
    <div class="flex flex-col gap-2">

        <label
            v-if="label"
            :for="id"
            class="
                text-xs
                m:text-sm
                text-slate-500
            "
        >
            {{ label }}

            <span
                v-if="required"
                class="text-red-500"
            >
                *
            </span>
        </label>

        <input
            v-if="type === 'checkbox'"
            :id="id"
            type="checkbox"
            class="
                h-4
                w-4
                md:h-5
                md:w-5
            "
            @change="$emit('update:modelValue', $event.target.checked)"
        >

        <div
            v-else-if="type === 'password'"
            class="relative"
        >
            <input
                :id="id"
                :type="showPassword ? 'text' : 'password'"
                :class="[inputClass, 'pr-10']"
                :placeholder="placeholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            >

            <span
                class="
                    absolute
                    right-3
                    top-1/2
                    -translate-y-1/2
                    cursor-pointer
                    text-slate-500
                "
                :class="
                    showPassword
                        ? 'pi pi-eye-slash'
                        : 'pi pi-eye'
                "
                @click="showPassword = !showPassword"
            />
        </div>

        <input
            v-else
            :id="id"
            :type="type"
            :class="inputClass"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>
<template>
    <div class="relative">
        <textarea
            :id="id"
            :value="modelValue"
            :rows="rows"
            placeholder=" "
            @input="$emit('update:modelValue', $event.target.value)"
            class="peer w-full resize-none border-b border-gray-300 bg-transparent py-3 focus:border-violet-500 focus:outline-none"
        ></textarea>

        <label
            :for="id"
            class="absolute left-0 top-3 text-gray-500 transition-all duration-200
                   peer-placeholder-shown:top-3
                   peer-placeholder-shown:text-base
                   peer-focus:-top-3
                   peer-focus:text-sm
                   peer-focus:text-violet-500
                   peer-[:not(:placeholder-shown)]:-top-3
                   peer-[:not(:placeholder-shown)]:text-sm"
        >
            {{ label }}
        </label>
    </div>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    id: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    rows: {
        type: Number,
        default: 3
    }
})

defineEmits(['update:modelValue'])
</script>
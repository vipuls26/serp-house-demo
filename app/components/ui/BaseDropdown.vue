<template>
    <div class="relative group" @mouseenter="open = true" @mouseleave="open = false">

        <button v-if="item.children" :class="[
            'flex items-center w-full px-4 py-2 hover:bg-gray-100 ',
            depth === 0 ? 'space-x-1' : 'justify-between'
        ]" type="button">
            <!-- <img :src=item.image class="w-6 h-6 border-0"/> -->
            <span>{{ item.label }}</span>
            <i :class="['pi', depth === 0 ? 'pi-angle-down text-xs ml-1' : 'pi-angle-right text-xs']"></i>
        </button>

        <NuxtLink v-else :to="item.link" class="block px-4 py-2 hover:bg-gray-100 whitespace-nowrap">
            <!-- <img :src=item.image class="w-6 h-6"/> -->
            <span>{{ item.label }}</span>
        </NuxtLink>

        <div v-if="item.children && open" :class="[
            'absolute min-w-56 bg-white shadow-lg rounded-md z-50 py-1',
            depth === 0 ? 'left-0 top-full mt-1' : 'left-full top-0 ml-1'
        ]">
            <BaseDropdown v-for="(child, i) in item.children" :key="i" :item="child" :depth="depth + 1" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    depth: {
        type: Number,
        default: 0
    }
})

const open = ref(false)

defineOptions({
    name: 'BaseDropdown'
})
</script>
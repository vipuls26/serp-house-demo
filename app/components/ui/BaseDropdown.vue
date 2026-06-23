<template>
    <div class="relative">

        <button v-if="item.children" @click.stop="toggleDropdown" :class="[
            'flex items-center w-full px-5 py-3 text-[15px] font-medium transition-colors duration-200 rounded-xl',

            isActive
                ? 'text-violet-600 bg-violet-50'
                : 'text-slate-600 hover:text-violet-600 hover:bg-slate-50',

            depth === 0
                ? 'space-x-1'
                : 'justify-between'
        ]" type="button">
            <span>{{ item.label }}</span>

            <i :class="[
                'pi transition-transform duration-200',
                isOpen && depth === 0 ? 'rotate-180' : '',
                depth === 0 ? 'pi-angle-down text-xs ml-1' : 'pi-angle-right text-xs'
            ]" />
        </button>

        <NuxtLink v-else :to="item.link" @click="closeDropdown" :class="[
            'block px-5 py-3 text-[15px] font-medium transition-colors duration-200 whitespace-nowrap rounded-xl',

            route.path === item.link
                ? 'text-violet-600 bg-violet-50 font-semibold'
                : 'text-slate-600 hover:text-violet-600 hover:bg-slate-50'
        ]">
            <span>{{ item.label }}</span>
        </NuxtLink>

        <Transition enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100" leave-to-class="opacity-0 -translate-y-2 scale-95">
            <div v-show="item.children && isOpen" :class="[
                'bg-slate-50 py-2',
                depth === 0
                    ? 'absolute left-0 top-full min-w-48 border border-slate-200 rounded-2xl shadow-xl max-h-80 overflow-y-auto'
                    : 'mt-2 ml-4 border-l-2 border-slate-100 pl-3 max-h-64 overflow-y-auto'
            ]">
                <BaseDropdown v-for="(child, i) in item.children" :key="i" :item="child" :depth="depth + 1"
                    @close="closeDropdown" />
            </div>
        </Transition>
        
    </div>
</template>

<script setup>
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

const route = useRoute()

const activeChain = useState('active-dropdown-chain', () => [])

const emit = defineEmits(['close'])

const hasActiveChild = (item) => {
    if (item.link === route.path) {
        return true
    }

    if (item.children?.length) {
        return item.children.some(child => hasActiveChild(child))
    }

    return false
}

const isActive = computed(() => hasActiveChild(props.item))

const isOpen = computed(() =>
    activeChain.value[props.depth] === props.item.label
)

const closeDropdown = () => {
    activeChain.value = []
    emit('close')
}

const toggleDropdown = () => {
    if (isOpen.value) {
        activeChain.value = activeChain.value.slice(0, props.depth)
    } else {
        const newChain = activeChain.value.slice(0, props.depth)
        newChain[props.depth] = props.item.label
        activeChain.value = newChain
    }
}

watch(
    () => route.path,
    () => {
        activeChain.value = []
    }
)

defineOptions({
    name: 'BaseDropdown'
})
</script>
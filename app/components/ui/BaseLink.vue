    <template>

    <div v-if="varient === 'primary'">
        <NuxtLink :to="link" class="bg-violet-500 text-white text-sm px-8 py-3 rounded-full font-bold">
            {{ name }}
        </NuxtLink>
    </div>

    <div v-if="varient === 'secondary'">
        <NuxtLink :to="link" class="border border-violet-500 text-violet-500 text-sm px-12 py-4 rounded-full">
            {{ name }}
        </NuxtLink>
    </div>


    <div v-if="varient === 'tertiary'">
        <NuxtLink :to="link" class="inline-flex items-center gap-2 text-violet-500 text-lg pr-3">
            {{ name }}
        </NuxtLink>

        <i class="pi pi-chevron-right text-violet-500"></i>
    </div>
</template>


<script setup>

defineProps({
    link: {
        type: String,
        default: '#'
    },
    name: {
        type: String,
        default: 'link'
    },
    varient: {
        type: String,
        default: 'primary'
    },
    
})

</script>
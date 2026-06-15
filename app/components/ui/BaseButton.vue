<template>

  <div v-if="varient === 'primary'">
    <button :type="button" class="bg-violet-500 text-white text-sm px-10 py-2 rounded-full fond-bold">
      {{ label }}
    </button>
  </div>

  <div v-if="varient === 'secondary'">
    <button :type="button" class="border border-violet-500 text-violet-500 text-sm px-10 py-2 rounded-full">
      {{ label }}
    </button>
  </div>

  <div v-if="varient === 'tertiary'">
    <button :type="button" class="w-full bg-violet-500 text-white p-3 rounded-xl">
      {{ label }}
    </button>
  </div>

</template>

<script setup>
defineProps({
  button: {
    type: String,
    default: 'submit'
  },
  label: {
    type: String,
    default: 'Button'
  },
  varient: {
    type: String,
    default: 'primary'
  }
});
</script>

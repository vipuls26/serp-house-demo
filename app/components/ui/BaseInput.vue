<template>
  <label v-if="label" :for="id" class="text-xs text-slate-500">
    {{ label }} <span class="text-red-400">*</span>
  </label>
  
  
  <input 
    v-if="type === 'checkbox'" 
    :type="type" 
    :id="id" 
    class="mr-2" 
    @change="$emit('update:modelValue', $event.target.checked)" 
  />

  
  <div v-else-if="type === 'password'" class="relative w-full">
    <input 
      :type="showPassword ? 'text' : 'password'" 
      :id="id" 
      class="w-full px-3 py-2.5 placeholder:text-body border-b-2 border-gray-300 outline-none pr-10" 
      :placeholder="placeholder" 
      :value="modelValue" 
      @input="$emit('update:modelValue', $event.target.value)" 
      required 
    />
    <span 
      class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-500"
      :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"
      @click="showPassword = !showPassword"
    ></span>
  </div>

  
  <input 
    v-else 
    :type="type" 
    :id="id" 
    class="w-full px-3 py-2.5 placeholder:text-body border-b-2 border-gray-300 outline-none" 
    :placeholder="placeholder" 
    :value="modelValue" 
    @input="$emit('update:modelValue', $event.target.value)" 
    required 
  />
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: { type: [String, Number, Boolean], default: '' },
  name: { type: String, default: 'text' },
  id: { type: String, default: 'name' },
  label: { type: String },
  placeholder: { type: String },
  type: { type: String, default: 'text' },
  required: { type: Boolean, default: false }
})

defineEmits(['update:modelValue'])

const showPassword = ref(false)
</script>

<script setup lang="ts">
defineProps<{ placeholder: string; modelValue: string }>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

import PersonIcon from '@/assets/person.svg';
</script>

<template>
  <div class="text-input-container">
    <img class="icon" :src="PersonIcon" draggable="false" />

    <input
      type="text"
      :placeholder="placeholder"
      required
      @change="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped>
.text-input-container {
  align-items: center;

  background-color: #e5e5e5;

  border: 2px #a3a3a3 solid;

  border-radius: 5px;

  display: flex;

  padding: 8px;
}

.text-input-container input {
  background: none;

  border: none;

  box-sizing: border-box;

  color: #525252;

  flex: 1;

  font-family: 'Inter', sans-serif;

  font-weight: 500;

  outline: none;

  padding: 8px;
}
</style>

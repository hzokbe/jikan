<script setup lang="ts">
defineProps<{ placeholder: string; modelValue: string }>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

import PersonIcon from '@/assets/person.svg';
</script>

<template>
  <div class="input-container">
    <img class="icon" :src="PersonIcon" draggable="false" />

    <input
      type="text"
      :placeholder="placeholder"
      required
      @change="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style scoped></style>

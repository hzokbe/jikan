<script setup lang="ts">
defineProps<{ text: string; disabled: boolean }>();

const emit = defineEmits(['click']);

const click = () => {
  emit('click');
};
</script>

<template>
  <button type="submit" @click="click" :disabled="disabled">{{ text }}</button>
</template>

<style scoped>
button {
  background-color: #2563eb;

  border: none;

  border-radius: 10px;

  color: #93c5fd;

  cursor: pointer;

  font-size: 1rem;

  font-weight: bolder;

  padding: 16px 32px;

  transition: background-color 0.25s ease-in-out;
}

button:hover {
  background-color: #1d4ed8;
}
</style>

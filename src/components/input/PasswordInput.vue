<script setup lang="ts">
defineProps<{ placeholder: string; modelValue: string }>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

import LockIcon from '@/assets/lock.svg';

import VisibilityOnIcon from '@/assets/visibility_on.svg';

import VisibilityOffIcon from '@/assets/visibility_off.svg';

import { ref } from 'vue';

const visibilityOn = ref(false);

const changeVisibility = () => (visibilityOn.value = !visibilityOn.value);
</script>

<template>
  <div class="password-input-container">
    <img class="icon" :src="LockIcon" draggable="false" />

    <input
      :type="visibilityOn ? 'text' : 'password'"
      :placeholder="placeholder"
      required
      @change="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />

    <button type="button" title="Change Visiblity" @click="changeVisibility">
      <img :src="!visibilityOn ? VisibilityOnIcon : VisibilityOffIcon" draggable="false" />
    </button>
  </div>
</template>

<style scoped>
.password-input-container {
  align-items: center;

  background-color: #e5e5e5;

  border: 2px #a3a3a3 solid;

  border-radius: 5px;

  display: flex;

  padding: 8px;
}

.password-input-container input {
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

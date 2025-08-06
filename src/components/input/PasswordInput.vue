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
  <div class="input-container">
    <img class="icon" :src="LockIcon" />

    <input
      :type="visibilityOn ? 'text' : 'password'"
      :placeholder="placeholder"
      required
      @change="(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)"
    />

    <button type="button" title="Change Visiblity" @click="changeVisibility">
      <img :src="!visibilityOn ? VisibilityOnIcon : VisibilityOffIcon" />
    </button>
  </div>
</template>

<style scoped></style>

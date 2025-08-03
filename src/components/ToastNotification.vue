<script setup lang="ts">
import InfoIcon from '@/assets/info.svg';

import WarningIcon from '@/assets/warning.svg';

import ErrorIcon from '@/assets/error.svg';

import { computed } from 'vue';

const props = defineProps<{ message: string; type: 'info' | 'warning' | 'error' }>();

const icon = computed(() => {
  switch (props.type) {
    case 'info':
      return InfoIcon;
    case 'warning':
      return WarningIcon;
    case 'error':
    default:
      return ErrorIcon;
  }
});
</script>

<template>
  <div>
    <img :src="icon" alt="Toast Notification Icon" />

    <p>{{ message }}</p>
  </div>
</template>

<style scoped></style>

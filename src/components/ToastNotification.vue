<script setup lang="ts">
import SuccessIcon from '@/assets/info.svg';

import InfoIcon from '@/assets/info.svg';

import WarningIcon from '@/assets/warning.svg';

import ErrorIcon from '@/assets/error.svg';

import { computed, onMounted, ref } from 'vue';

const props = defineProps<{ message: string; type: 'info' | 'success' | 'warning' | 'error' }>();

const icon = computed(() => {
  switch (props.type) {
    case 'success':
      return SuccessIcon;
    case 'info':
      return InfoIcon;
    case 'warning':
      return WarningIcon;
    case 'error':
    default:
      return ErrorIcon;
  }
});

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, 3000);
});
</script>

<template>
  <transition name="fade">
    <div v-show="visible" :class="type">
      <img :src="icon" alt="Toast Notification Icon" />
      <p>{{ message }}</p>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

div {
  align-items: center;

  border-radius: 5px;

  bottom: 0px;

  color: #fafafa;

  display: flex;

  font-family: 'Inter', sans-serif;

  font-weight: bold;

  gap: 8px;

  margin: 8px;

  padding: 16px 32px;

  position: absolute;

  right: 0px;

  user-select: none;

  width: max-content;
}

p {
  text-wrap: nowrap;
}

.info {
  background-color: #525252;
}

.success {
  background-color: #22c55e;
}

.warning {
  background-color: #facc15;
}

.error {
  background-color: #dc2626;
}
</style>

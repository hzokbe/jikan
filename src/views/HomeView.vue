<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const date = ref(new Date());

const updateDate = () => {
  date.value = new Date();
};

let updateDateIntervalId: number | null = null;

const getFormatedTime = computed((): string => {
  const hours = date.value.getHours();

  const minutes = date.value.getMinutes();

  const seconds = date.value.getSeconds();

  const hoursAsString = hours < 10 ? '0' + hours : hours.toString();

  const minutesAsString = minutes < 10 ? '0' + minutes : minutes.toString();

  const secondsAsString = seconds < 10 ? '0' + seconds : seconds.toString();

  return `${hoursAsString}:${minutesAsString}:${secondsAsString}`;
});

onMounted(() => {
  updateDateIntervalId = setInterval(updateDate, 1000);
});

onUnmounted(() => {
  if (updateDateIntervalId) {
    clearInterval(updateDateIntervalId);
  }
});
</script>

<template>
  <div>
    <p>{{ getFormatedTime }}</p>
  </div>
</template>

<style scoped></style>

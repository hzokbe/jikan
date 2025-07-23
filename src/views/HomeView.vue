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

const wasStarted = ref(false);

const start = () => {
  if (wasStarted.value) {
    return;
  }

  const hours = date.value.getHours();

  const minutes = date.value.getMinutes();

  const seconds = date.value.getSeconds();

  const hoursAsString = hours < 10 ? '0' + hours : hours.toString();

  const minutesAsString = minutes < 10 ? '0' + minutes : minutes.toString();

  const secondsAsString = seconds < 10 ? '0' + seconds : seconds.toString();

  console.log(`start: ${hoursAsString}:${minutesAsString}:${secondsAsString}`);

  wasStarted.value = true;
};

const end = () => {
  if (!wasStarted.value) {
    return;
  }

  const hours = date.value.getHours();

  const minutes = date.value.getMinutes();

  const seconds = date.value.getSeconds();

  const hoursAsString = hours < 10 ? '0' + hours : hours.toString();

  const minutesAsString = minutes < 10 ? '0' + minutes : minutes.toString();

  const secondsAsString = seconds < 10 ? '0' + seconds : seconds.toString();

  console.log(`end: ${hoursAsString}:${minutesAsString}:${secondsAsString}`);

  wasStarted.value = false;
};

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

    <button @click="start">Start</button>

    <button @click="end">End</button>
  </div>
</template>

<style scoped></style>

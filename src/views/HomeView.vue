<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';

const date = ref(new Date());

const updateDate = () => {
  date.value = new Date();
};

let updateDateIntervalId: number | null = null;

const formatTime = (date: Date): string => {
  const hours = date.getHours();

  const minutes = date.getMinutes();

  const seconds = date.getSeconds();

  const hoursAsString = hours < 10 ? '0' + hours : hours.toString();

  const minutesAsString = minutes < 10 ? '0' + minutes : minutes.toString();

  const secondsAsString = seconds < 10 ? '0' + seconds : seconds.toString();

  return `${hoursAsString}:${minutesAsString}:${secondsAsString}`;
};

const getFormatedTime = computed((): string => {
  return formatTime(date.value);
});

const wasStarted = ref(false);

const start = () => {
  if (wasStarted.value) {
    return;
  }

  console.log(`start: ${formatTime(new Date())}`);

  wasStarted.value = true;
};

const pause = () => {
  if (!wasStarted.value) {
    return;
  }

  console.log(`pause: ${formatTime(new Date())}`);
};

const end = () => {
  if (!wasStarted.value) {
    return;
  }

  console.log(`end: ${formatTime(new Date())}`);

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

    <button @click="pause">Pause</button>

    <button @click="end">End</button>
  </div>
</template>

<style scoped></style>

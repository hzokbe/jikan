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

type Status = 'started' | 'paused' | 'stopped';

const status = ref<Status>('stopped');

const start = () => {
  if (status.value == 'started') {
    return;
  }

  console.log(`clock was started: ${formatTime(new Date())}`);

  status.value = 'started';
};

const pause = () => {
  if (status.value == 'stopped') {
    return;
  }

  console.log(`clock was paused: ${formatTime(new Date())}`);

  if (status.value == 'paused') {
    status.value = 'started';

    console.log(`clock was started: ${formatTime(new Date())}`);
  } else {
    status.value = 'paused';

    console.log(`clock was paused: ${formatTime(new Date())}`);
  }
};

const end = () => {
  if (status.value == 'stopped') {
    return;
  }

  console.log(`clock was stopped: ${formatTime(new Date())}`);

  status.value = 'stopped';
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

    <p>Status: {{ status }}</p>

    <button @click="start">Start</button>

    <button @click="pause">Pause</button>

    <button @click="end">End</button>
  </div>
</template>

<style scoped></style>

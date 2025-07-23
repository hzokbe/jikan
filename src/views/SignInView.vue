<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');

const password = ref('');

const submit = async () => {
  console.log('submit');

  console.log(`'${username.value}'`);

  console.log(`'${password.value}'`);
};
</script>

<template>
  <div>
    <h1>Sign In</h1>

    <form @submit.prevent="submit">
      <input type="text" placeholder="Username" required v-model="username" />

      <input type="password" placeholder="Password" required v-model="password" />

      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<style scoped></style>

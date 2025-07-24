<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/PasswordInput.vue';

const username = ref('');

const password = ref('');

const passwordConfirmation = ref('');

const submit = async () => {
  console.log('submit');

  console.log(`'${username.value}'`);

  console.log(`'${password.value}'`);

  console.log(`'${passwordConfirmation.value}'`);
};
</script>

<template>
  <div>
    <h1>Sign Up</h1>

    <form @submit.prevent="submit">
      <input type="text" placeholder="Username" required v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <PasswordInput placeholder="Password Confirmation" v-model="passwordConfirmation" />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped></style>

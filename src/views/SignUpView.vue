<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/PasswordInput.vue';

import TextInput from '@/components/TextInput.vue';

const username = ref('');

const password = ref('');

const passwordConfirmation = ref('');

const submit = async () => {
  console.log('submit');

  console.log(`'${username.value}'`);

  console.log(`'${password.value}'`);

  console.log(`'${passwordConfirmation.value}'`);

  if (password.value != passwordConfirmation.value) {
    console.error('invalid password confirmation');

    return;
  }
};
</script>

<template>
  <div>
    <h1>Sign Up</h1>

    <form @submit.prevent="submit">
      <TextInput placeholder="Username" v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <PasswordInput placeholder="Password Confirmation" v-model="passwordConfirmation" />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped></style>

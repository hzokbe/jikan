<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/PasswordInput.vue';

import TextInput from '@/components/TextInput.vue';

import api from '@/api/api';

import { AxiosError } from 'axios';

const username = ref('');

const password = ref('');

const submit = async () => {
  console.log('submit');

  console.log(`'${username.value}'`);

  console.log(`'${password.value}'`);

  try {
    const basicToken = btoa(`${username.value}:${password.value}`);

    await api.post(
      '/sign-in',
      {},
      {
        headers: {
          Authorization: `Basic ${basicToken}`,
        },
      },
    );
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
    }
  }
};
</script>

<template>
  <div>
    <h1>Sign In</h1>

    <form @submit.prevent="submit">
      <TextInput placeholder="Username" v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>

      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<style scoped></style>

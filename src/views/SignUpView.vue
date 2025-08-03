<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/PasswordInput.vue';

import TextInput from '@/components/TextInput.vue';

import { AxiosError } from 'axios';

import api from '@/api/api';

const username = ref('');

const password = ref('');

const passwordConfirmation = ref('');

const submit = async () => {
  if (password.value != passwordConfirmation.value) {
    console.error('invalid password confirmation');

    return;
  }

  try {
    await api.post('/sign-up', {
      username: username.value,
      rawPassword: password.value,
    });
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
    }
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

      <p>Already have an account? <a href="/sign-in">Sign In</a></p>

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped></style>

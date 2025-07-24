<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/PasswordInput.vue';

import TextInput from '@/components/TextInput.vue';

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
      <TextInput placeholder="Username" v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<style scoped></style>

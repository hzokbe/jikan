<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/input/PasswordInput.vue';

import TextInput from '@/components/input/TextInput.vue';

import api from '@/api/api';

import { AxiosError } from 'axios';

import ToastNotification from '@/components/ToastNotification.vue';

import { useRouter } from 'vue-router';

const username = ref('');

const password = ref('');

const showToastNotification = ref(false);

const toastNotificationMessage = ref('');

const toastNotificationType = ref<'info' | 'warning' | 'error' | 'success'>('info');

const router = useRouter();

const submitButtonText = ref('Sign In');

const isSubmitButtonDisabled = ref(false);

const submit = async () => {
  showToastNotification.value = false;

  try {
    submitButtonText.value = 'Loading...';

    isSubmitButtonDisabled.value = true;

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

    showToastNotification.value = true;

    toastNotificationMessage.value = 'Successfully signed in';

    toastNotificationType.value = 'success';

    router.push('/');
  } catch (err) {
    showToastNotification.value = true;

    toastNotificationType.value = 'error';

    if (err instanceof AxiosError) {
      const response = err.response;

      if (response) {
        const status = response?.status;

        if (status == 401) {
          toastNotificationMessage.value = 'Wrong username or password';
        }
      } else {
        toastNotificationMessage.value = 'Network error';
      }
    }
  }

  isSubmitButtonDisabled.value = false;

  submitButtonText.value = 'Sign In';
};
</script>

<template>
  <div>
    <h1>Sign In</h1>

    <form class="form" @submit.prevent="submit">
      <TextInput placeholder="Username" v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <p>Don't have an account? <a href="/sign-up">Sign Up</a></p>

      <button type="submit" :disabled="isSubmitButtonDisabled">{{ submitButtonText }}</button>
    </form>

    <ToastNotification
      :message="toastNotificationMessage"
      :type="toastNotificationType"
      v-if="showToastNotification"
    />
  </div>
</template>

<style scoped>
h1 {
  color: #525252;

  user-select: none;

  font-family: 'Inter', sans-serif;

  font-size: 2.75rem;

  padding: 8px;

  width: max-content;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/input/PasswordInput.vue';

import TextInput from '@/components/input/TextInput.vue';

import { AxiosError } from 'axios';

import api from '@/api/api';

import ToastNotification from '@/components/ToastNotification.vue';

import { useRouter } from 'vue-router';

const username = ref('');

const password = ref('');

const passwordConfirmation = ref('');

const showToastNotification = ref(false);

const toastNotificationMessage = ref('');

const toastNotificationType = ref<'info' | 'warning' | 'error' | 'success'>('info');

const router = useRouter();

const submitButtonText = ref('Sign Up');

const isSubmitButtonDisabled = ref(false);

const submit = async () => {
  showToastNotification.value = false;

  if (password.value != passwordConfirmation.value) {
    showToastNotification.value = true;

    toastNotificationMessage.value = 'Invalid password confirmation';

    toastNotificationType.value = 'error';

    return;
  }

  try {
    submitButtonText.value = 'Loading...';

    isSubmitButtonDisabled.value = true;

    await api.post('/sign-up', {
      username: username.value,
      rawPassword: password.value,
    });

    showToastNotification.value = true;

    toastNotificationMessage.value = 'Successfully registered';

    toastNotificationType.value = 'success';

    setTimeout(() => router.push('/sign-in'), 3000);
  } catch (err) {
    showToastNotification.value = true;

    toastNotificationType.value = 'error';

    if (err instanceof AxiosError) {
      const response = err.response;

      if (response) {
        toastNotificationMessage.value = response.data.message;
      } else {
        toastNotificationMessage.value = 'Network error';
      }
    }
  }

  isSubmitButtonDisabled.value = false;

  submitButtonText.value = 'Sign Up';
};
</script>

<template>
  <div>
    <h1>Sign Up</h1>

    <form class="form" @submit.prevent="submit">
      <TextInput placeholder="Username" v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <PasswordInput placeholder="Password Confirmation" v-model="passwordConfirmation" />

      <button type="submit" :disabled="isSubmitButtonDisabled">{{ submitButtonText }}</button>

      <ToastNotification
        :message="toastNotificationMessage"
        :type="toastNotificationType"
        v-if="showToastNotification"
      />
    </form>
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

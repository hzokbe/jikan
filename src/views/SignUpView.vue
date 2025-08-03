<script setup lang="ts">
import { ref } from 'vue';

import PasswordInput from '@/components/PasswordInput.vue';

import TextInput from '@/components/TextInput.vue';

import { AxiosError } from 'axios';

import api from '@/api/api';

import ToastNotification from '@/components/ToastNotification.vue';

import { useRouter } from 'vue-router';

const username = ref('');

const password = ref('');

const passwordConfirmation = ref('');

const showToastNotification = ref(false);

const toastNotificationMessage = ref('');

const toastNotificationType = ref<'info' | 'warning' | 'error'>('info');

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

    toastNotificationType.value = 'info';

    setTimeout(() => router.push('/sign-in'), 3000);
  } catch (err) {
    showToastNotification.value = true;

    toastNotificationType.value = 'error';

    if (err instanceof AxiosError) {
      const response = err.response;

      if (response) {
        toastNotificationMessage.value = response.data.message;
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

    <form @submit.prevent="submit">
      <TextInput placeholder="Username" v-model="username" />

      <PasswordInput placeholder="Password" v-model="password" />

      <PasswordInput placeholder="Password Confirmation" v-model="passwordConfirmation" />

      <p>Already have an account? <a href="/sign-in">Sign In</a></p>

      <button type="submit" :disabled="isSubmitButtonDisabled">{{ submitButtonText }}</button>
    </form>

    <ToastNotification
      :message="toastNotificationMessage"
      :type="toastNotificationType"
      v-if="showToastNotification"
    />
  </div>
</template>

<style scoped></style>

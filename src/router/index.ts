import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

import SignUpView from '@/views/SignUpView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView,
    },
    {
      name: 'Sign Up',
      path: '/sign-up',
      component: SignUpView,
    },
  ],
});

export default router;

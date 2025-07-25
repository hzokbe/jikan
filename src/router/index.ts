import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

import SignUpView from '@/views/SignUpView.vue';

import SignInView from '@/views/SignInView.vue';

import isAuthenticated from '@/utils/authentication';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        if (isAuthenticated()) {
          next();
        } else {
          next({ name: 'Sign In' });
        }
      },
    },
    {
      name: 'Sign Up',
      path: '/sign-up',
      component: SignUpView,
    },
    {
      name: 'Sign In',
      path: '/sign-in',
      component: SignInView,
    },
  ],
});

export default router;

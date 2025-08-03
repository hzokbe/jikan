import api from '@/api/api';

import { AxiosError } from 'axios';

export default async function isAuthenticated() {
  try {
    await api.get('/is-authenticated');

    return true;
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error(err);
    }
  }

  return false;
}

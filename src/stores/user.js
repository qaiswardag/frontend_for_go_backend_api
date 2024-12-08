import { defineStore } from 'pinia';

import { vueFetch } from '@/composables/vueFetch';

// get images
const {
  handleData,
  fetchedData,
  isError,
  error,
  errors,
  isLoading,
  isSuccess,
} = vueFetch();

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    // Load Unsplash images
    async setLoadUser() {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      this.setUser({
        fetchedData: null,
        isError: null,
        error: null,
        errors: null,
        isLoading: true,
        isSuccess: null,
      });

      try {
        await handleData(
          `${backendUrl}/user/user`,
          {
            credentials: 'include',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          },
          {
            additionalCallTime: 1000,
          }
        );
      } catch (error) {
        console.log(`error`, error);
      }

      // Update state directly instead of committing mutations
      this.setUser({
        fetchedData,
        isError,
        error,
        errors,
        isLoading,
        isSuccess,
      });
    },
  },
});

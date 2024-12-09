import { defineStore } from 'pinia';
import { clearCookie } from '@/composables/clearCookie';
import { vueFetch } from '@/composables/vueFetch';

const {
  handleData,
  fetchedData,
  isError,
  error,
  errors,
  isLoading,
  isSuccess,
} = vueFetch();

const {
  handleData: handleDataSignOut,
  fetchedData: fetchedDataSignOut,
  isError: isErrorSignOut,
  error: errorSignOut,
  errors: errorsSignOut,
  isLoading: isLoadingSignOut,
  isSuccess: isSuccessSignOut,
} = vueFetch();

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoading: false,
  }),
  getters: {
    getUser: (state) => state.user,
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    setIsLoading(payload) {
      this.isLoading = payload;
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

    // sign out
    async setUserSignOut(payload) {
      this.setUser(null);

      clearCookie('session_token');
      clearCookie('csrf_token');

      const backendUrl = import.meta.env.VITE_BACKEND_URL;

      try {
        const data = await handleDataSignOut(
          `${backendUrl}/user/sign-out`,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          },
          {
            additionalCallTime: 1000,
          }
        );
      } catch (error) {
        console.log(`error:`, error);
      }
    },
  },
});

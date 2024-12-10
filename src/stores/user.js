import { defineStore } from 'pinia';
import { clearCookie } from '@/composables/clearCookie';
import { vueFetch } from '@/composables/vueFetch';

const {
  handleData,
  fetchedData: fetchedDataUser,
  isError: isErrorUser,
  error: errorUser,
  errors: errorsUser,
  isLoading: isLoadingUser,
  isSuccess: isSuccessUser,
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
        fetchedData: fetchedDataUser,
        isError: isErrorUser,
        error: errorUser,
        errors: errorsUser,
        isLoading: isLoadingUser,
        isSuccess: isSuccessUser,
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

        this.setUser({
          fetchedData: fetchedDataUser,
          isError: isErrorUser,
          error: errorUser,
          errors: errorsUser,
          isLoading: isLoadingUser,
          isSuccess: isSuccessUser,
        });
      } catch (error) {
        console.log(`error`, error);
      }
    },

    // sign out
    async setUserSignOut(payload) {
      this.setUser({
        handleData: handleDataSignOut,
        fetchedData: fetchedDataSignOut,
        isError: isErrorSignOut,
        error: errorSignOut,
        errors: errorsSignOut,
        isLoading: isLoadingSignOut,
        isSuccess: isSuccessSignOut,
      });

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

        // Update state directly instead of committing mutations
        this.setUser({
          handleData: handleDataSignOut,
          fetchedData: fetchedDataSignOut,
          isError: isErrorSignOut,
          error: errorSignOut,
          errors: errorsSignOut,
          isLoading: isLoadingSignOut,
          isSuccess: isSuccessSignOut,
        });
      } catch (error) {
        console.log(`error:`, error);
      }
    },
  },
});

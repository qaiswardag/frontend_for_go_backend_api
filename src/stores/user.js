import { defineStore } from 'pinia';
import { vueFetch } from '@/composables/vueFetch';

const {
  handleData: handleDataUser,
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

const {
  handleData: handleDataSignIn,
  fetchedData: fetchedDataSignIn,
  isError: isErrorSignIn,
  error: errorSignIn,
  errors: errorsSignIn,
  isLoading: isLoadingSignIn,
  isSuccess: isSuccessSignIn,
} = vueFetch();

const {
  handleData: handleDataSignUp,
  fetchedData: fetchedDataSignUp,
  isError: isErrorSignUp,
  error: errorSignUp,
  errors: errorsSignUp,
  isLoading: isLoadingSignUp,
  isSuccess: isSuccessSignUp,
} = vueFetch();

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    backendUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  getters: {
    getUser: (state) => state.user,
    getIsAuthenticated: (state) => state.isAuthenticated,
    getIsLoading: (state) => state.isLoading,
    getBackendUrl: (state) => state.backendUrl,
  },
  actions: {
    setUser(payload) {
      this.user = payload;
    },
    setIsLoading(payload) {
      this.isLoading = payload;
    },
    setIsAuthenticated(payload) {
      this.isAuthenticated = payload;
    },
    setBackendUrl(payload) {
      this.backendUrl = payload;
    },

    // Sign in user
    async setLoadUserSignIn(userForm) {
      const { email, password } = userForm;
      try {
        this.setUser({
          fetchedDataSignIn,
          isErrorSignIn,
          errorSignIn,
          errorsSignIn,
          isLoadingSignIn,
          isSuccessSignIn,
        });

        await handleDataSignIn(
          `${this.getBackendUrl}/user/sign-in`,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email,
              password: password,
              me: 'Do not read this text. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
            }),
          },
          {
            additionalCallTime: 500,
          }
        );

        this.setUser({
          fetchedDataSignIn,
          isErrorSignIn,
          errorSignIn,
          errorsSignIn,
          isLoadingSignIn,
          isSuccessSignIn,
        });
      } catch (error) {
        console.error(`Error:`, error);
      }
    },

    // Sign up user
    async setLoadUserSignUp(userForm) {
      const { username, firstName, lastName, email, password } = userForm;
      try {
        this.setUser({
          fetchedDataSignUp,
          isErrorSignUp,
          errorSignUp,
          errorsSignUp,
          isLoadingSignUp,
          isSuccessSignUp,
        });

        await handleDataSignUp(
          `${this.getBackendUrl}/user/sign-up`,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              first_name: firstName,
              last_name: lastName,
              email: email,
              password: password,
            }),
          },
          {
            additionalCallTime: 500,
          }
        );

        this.setUser({
          fetchedDataSignUp,
          isErrorSignUp,
          errorSignUp,
          errorsSignUp,
          isLoadingSignUp,
          isSuccessSignUp,
        });
      } catch (error) {
        console.error(`Error:`, error);
      }
    },

    // Get authenticated user
    async setLoadUser() {
      this.setUser({
        fetchedDataUser,
        isErrorUser,
        errorUser,
        errorsUser,
        isLoadingUser,
        isSuccessUser,
      });
      try {
        await handleDataUser(
          `${this.getBackendUrl}/user/user`,
          {
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          },
          {
            additionalCallTime: 500,
          }
        );

        this.setUser({
          fetchedDataUser,
          isErrorUser,
          errorUser,
          errorsUser,
          isLoadingUser,
          isSuccessUser,
        });
      } catch (error) {
        console.error(`Error`, error);
      }
    },

    // Sign out user
    async setUserSignOut(payload) {
      this.setIsLoading(true);
      this.setUser({
        handleData: handleDataSignOut,
        fetchedDataSignOut,
        isErrorSignOut,
        errorSignOut,
        errorsSignOut,
        isLoadingSignOut,
        isSuccessSignOut,
      });

      try {
        await handleDataSignOut(
          `${this.getBackendUrl}/user/sign-out`,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          },
          {
            additionalCallTime: 500,
          }
        );

        this.setUser({
          handleData: handleDataSignOut,
          fetchedDataSignOut,
          isErrorSignOut,
          errorSignOut,
          errorsSignOut,
          isLoadingSignOut,
          isSuccessSignOut,
        });
        this.setIsLoading(false);
      } catch (error) {
        this.setIsLoading(false);
        console.error(`Error:`, error);
      }
    },
  },
});

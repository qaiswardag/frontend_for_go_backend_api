<script setup>
import { RouterLink } from 'vue-router';
import { vueFetch } from '@/composables/vueFetch';
import { clearCookie } from '@/composables/clearCookie';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();

const {
  handleData,
  fetchedData,
  isError,
  error,
  errors,
  isLoading,
  isSuccess,
} = vueFetch();

const handleLogOut = async function () {
  userStore.setUserSignOut();
};
</script>

<template>
  <nav aria-label="Global">
    <div class="flex-1 space-y-4 px-2 pb-4">
      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Home' }"
      >
        Home
      </RouterLink>

      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Dashboard' }"
      >
        Dashboard
      </RouterLink>

      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Jobs' }"
      >
        Jobs
      </RouterLink>

      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Login' }"
      >
        Sign in
      </RouterLink>

      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Register' }"
      >
        Sign up
      </RouterLink>

      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Password' }"
      >
        Reset password
      </RouterLink>
      <button
        class="w-full text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        type="button"
        @click="handleLogOut"
      >
        Sign out
      </button>
    </div>
  </nav>
</template>

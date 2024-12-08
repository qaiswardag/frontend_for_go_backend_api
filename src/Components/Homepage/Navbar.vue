<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const getUser = computed(() => {
  return userStore.getUser;
});

function fetchUser() {
  userStore.setLoadUser();
}

onMounted(() => {
  fetchUser();
});
</script>

<template>
  <header class="w-1/3 text-sm bg-yellow-100 h-full flex">
    <div
      class="text-sm font-medium text-myPrimaryDarkGrayColor flex gap-2 items-center cursor-pointer px-4"
    >
      User: {{ JSON.stringify(getUser) }}
    </div>
  </header>
  <header
    class="w-2/3 text-sm bg-purple-300 h-full flex items-center justify-end"
  >
    <nav aria-label="Global">
      <div class="flex items-center justify-end myPrimaryGap pr-4">
        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Home' }"
        >
          Home
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Dashboard' }"
        >
          Dashboard
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Jobs' }"
        >
          Jobs
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Login' }"
        >
          Login
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Register' }"
        >
          Register
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Password' }"
        >
          Reset password
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
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
        Login
      </RouterLink>

      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Register' }"
      >
        Register
      </RouterLink>
      <RouterLink
        class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
        :to="{ name: 'Password' }"
      >
        Reset password
      </RouterLink>
    </div>
  </nav>
</template>

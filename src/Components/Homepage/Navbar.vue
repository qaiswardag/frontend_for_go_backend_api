<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <p
    class="text-sm font-medium text-myPrimaryDarkGrayColor flex gap-2 items-center cursor-pointer p-4"
  >
    Search
  </p>
  <header class="w-2/3 text-sm">
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
          :to="{ name: 'Jobs' }"
        >
          Jobs
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-medium text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
          :to="{ name: 'Dashboard' }"
        >
          Dashboard
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

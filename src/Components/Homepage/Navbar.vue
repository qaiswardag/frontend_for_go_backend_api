<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import UserBadge from '@/Components/Auth/UserBadge.vue';
import SignOut from '@/Components/Auth/SignOut.vue';
</script>

<template>
  <div class="flex w-full h-full">
    <header class="flex items-center justify-end text-sm h-full w-full">
      <nav
        class="hidden md:block w-11/12"
        aria-label="Global"
      >
        <div class="flex items-center justify-end myPrimaryGap pr-4">
          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center py-2 px-6 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'SignIn' }"
          >
            Sign in
          </RouterLink>

          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center py-2 px-6 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'SignUp' }"
          >
            Sign up
          </RouterLink>

          <SignOut layoutDesign="topMainMenu"></SignOut>
        </div>
      </nav>

      <UserBadge :borderLeft="true"></UserBadge>
    </header>
  </div>
</template>

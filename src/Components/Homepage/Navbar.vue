<script setup>
import { RouterLink } from 'vue-router';
import UserBadge from '@/Components/Auth/UserBadge.vue';
import SignOut from '@/Components/Auth/SignOut.vue';

import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const getIsLoading = computed(() => {
  return userStore.getIsLoading;
});

const getUser = computed(() => {
  return userStore.getUser;
});
</script>

<template>
  <div class="flex w-full h-full">
    <header class="flex items-center justify-end text-sm h-full w-full">
      <nav
        class="hidden md:flex w-11/12 md:myPrimaryGap md:justify-between font-normal lg:text-base text-xs pl-2"
        aria-label="Global"
      >
        <div class="flex items-center justify-end myPrimaryGap pr-4">
          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center py-2 px-6 gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'Home' }"
          >
            Home
          </RouterLink>
        </div>

        <div class="flex items-center justify-end myPrimaryGap pr-4">
          <div class="flex items-center justify-end myPrimaryGap pr-4">
            {{
              getUser &&
              getUser.fetchedDataSignIn &&
              getUser.fetchedDataSignIn &&
              getUser.fetchedDataSignIn.user &&
              getUser.fetchedDataSignIn.user.FirstName +
                ' ' +
                getUser.fetchedDataSignIn.user.LastName
            }}
          </div>
          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center py-2 px-6 gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'SignIn' }"
          >
            Sign in
          </RouterLink>

          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center py-2 px-6 gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
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

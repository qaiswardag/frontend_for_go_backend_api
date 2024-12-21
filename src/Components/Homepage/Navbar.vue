<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';
import UserBadge from '@/Components/Auth/UserBadge/UserBadge.vue';
import { computed } from 'vue';

const userStore = useUserStore();

const getUser = computed(() => {
  return userStore.getUser;
});

const handleLogOut = async function () {
  userStore.setUserSignOut();
};
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
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'SignIn' }"
          >
            Sign in
          </RouterLink>

          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'SignUp' }"
          >
            Sign up
          </RouterLink>

          <button
            :class="{
              'animate-pulse bg-orange-500 ':
                getUser && getUser.isLoadingSignOut,
              'hover:bg-myPrimaryLightGrayColor':
                getUser && !getUser.isLoadingSignOut,
            }"
            class="relative text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full bg-gray-50 justify-center"
            type="button"
            @click="handleLogOut"
          >
            <template v-if="getUser && getUser.isLoadingSignOut">
              <span class="flex absolute h-3 w-3 right-0">
                <span
                  class="animate-spin absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"
                ></span>
                <span
                  class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"
                ></span>
              </span>
            </template>
            <span> Sign out </span>
          </button>
        </div>
      </nav>

      <UserBadge :borderLeft="true"></UserBadge>
    </header>
  </div>
</template>

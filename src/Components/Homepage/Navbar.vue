<script setup>
import { computed, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/user';

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
        class="hidden md:block w-5/6"
        aria-label="Global"
      >
        <div class="flex items-center justify-end myPrimaryGap pr-4">
          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'Home' }"
          >
            Home
          </RouterLink>

          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'Dashboard' }"
          >
            Dashboard
          </RouterLink>

          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'Jobs' }"
          >
            Jobs
          </RouterLink>

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

          <RouterLink
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            :to="{ name: 'Password' }"
          >
            Reset password
          </RouterLink>

          <button
            class="text-myPrimaryDarkGrayColor group flex items-center px-4 py-2 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50 justify-center"
            type="button"
            @click="handleLogOut"
          >
            Sign out
          </button>
        </div>
      </nav>

      <!-- User # start -->
      <div class="w-1/6 text-sm h-full flex items-center justify-end">
        <div
          class="text-sm font-medium text-myPrimaryDarkGrayColor cursor-pointer px-4"
        >
          <template v-if="getUser && getUser.isLoading && !getUser.isError">
            <div
              class="rounded-l-full min-h-[3rem] flex items-center justify-center"
            >
              <span class="flex justify-center items-center h-10 w-10">
                <span class="relative flex justify-center items-center h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-myPrimaryLinkColor opacity-50"
                  ></span>
                  <span
                    class="relative inline-flex rounded-full h-3 w-3 bg-myPrimaryLinkColor"
                  ></span>
                </span>
              </span>
            </div>
          </template>
          <template
            v-if="
              getUser &&
              getUser.fetchedData &&
              getUser.fetchedData.user &&
              getUser.fetchedData.user.FirstName &&
              getUser.fetchedData.user.LastName &&
              !getUser.isLoading &&
              !getUser.isError
            "
          >
            <div
              class="rounded-l-full min-h-[3rem] flex items-center justify-center"
            >
              <div
                class="text-white flex-shrink-0 gap-0.5 h-10 w-10 rounded-full bg-myPrimaryBrandColor flex justify-center items-center text-xs rounded-l-full"
              >
                <span>
                  {{
                    getUser.fetchedData.user.FirstName.charAt(0).toUpperCase()
                  }}
                </span>
                <span>
                  {{
                    getUser.fetchedData.user.LastName.charAt(0).toUpperCase()
                  }}
                </span>
              </div>
            </div>
          </template>
        </div>
      </div>
      <!-- User # end -->
    </header>
  </div>
</template>

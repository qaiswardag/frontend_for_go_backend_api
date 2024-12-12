<script setup>
import { RouterLink } from 'vue-router';
import { vueFetch } from '@/composables/vueFetch';
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';
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

const getUser = computed(() => {
  return userStore.getUser;
});
</script>

<template>
  <div>
    <div class="px-2 pt-4 rounded-none">
      <p
        class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
      >
        Account
      </p>

      <!-- User # start -->
      <div class="text-sm h-full flex items-center justify-center">
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
    </div>

    <div class="px-2 pt-4 rounded-none">
      <p
        class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
      >
        Menu
      </p>
    </div>
    <nav aria-label="Global">
      <div class="flex-1 space-y-4 px-2 pb-4">
        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'Account' }"
        >
          <span class="material-symbols-outlined"> psychiatry </span>
          <span> Account </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'Dashboard' }"
        >
          <span class="material-symbols-outlined"> interests </span>
          <span> Dashboard </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'Jobs' }"
        >
          <span class="material-symbols-outlined"> layers </span>
          <span> Jobs </span>
        </RouterLink>

        <div class="px-2 pt-4 rounded-none">
          <p
            class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
          >
            Join us
          </p>
        </div>
        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'SignIn' }"
        >
          <span class="material-symbols-outlined"> person </span>
          <span> Sign in </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'SignUp' }"
        >
          <span class="material-symbols-outlined"> check </span>
          <span> Sign up </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'ResetPassword' }"
        >
          <span class="material-symbols-outlined"> key </span>
          <span> Reset password </span>
        </RouterLink>
        <div class="px-2 pt-4 rounded-none">
          <p
            class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
          >
            End session
          </p>
        </div>
        <button
          class="w-full text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          type="button"
          @click="handleLogOut"
        >
          <span class="material-symbols-outlined"> arrow_right_alt </span>
          <span> Sign out </span>
        </button>
      </div>
    </nav>
  </div>
</template>

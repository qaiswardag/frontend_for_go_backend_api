<script setup>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

defineProps({
  borderLeft: {
    Type: Boolean,
    required: true,
  },
});

const userStore = useUserStore();

const getUser = computed(() => {
  return userStore.getUser;
});
</script>

<template>
  <div class="text-sm h-full flex items-center justify-center">
    <div
      :class="{
        'border-l border-myPrimaryLightMediumGrayColor ': borderLeft,
      }"
      class="text-sm font-medium text-myPrimaryDarkGrayColor cursor-pointer px-4"
    >
      <!-- Loading user # start -->
      <template v-if="getUser && getUser.isLoadingUser && !getUser.isErrorUser">
        <div
          class="rounded-l-full min-h-[3rem] flex items-center justify-center w-10 h-10"
        >
          <div>
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-red-200 animate-spin fill-myPrimaryLinkColor"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </template>
      <!-- Loading user # end -->
      <!-- Signed out user # start -->
      <template
        v-if="
          !getUser ||
          (getUser && !getUser.isLoadingUser && !getUser.fetchedDataUser) ||
          (getUser &&
            getUser.fetchedDataUser &&
            !getUser.isLoadingUser &&
            !getUser.fetchedDataUser.user) ||
          (getUser &&
            !getUser.isLoadingUser &&
            (getUser.fetchedDataUser === null ||
              (getUser.fetchedDataUser &&
                getUser.fetchedDataUser.user === null)))
        "
      >
        <div
          class="rounded-l-full min-h-[3rem] flex items-center justify-center"
        >
          <span class="flex justify-center items-center h-10 w-10">
            <span class="relative flex justify-center items-center h-3 w-3">
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-red-400"
              ></span>
            </span>
          </span>
        </div>
      </template>
      <!--Signed out user # end -->

      <!-- Signed in user # start -->
      <template
        v-if="
          getUser &&
          getUser.fetchedDataUser &&
          getUser.fetchedDataUser.user &&
          getUser.fetchedDataUser.user.FirstName &&
          getUser.fetchedDataUser.user.LastName &&
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
                getUser.fetchedDataUser.user.FirstName.charAt(0).toUpperCase()
              }}
            </span>
            <span>
              {{
                getUser.fetchedDataUser.user.LastName.charAt(0).toUpperCase()
              }}
            </span>
          </div>
        </div>
      </template>
      <!-- Signed in user # end -->
    </div>
  </div>
</template>

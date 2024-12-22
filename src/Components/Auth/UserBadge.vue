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
      <!-- Loading user # end -->
      <!-- Signed out user # start -->
      <template
        v-if="
          !getUser === null ||
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

<script setup>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();

defineProps({
  layoutDesign: {
    Type: String,
    required: true,
  },
});

const handleLogOut = async function () {
  userStore.setUserSignOut();
};

const getUser = computed(() => {
  return userStore.getUser;
});
</script>
<template>
  <button
    class="text-myPrimaryDarkGrayColor group flex items-center font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
    :class="{
      'py-2 px-6': layoutDesign === 'topMainMenu',
      'py-4 pl-6 pr-2 w-full': layoutDesign === 'leftSidebar',
    }"
    type="button"
    @click="handleLogOut"
  >
    <template v-if="layoutDesign === 'leftSidebar'">
      <span class="material-symbols-outlined"> arrow_right_alt </span>
    </template>
    <template v-if="getUser && !getUser.isLoadingSignOut">
      <span> Sign out </span>
    </template>
    <template v-if="getUser && getUser.isLoadingSignOut">Loading.. </template>
  </button>
</template>

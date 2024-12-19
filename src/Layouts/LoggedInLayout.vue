<script setup>
import { useUserStore } from '@/stores/user';
import { computed } from 'vue';

const userStore = useUserStore();

const getUser = computed(() => {
  return userStore.getUser;
});
</script>

<template>
  <main class="flex-1 bg-gray-50 relative">
    <div
      class="mx-auto max-w-7xl min-h-screen px-4 sm:px-6 md:px-8 md:pb-16 pb-12"
    >
      <div class="p-4 bg-red-100 my-8">User: {{ JSON.stringify(getUser) }}</div>
      <router-view></router-view>
    </div>
  </main>
</template>

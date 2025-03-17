<script setup>
import FullScreenSpinner from '@/Components/Loaders/FullScreenSpinner.vue';
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const getIsLoading = computed(() => {
  return userStore.getIsLoading;
});

const sidebarOpen = ref(false);
</script>

<template>
  <teleport to="body">
    <FullScreenSpinner v-if="getIsLoading"></FullScreenSpinner>
  </teleport>
</template>

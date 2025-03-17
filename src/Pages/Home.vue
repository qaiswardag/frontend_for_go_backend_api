<script setup>
import { vueFetch } from '@/composables/vueFetch';
import LayoutNotLoggedIn from '@/Layouts/LayoutNotLoggedIn.vue';
import { ref, onMounted } from 'vue';

const {
  handleData,
  fetchedData,
  isError,
  error,
  errors,
  isLoading,
  isSuccess,
} = vueFetch();

const fetchData = async () => {
  try {
    await handleData(`${import.meta.env.VITE_BACKEND_URL}/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Error fetching data:', err);
  }
};

onMounted(() => {
  fetchData();
});
</script>

<template>
  <LayoutNotLoggedIn>
    <div>
      <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
        Home
      </h2>
      <p>Home content here...</p>

      <p>fetchedData: {{ fetchedData }}</p>
    </div>
  </LayoutNotLoggedIn>
</template>

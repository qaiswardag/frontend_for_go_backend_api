<script setup>
import LayoutLoggedIn from '@/Layouts/LayoutLoggedIn.vue';
import FullWidthBasic from '@/Components/Layouts/FullWidthBasic.vue';
</script>

<template>
  <LayoutLoggedIn>
    <div>
      <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
        Dashboard
      </h2>
      <FullWidthBasic class="bg-purple-200">
        <template #content> Content here... </template>
      </FullWidthBasic>
    </div>
  </LayoutLoggedIn>
</template>

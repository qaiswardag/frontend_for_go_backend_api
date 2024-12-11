<script setup>
import FullWidthElement from '@/Components/Layouts/FullWidthElement.vue';
</script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-300">Dashboard</h2>
    <FullWidthElement
      class="bg-purple-200"
      :descriptionArea="true"
    >
      <template #title>Lorem ipsum</template>
      <template #content>
        <div class="flex gap-8 w-full justify-center">Content here...</div>
      </template>
    </FullWidthElement>
  </div>
</template>

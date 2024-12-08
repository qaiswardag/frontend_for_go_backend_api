<script setup>
import ApplicationLogo from '@/Components/Logos/ApplicationLogo.vue';
import NavbarLeft from '@/Components/Homepage/NavbarLeft.vue';
</script>

<template>
  <div class="mt-5 flex flex-grow flex-col">
    <div class="flex-1 space-y-2 px-2 pb-4">
      <div class="px-2 pt-4 rounded-none">
        <p
          class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 border-t"
        >
          Account
        </p>
      </div>

      <div class="px-2 pt-4 rounded-none">
        <p
          class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 border-t"
        >
          Menu
        </p>
      </div>
      <NavbarLeft></NavbarLeft>
    </div>
  </div>
</template>

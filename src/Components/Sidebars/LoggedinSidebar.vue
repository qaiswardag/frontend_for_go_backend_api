<script setup>
import ApplicationLogo from '@/Components/Logos/ApplicationLogo.vue';
import NavbarLeft from '@/Components/Homepage/NavbarLeft.vue';
</script>

<template>
  <div
    class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col bg-white z-20"
  >
    <div
      class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200"
    >
      <div
        class="flex flex-shrink-0 items-center px-4 justify-between h-16 border-b-2 border-transparent"
      >
        <ApplicationLogo></ApplicationLogo>
      </div>
      <div class="mt-5 flex flex-grow flex-col">
        <div class="flex-1 space-y-2 px-2 pb-4">
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
    </div>
  </div>
</template>

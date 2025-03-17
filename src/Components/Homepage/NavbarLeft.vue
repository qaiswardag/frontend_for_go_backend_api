<script setup>
import { RouterLink } from 'vue-router';
import UserBadge from '@/Components/Auth/UserBadge.vue';
import SignOut from '@/Components/Auth/SignOut.vue';
</script>

<template>
  <div>
    <UserBadge :borderLeft="false"></UserBadge>

    <div class="px-2 pt-4 rounded-none">
      <p
        class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
      >
        Menu
      </p>
    </div>
    <nav aria-label="Global">
      <div class="flex-1 space-y-4 px-2 pb-4 float-left">
        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'Account' }"
        >
          <span class="material-symbols-outlined"> psychiatry </span>
          <span> Account </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'Dashboard' }"
        >
          <span class="material-symbols-outlined"> interests </span>
          <span> Dashboard </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'Jobs' }"
        >
          <span class="material-symbols-outlined"> layers </span>
          <span> Jobs </span>
        </RouterLink>

        <div class="px-2 pt-4 rounded-none">
          <p
            class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
          >
            Manage
          </p>
        </div>
        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'SignIn' }"
        >
          <span class="material-symbols-outlined"> person </span>
          <span> Sign in </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'SignUp' }"
        >
          <span class="material-symbols-outlined"> arrow_outward </span>
          <span> Sign up </span>
        </RouterLink>

        <RouterLink
          class="text-myPrimaryDarkGrayColor group flex items-center pl-6 pr-2 py-4 font-normal text-base gap-3 rounded-full hover:bg-myPrimaryLightGrayColor bg-gray-50"
          :to="{ name: 'ResetPassword' }"
        >
          <span class="material-symbols-outlined"> key </span>
          <span> Reset password </span>
        </RouterLink>
        <div class="px-2 pt-4 rounded-none">
          <p
            class="myPrimaryParagraph text-myPrimaryMediumGrayColor italic text-xs pt-2 pb-2 border-t"
          >
            Session
          </p>
        </div>
        <SignOut layoutDesign="leftSidebar"></SignOut>
      </div>
    </nav>
  </div>
</template>

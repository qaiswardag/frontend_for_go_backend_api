<script setup>
import FullWidthBasic from '@/Components/Layouts/FullWidthBasic.vue';
import ApplicationLogo from '@/Components/Logos/ApplicationLogo.vue';
import { computed, ref } from 'vue';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const getUser = computed(() => {
  return userStore.getUser;
});

const userForm = ref({
  firstName: 'John',
  lastName: 'Doe',
  username: 'jd',
  email: 'jd@myissue.dk',
  password: '123456',
});

const handleForm = async function () {
  userStore.setLoadUser(userForm.value);
};
</script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
      Sign up
    </h2>
    <FullWidthBasic class="bg-purple-200">
      <template #content>
        <div class="flex items-center justify-center">
          <ApplicationLogo></ApplicationLogo>
        </div>
        <!-- Form # start -->
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
          <h2
            class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
          >
            Sign up today!
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div class="bg-white px-6 py-12 shadow rounded-lg sm:px-12">
            <form
              @submit.prevent
              class="space-y-6"
            >
              <div>
                <label
                  for="first_name"
                  class="myPrimaryInputLabel"
                  >First name</label
                >
                <div class="mt-2">
                  <input
                    v-model="userForm.firstName"
                    id="first_name"
                    name="first_name"
                    type="text"
                    autocomplete="given-name"
                    class="myPrimaryInput"
                  />
                </div>
              </div>
              <div>
                <label
                  for="last_name"
                  class="myPrimaryInputLabel"
                  >Last name</label
                >
                <div class="mt-2">
                  <input
                    v-model="userForm.lastName"
                    id="last_name"
                    name="last_name"
                    type="text"
                    autocomplete="family-name"
                    class="myPrimaryInput"
                  />
                </div>
              </div>
              <div>
                <label
                  for="username"
                  class="myPrimaryInputLabel"
                  >Username</label
                >
                <div class="mt-2">
                  <input
                    v-model="userForm.username"
                    id="username"
                    name="username"
                    type="text"
                    autocomplete="username"
                    class="myPrimaryInput"
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
                  class="myPrimaryInputLabel"
                  >Email address</label
                >
                <div class="mt-2">
                  <input
                    v-model="userForm.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="myPrimaryInput"
                  />
                </div>
              </div>

              <div>
                <label
                  for="password"
                  class="myPrimaryInputLabel"
                  >Password</label
                >
                <div class="mt-2">
                  <input
                    v-model="userForm.password"
                    id="password"
                    name="password"
                    type="password"
                    class="myPrimaryInput"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="myPrimaryCheckbox"
                  />
                  <label
                    for="remember-me"
                    class="ml-3 block text-sm/6 text-gray-900"
                    >Remember me</label
                  >
                </div>
              </div>

              <div>
                <button
                  type="button"
                  :disabled="getUser && getUser.isLoading"
                  @click="handleForm"
                  :class="{
                    'opacity-25 cursor-default': getUser && getUser.isLoading,
                  }"
                  class="myPrimaryButton w-full"
                >
                  <template v-if="getUser && !getUser.isLoading">
                    <span> Submit </span>
                  </template>
                  <template v-if="getUser && getUser.isLoading"
                    >Loading..
                  </template>
                </button>
              </div>
              <template v-if="getUser && getUser.error">
                <p class="myPrimaryParagraphError">
                  {{ getUser && getUser.error }}
                </p>
              </template>
            </form>
          </div>
        </div>
        <!-- Form # end -->
      </template>
    </FullWidthBasic>
  </div>
</template>

<script setup>
import FullWidthElement from '@/Components/Layouts/FullWidthElement.vue';
import { vueFetch } from '@/composables/vueFetch';
import { ref } from 'vue';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const {
  handleData,
  fetchedData,
  isError,
  error,
  errors,
  isLoading,
  isSuccess,
} = vueFetch();

const firstName = ref('John');
const lastName = ref('Doe');
const username = ref('jd');
const email = ref('jd@myissue.dk');
const password = ref('123456');

const handleForm = async function () {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  try {
    userStore.setUser({
      fetchedData,
      isError,
      error,
      errors,
      isLoading,
      isSuccess,
    });

    const data = await handleData(
      `${backendUrl}/user/sign-up`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username.value,
          first_name: firstName.value,
          last_name: lastName.value,
          email: email.value,
          password: password.value,
        }),
      },
      {
        additionalCallTime: 1000,
      }
    );

    userStore.setUser({
      fetchedData,
      isError,
      error,
      errors,
      isLoading,
      isSuccess,
    });
  } catch (error) {
    console.error(`Error:`, error);
  }
};
</script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-300">Sign up</h2>
    <FullWidthElement
      class="bg-purple-200"
      :descriptionArea="true"
    >
      <template #title>Lorem ipsum</template>
      <template #content>
        <!-- Form # start -->
        <div
          class="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8"
        >
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2
              class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
            >
              Sign up today!
            </h2>
            <p class="myPrimaryParagraph my-6 whitespace-pre">
              type of fetchedDataGet: {{ typeof fetchedData }}
              <br />
              fetchedData: {{ fetchedData }}
            </p>
            <p class="myPrimaryParagraph my-6 whitespace-pre">
              type of error:
              {{ typeof error }}
              <br />
              error: {{ error }}
            </p>
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
                      v-model="firstName"
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
                      v-model="lastName"
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
                      v-model="username"
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
                      v-model="email"
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
                      v-model="password"
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
                    :disabled="isLoading"
                    @click="handleForm"
                    :class="{
                      'opacity-25 cursor-default': isLoading,
                    }"
                    class="myPrimaryButton w-full"
                  >
                    <template v-if="!isLoading">
                      <span> Submit </span>
                    </template>
                    <template v-if="isLoading">Loading.. </template>
                  </button>
                </div>
                <template v-if="error">
                  <p class="myPrimaryParagraphError">{{ error }}</p>
                </template>
              </form>
            </div>
          </div>
        </div>
        <!-- Form # end -->
      </template>
    </FullWidthElement>
  </div>
</template>

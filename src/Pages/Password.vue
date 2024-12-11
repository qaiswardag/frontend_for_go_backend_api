<script setup>
import FullWidthElement from '@/Components/Layouts/FullWidthElement.vue';
import { vueFetch } from '@/composables/vueFetch';
import { ref } from 'vue';

const {
  handleData,
  fetchedData,
  isError,
  error,
  errors,
  isLoading,
  isSuccess,
} = vueFetch();

const password = ref('1234');

const handleForm = async function () {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  try {
    const data = await handleData(
      `${backendUrl}/user/reset-password`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password.value,
        }),
      },
      {
        additionalCallTime: 1000,
      }
    );
  } catch (error) {
    console.error(`Error:`, error);
  }
};
</script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-300">
      Reset password
    </h2>
    <FullWidthElement :descriptionArea="true">
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
              Reset password
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

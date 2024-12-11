<script setup>
import FullWidthElement from '@/Components/Layouts/FullWidthElement.vue';
import { vueFetch } from '@/composables/vueFetch';
import { onMounted, ref } from 'vue';

const {
  handleData: handleDataCurrentUser,
  fetchedData: fetchedDataCurrentUser,
  isError: isErrorCurrentUser,
  error: errorCurrentUser,
  errors: errorsCurrentUser,
  isLoading: isLoadingCurrentUser,
  isSuccess: isSuccessCurrentUser,
} = vueFetch();

const jobTitle = ref('');

const getCurrentUser = async function () {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  try {
    await handleDataCurrentUser(
      `${backendUrl}/user/user`,
      {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
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
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-300">Dashboard</h2>
    <FullWidthElement
      class="bg-purple-200"
      :descriptionArea="true"
    >
      <template #title>Lorem ipsum</template>
      <template #content>
        <div class="flex gap-8 w-full justify-center">
          <!-- Data for logged in users # start -->
          <div
            class="w-1/2 bg-gray-300 border-2 border-gray-600 py-8 px-4 rounded-lg"
          >
            <h2
              class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
            >
              List of data only for logged in users
            </h2>
            <div class="my-4">
              <button
                type="button"
                :disabled="isLoadingCurrentUser"
                @click="getCurrentUser"
                :class="{
                  'opacity-25 cursor-default': isLoadingCurrentUser,
                }"
                class="myPrimaryButton w-full"
              >
                <template v-if="!isLoadingCurrentUser">
                  <span> Submit </span>
                </template>
                <template v-if="isLoadingCurrentUser">Loading.. </template>
              </button>

              <p class="myPrimaryParagraph my-6">
                type of fetchedDataCurrentUser:
                {{ typeof fetchedDataCurrentUser }}
                <br />
                fetchedDataCurrentUser:
                {{ JSON.stringify(fetchedDataCurrentUser) }}
              </p>
              <p class="myPrimaryParagraph my-6">
                type of error:
                {{ typeof errorCurrentUser }}
                <br />
                error: {{ JSON.stringify(errorCurrentUser) }}
              </p>
            </div>
            <ul class="flex flex-col gap-8">
              <li
                class="rounded bg-red-200 overflow-hidden whitespace-pre-line flex-1 h-auto px-4 py-12"
              >
                <div>
                  <p class="myPrimaryParagraph">Title here</p>
                </div>
              </li>
              <li
                class="rounded bg-red-200 overflow-hidden whitespace-pre-line flex-1 h-auto px-4 py-12"
              >
                <div>
                  <p class="myPrimaryParagraph">Title here</p>
                </div>
              </li>
            </ul>
          </div>
          <!-- Data for logged in users # end -->
          <!-- Form # start -->
          <div
            class="w-1/2 bg-gray-300 border-2 border-gray-600 py-8 px-4 rounded-lg"
          >
            <h2
              class="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900"
            >
              Post a new job
            </h2>
            <div>
              <div>
                <form class="space-y-6">
                  <div>
                    <label
                      for="jobTitle"
                      class="myPrimaryInputLabel"
                      >Content</label
                    >
                    <div class="mt-2">
                      <input
                        v-model="jobTitle"
                        id="jobTitle"
                        name="jobTitle"
                        type="jobTitle"
                        class="myPrimaryInput"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      @click="handlePostJob"
                      class="myPrimaryButton w-full"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- Form # end -->
        </div>
      </template>
    </FullWidthElement>
  </div>
</template>

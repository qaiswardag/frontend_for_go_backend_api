<script setup>
import LayoutLoggedIn from '@/Layouts/LayoutLoggedIn.vue';
import FullWidthBasic from '@/Components/Layouts/FullWidthBasic.vue';

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

const handleGetJobs = async function () {
  try {
    await handleData(
      `http://localhost:7070`,
      {
        headers: {
          'Accept-Version': 'v1',
          Authorization: 'hello world',
        },
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      },
      { additionalCallTime: 500 }
    );
  } catch (error) {
    console.error(`Error:`, error);
  }
};
</script>

<template>
  <LayoutLoggedIn>
    <div>
      <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
        Jobs
      </h2>
      <FullWidthBasic class="bg-purple-200">
        <template #content>
          <div>
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
        </template>
      </FullWidthBasic>

      <FullWidthBasic
        class="bg-yellow-300"
        :descriptionArea="true"
      >
        <template #title>Drafts</template>
        <template #content>
          <div>
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
        </template>
      </FullWidthBasic>
    </div>
  </LayoutLoggedIn>
</template>

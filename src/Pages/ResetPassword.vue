<script setup>
import FullWidthBasic from '@/Components/Layouts/FullWidthBasic.vue';
import ApplicationLogo from '@/Components/Logos/ApplicationLogo.vue';
import { vueFetch } from '@/composables/vueFetch';
import { ref } from 'vue';

const userForm = ref({
  password: '',
});
const handleForm = async function () {
  return;
};
</script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
      Reset password
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
            Reset password
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
            </form>
          </div>
        </div>

        <!-- Form # end -->
      </template>
    </FullWidthBasic>
  </div>
</template>

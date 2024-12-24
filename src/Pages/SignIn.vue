<script setup>
import FullWidthBasic from '@/Components/Layouts/FullWidthBasic.vue';
import { computed, ref } from 'vue';
import { useUserStore } from '@/stores/user';
import ApplicationLogo from '@/Components/Logos/ApplicationLogo.vue';

const userStore = useUserStore();

const getUser = computed(() => {
  return userStore.getUser;
});

const userForm = ref({
  email: 'jd@myissue.dk',
  password: '123456',
});

const handleForm = async function () {
  userStore.setLoadUserSignIn(userForm.value);
};
</script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
      Sign in
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
            Sign in to your account
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
                  :disabled="getUser && getUser.isLoadingSignIn"
                  @click="handleForm"
                  :class="{
                    'opacity-25 cursor-default':
                      getUser && getUser.isLoadingSignIn,
                  }"
                  class="myPrimaryButton w-full"
                >
                  <template v-if="getUser && !getUser.isLoadingSignIn">
                    <span> Submit </span>
                  </template>
                  <template v-if="getUser && getUser.isLoadingSignIn"
                    >Loading..
                  </template>
                </button>
              </div>

              <template
                v-if="
                  getUser &&
                  getUser.fetchedDataSignIn &&
                  getUser.fetchedDataSignIn.user
                "
              >
                <div
                  class="flex flex-col gap-2 items-center justify-center myPrimaryParagraph border-y border-myPrimaryLightMediumGrayColor mt-12 py-8"
                >
                  <span class="myPriamryParagraph italic">
                    Successfully signed in as
                  </span>
                  <span>
                    {{ getUser.fetchedDataSignIn.user.FirstName }}
                    {{ getUser.fetchedDataSignIn.user.LastName }}
                  </span>
                  <span>
                    {{ getUser.fetchedDataSignIn.user.Email }}
                  </span>
                </div>
              </template>
              <template v-if="getUser && getUser.errorSignIn">
                <p class="myPrimaryParagraphError">
                  {{ getUser && getUser.errorSignIn }}
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

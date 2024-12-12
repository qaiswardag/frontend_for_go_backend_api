<script setup></script>

<template>
  <div>
    <h2 class="myTertiaryHeader text-center py-12 bg-slate-600 text-white">
      Not found
    </h2>
    <main class="grid min-h-full place-items-center py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold">404</p>
        <h1
          class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
        >
          Page not found
        </h1>
        <p
          class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8"
        >
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <RouterLink :to="{ name: 'Account' }"> Go to Account </RouterLink>
        </div>
      </div>
    </main>
  </div>
</template>

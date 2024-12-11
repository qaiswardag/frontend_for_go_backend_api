<template>
  <main class="flex-1 bg-gray-50 relative">
    <header v-if="$slots.header">
      <h2 class="myTertiaryHeader text-center py-12 pb-8">
        <slot name="header"></slot>
      </h2>
    </header>
    <div
      class="mx-auto max-w-7xl min-h-screen px-4 sm:px-6 md:px-8 md:pb-16 pb-12"
    >
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup>
import Navbar from '@/Components/Homepage/Navbar.vue';
import Footer from '@/Components/Homepage/Footer.vue';
</script>

<template>
  <div class="bg-orange-200">
    <Navbar></Navbar>
    <div class="mx-auto min-h-screen">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

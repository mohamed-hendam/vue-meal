<template>
  <div class="min-h-screen">
    <NavBar />
    <router-view />
  </div>
  <FootBar />
</template>
<script setup>
import NavBar from "../components/NavBar.vue";
import FootBar from "../components/FootBar.vue";
</script>

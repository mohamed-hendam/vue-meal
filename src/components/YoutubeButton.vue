<template>
  <a
    :href="href"
    target="_blank"
    class="bg-red-600 text-white p-2 border-2 border-red-600 hover:bg-red-800 mr-2 rounded-full"
  >
    <slot></slot> Youtube</a
  >
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>

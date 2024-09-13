<template>
  <div class="my-3 container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
    <div
      v-for="meal in meals"
      :key="meal.idMeal"
      class="bg-slate-50 border-2 border-cyan-600 rounded-md shadow-md shadow-cyan-900 hover:scale-105 transition-transform duration-400"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="object-cover h-48 w-full"
      />
      <h3 class="px-3 font-normal text-gray-800 text-2xl">
        {{ meal.strMeal }}
      </h3>
      <p class="p-3 text-gray-700">
        Description and instruction of preparation on:
      </p>
      <div class="p-3">
        <YoutubeButton :href="meal.strYoutube" />
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="bg-cyan-600 text-white p-2 border-2 border-cyan-600 hover:bg-cyan-800 rounded-full"
          >Description</router-link
        >
      </div>
    </div>
  </div>
  <div
    v-if="!meals.length"
    class="flex justify-center items-center text-4xl text-cyan-800 font-bold"
  >
    there are no meals yet
  </div>
</template>
<script setup>
import YoutubeButton from "../components/YoutubeButton.vue";
import { defineProps } from "vue";
const props = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => [],
  },
});
</script>

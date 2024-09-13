<template>
  <div class="container mx-auto">
    <h1 class="text-4xl text-cyan-800 font-bold p-4">RANDOM MEALS</h1>
    <div ></div>
    <MealItem :meals="meals" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient.js";
import MealItem from "../components/MealItem.vue";

// data

const meals = ref([]);
console.log(meals);

// life hooks
onMounted(() => {
  for (let i = 0; i < 10; i++) {
    axiosClient.get("random.php").then(({ data }) => {
      meals.value.push(data.meals[0]);
    });
  }
});
</script>

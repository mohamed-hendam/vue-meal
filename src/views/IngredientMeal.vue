<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-cyan-800 shadow-slate-600 p-6 ml-4">
      Ingredients
    </h1>
    <input
      v-model="keyword"
      type="text"
      placeholder="search for Ingredients"
      class="rounded-xl border-2 border-gray-500 w-full py-4 px-4"
    />
    <div class="grid grid-cols-3 max-md:grid-cols-1">
      <div
        v-for="ingredient in computedIngredients"
        :key="ingredient.idIngredient"
      >
        <router-link
          class="block text-3xl text-cyan-800 text-center p-3 m-3 border-cyan-800 border-2 bg-white rounded-md shadow-cyan-800 shadow-sm hover:scale-105"
          :to="{
            name: 'byingredients',
            params: { ingredient: ingredient.strIngredient },
          }"
          >{{ ingredient.strIngredient }}</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import axiosClient from "../axiosClient";

// data
const ingredients = ref([]);
const keyword = ref("");

// methods
const computedIngredients = computed(() => {
  // إذا كانت الكلمة المفتاحية فارغة، عرض جميع العناصر
  if (!keyword.value) return ingredients.value;

  // فلترة العناصر بناءً على الكلمة المفتاحية
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

// hooks
onMounted(() => {
  axiosClient.get(`list.php?i=list`).then(({ data }) => {
    ingredients.value = data.meals;
  });
});
</script>

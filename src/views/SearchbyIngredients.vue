<template>
  <div>
    <MealItem :meals="meals" />
  </div>
</template>
<script setup>
import { onMounted, computed } from "vue";
import axiosClient from "../axiosClient";
import { useStore } from "vuex";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";

//data
const route = useRoute();
const meals = computed(() => store.state.mealsByingredients);
//hooks
onMounted(() => {
  store.dispatch("searchMealsbyingredient", route.params.ingredient);
  console.log("params", route.params.ingredient);
});
</script>

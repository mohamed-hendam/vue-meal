<template>
  <div class="my-3 container mx-auto">
    <h1 class="text-4xl text-cyan-800 font-bold p-4 container mx-auto">
      MEALS BY NAME
    </h1>
    <input
      v-model="keyword"
      type="search"
      placeholder="search for meals"
      class="rounded-xl border-2 border-gray-500 w-full py-4"
      @input="searchMeals"
    />
  </div>
  <MealItem :meals="meals" />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
//data
const route = useRoute();
const meals = computed(() => store.state.searchedMeals);
const keyword = ref("");
//functions

const searchMeals = () => {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setsearchMeals", []);
  }
};

// hooks
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<template>
  <h1 class="text-4xl text-cyan-800 font-bold p-4 container mx-auto">
    MEALS BY LETTERS
  </h1>

  <div class="flex gap-1 flex-wrap justify-center py-5 container mx-auto">
    <router-link
      :to="{ name: 'byletter', params: { letter } }"
      v-for="letter in letters"
      :key="letter"
      class="text-xl font-bold text-cyan-800 p-2 border-2 border-cyan-600 rounded-3xl hover:scale-95"
      >{{ letter }}</router-link
    >
    <MealItem :meals="meals" />
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import store from "../store";
import MealItem from "../components/MealItem.vue";

//data
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByletters);

//watchers
watch(route, () => {
  store.dispatch("searchMealsbyletter", route.params.letter);
});
//hooks
onMounted(() => {
  store.dispatch("searchMealsbyletter", route.params.letter);
});
</script>

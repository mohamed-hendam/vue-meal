<template>
  <div class="container mx-auto">
    <h1 class="text-4xl text-cyan-800 font-bold p-4">MEAL DETAILS</h1>
    <h2 class="text-center my-6 text-gray-800 font-bold text-4xl">
      {{ meal.strMeal }}
    </h2>
    <img :src="meal.strMealThumb" class="w-full h-80 object-contain" />
    <div class="flex justify-center gap-4 mx-2 py-2 container ">
      <p class="text-xl text-cyan-900">
        CATEGORY : <span class="text-cyan-800 text-xl font-bold">{{ meal.strCategory }}</span>
      </p>
      <p class="text-xl text-cyan-900">
        AREA : <span class="text-cyan-800 text-xl font-bold">{{ meal.strArea }}</span>
      </p>
      <p class="text-xl text-cyan-900">
        TAGS : <span class="text-cyan-800 text-xl font-bold">{{ meal.strTags }}</span>
      </p>
    </div>
    <div class="flex justify-center gap-2 my-3">
      <div class="border-cyan-800 border-2 p-4 rounded-lg">
        <h2 class="text-gray-800 text-2xl border-b-2 border-cyan-800">
          INGREDIENTS
        </h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strIngredient${ind + 1}`]" class="text-gray-700">
              {{ ind }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="border-cyan-800 border-2 p-4 rounded-lg">
        <h2 class="text-gray-800 text-3xl border-b-2 border-cyan-800">
          MEASURES
        </h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)" :key="ind">
            <li v-if="meal[`strMeasure${ind + 1}`]" class="text-gray-700">
              {{ ind }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>

  <div class="text-center">
    <h3
      class="text-gray-800 text-3xl border-b-2 border-cyan-800 w-fit mx-auto mb-3 mt-10"
    >
      Instructions
    </h3>
    <p class="text-gray-700">{{ meal.strInstructions }}</p>
  </div>
  <div class="p-10  flex justify-center gap-6">
    <youtube-button :href="meal.strYoutube">Go TO</youtube-button>
    <a
      :href="meal.strSource"
      target="_blank"
      class="bg-cyan-700 text-white p-2 border-2 border-cyan-600 hover:bg-cyan-800 rounded-full"
      >ORIGINAL SOURSE</a
    >
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const meal = ref([]);
const route = useRoute();
onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

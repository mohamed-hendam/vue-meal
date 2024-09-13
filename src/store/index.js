import { createStore } from "vuex";
import axiosClient from "../axiosClient";
const store = createStore({
  state: {
    searchedMeals: [],
    mealsByletters: [],
    mealsByingredients: [],
  },
  getters: {},
  mutations: {
    setsearchMeals(state, data) {
      state.searchedMeals = data || [];
    },
    setmealsByletters(state, data) {
      state.mealsByletters = data || [];
    },
    setmealsByingredients(state, data) {
      state.mealsByingredients = data || [];
    },
  },
  actions: {
    searchMeals({ commit }, keyword) {
      axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
        commit("setsearchMeals", data.meals);
      });
    },
    searchMealsbyletter({ commit }, letter) {
      axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
        commit("setmealsByletters", data.meals);
      });
    },
    searchMealsbyingredient({ commit }, ingredient) {
      axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
        commit("setmealsByingredients", data.meals);
      });
    },
  },
});
export default store;

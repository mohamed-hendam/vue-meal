import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import Home from "../views/HomePage.vue";
import SearchbyName from "../views/SearchbyName.vue";
import SearchbyLetters from "../views/SearchbyLetters.vue";
import SearchbyIngredients from "../views/SearchbyIngredients.vue";
import MealDetails from "../views/MealDetails.vue";
import IngredientMeal from "../views/IngredientMeal.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/byname/:name?",
        name: "byname",
        component: SearchbyName,
      },
      {
        path: "/byingredients/:ingredient",
        name: "byingredients",
        component: SearchbyIngredients,
      },
      {
        path: "/byletter/:letter?",
        name: "byletter",
        component: SearchbyLetters,
      },
      {
        path: "/mealDetails/:id?",
        name: "mealDetails",
        component: MealDetails,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: IngredientMeal,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;

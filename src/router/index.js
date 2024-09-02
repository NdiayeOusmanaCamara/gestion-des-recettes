import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import AddRecipe from '@/views/AddRecipe.vue';
import EditRecipe from '@/views/EditRecipe.vue';
import List from '@/views/List.vue';
import RecipeDetails from '@/views/RecipeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/ajouter',
    name: 'AddRecipe',
    component: AddRecipe,
  },
  {
    path: '/modifier/:index',
    name: 'EditRecipe',
    component: EditRecipe,
  },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/visualiser/:index',
    name: 'RecipeDetails',
    component: RecipeDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

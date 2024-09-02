<template>
  <div class="container mt-4 ">
    <h2 class="mb-4 text-center">Liste des Recettes</h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Titre</th>
          <th scope="col">Type</th>
          <th scope="col">Ingrédients</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(recipe, index) in recipes" :key="index">
          <td>{{ recipe.title }}</td>
          <td>{{ recipe.type }}</td>
          <td>
            <ul>
              <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
            </ul>
          </td>
          <td>
            
            <button class="btn btn-link p-0 me-2" @click="viewDetails(index)" title="Visionner">
              <i class="bi bi-eye"></i>
            </button>

           
            <router-link :to="'/modifier/' + index" class="btn btn-link p-0 me-2" title="Modifier">
              <i class="bi bi-pencil"></i>
            </router-link>
            
            <button class="btn btn-link p-0 text-danger" @click="deleteRecipe(index)" title="Supprimer">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    
    <RecipeDetails :recipe="selectedRecipe" v-if="selectedRecipe" @close="selectedRecipe = null" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import RecipeDetails from './RecipeDetails.vue';

const recipeStore = useRecipeStore();
const recipes = recipeStore.recipes;
const selectedRecipe = ref(null);

function viewDetails(index) {
  selectedRecipe.value = recipes[index];
}

function deleteRecipe(index) {
  recipeStore.deleteRecipe(index);
}
</script>

<style scoped>
.container{
  background-color: brown;
}
h2{
  color: white;
}
</style>

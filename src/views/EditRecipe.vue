<template>
  <div class="container mt-4 w-50">
    <h2 class="mb-4 text-center">Modifier la recette</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="title" class="form-label">Titre de la recette</label>
        <input type="text" class="form-control" v-model="title" required>
      </div>
      <div class="mb-3">
        <label for="ingredients" class="form-label">Ingrédients (séparés par des virgules)</label>
        <input type="text" class="form-control" v-model="ingredients" required>
      </div>
      <div class="mb-3">
        <label for="type" class="form-label">Type de recette</label>
        <select class="form-control" v-model="type" required>
          <option>Entrée</option>
          <option>Plat</option>
          <option>Dessert</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Modifier la recette</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();
const index = route.params.index;

const title = ref('');
const ingredients = ref('');
const type = ref('Entrée');

onMounted(() => {
  const recipe = recipeStore.recipes[index];
  title.value = recipe.title;
  ingredients.value = recipe.ingredients.join(',');
  type.value = recipe.type;
});

function handleSubmit() {
  recipeStore.updateRecipe(index, {
    title: title.value,
    ingredients: ingredients.value.split(','),
    type: type.value,
  });
  router.push('/list');
}
</script>

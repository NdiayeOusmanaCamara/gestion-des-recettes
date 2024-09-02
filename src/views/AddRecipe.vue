<template>
  <div class="container mt-4 w-50">
    <h2 class="mb-4 text-center">Ajouter une nouvelle recette</h2>
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
      <button type="submit" class="btn btn-primary">Ajouter la recette</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipeStore';
import { useRouter } from 'vue-router';

const title = ref('');
const ingredients = ref('');
const type = ref('Entrée');
const recipeStore = useRecipeStore();
const router = useRouter();

function handleSubmit() {
  recipeStore.addRecipe({
    title: title.value,
    ingredients: ingredients.value.split(','),
    type: type.value,
  });
  router.push('/list');
}
</script>

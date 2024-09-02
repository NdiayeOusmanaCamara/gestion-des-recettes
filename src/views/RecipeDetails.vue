<template>
  <div class="modal fade show d-block" tabindex="-1" aria-labelledby="recipeModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="recipeModalLabel">{{ recipe.title }}</h5>
          <button type="button" class="btn-close" @click="$emit('close')" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p><strong>Type :</strong> {{ recipe.type }}</p>
          <p><strong>Ingrédients :</strong></p>
          <ul>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">{{ ingredient }}</li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

import { defineStore } from 'pinia';

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [
      {
        title: 'Spaghetti Bolognese',
        ingredients: [
          '400g spaghetti',
          '200g ground beef',
       
        ],
        type: 'Desert',
      },
      {
        title: 'Caesar Salad',
        ingredients: [
          '1 romaine lettuce',
          '100g croutons',
          
        ],
        type: 'Entre',
      },
      {
        title: 'Chocolate Mousse',
        ingredients: [
          '3 eggs',
          '50g sugar',
          
        ],
        type: 'Dessert',
      },
    ],
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe);
    },
    updateRecipe(index, updatedRecipe) {
      this.recipes[index] = updatedRecipe;
    },
    deleteRecipe(index) {
      this.recipes.splice(index, 1);
    },
  },
});

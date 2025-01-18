<script setup lang="ts">
  import type { Cocktail } from '~/types/cocktails'

  defineProps<{ ingredients: Cocktail['ingredients'] }>()
  const DEFAULT_MEASUREMENT = 'To taste'
</script>

<template>
  <ul class="app-list d-flex flex-wrap gap-8 mt-8">
    <li
      v-for="(item, index) in ingredients"
      :key="index"
      class="ingredient-item border-colored border-r-8"
    >
      <span class="text-bold">{{ item.measure || DEFAULT_MEASUREMENT }}</span>
      <span class="ml-4">{{ item.ingredient }}</span>
    </li>
  </ul>
</template>

<style scoped>
  .ingredient-item {
    background-color: var(--color-background);
    padding: 8px 12px;
  }
</style>

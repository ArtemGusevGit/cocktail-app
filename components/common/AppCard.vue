<script setup lang="ts">
  import type { Cocktail } from '~/types/cocktails'

  defineProps({
    name: String,
    image: String,
    category: String,
    glass: String,
    instructions: String,
    ingredients: {
      type: Array as () => Cocktail['ingredients'],
      required: true,
    },
  })
</script>

<template>
  <div
    class="card border-colored border-r-8 d-flex flex-reverse gap-8 pa-8 justify-space-between unreachable"
  >
    <div class="card-img-wrapper">
      <NuxtImg
        v-slot="{ src, isLoaded, imgAttrs }"
        :src="image"
        class="card-img full-wh border-r-8"
        :custom="true"
      >
        <img
          v-if="isLoaded"
          v-bind="imgAttrs"
          :src="src"
          :alt="`${name} Image`"
        >
        <div v-else class="skeleton-image">
          <common-app-skeleton />
        </div>
      </NuxtImg>
    </div>

    <div class="card-content">
      <h2 class="text-bold">{{ name }}</h2>
      <p>Category: {{ category }}</p>
      <p>Glass: {{ glass }}</p>
      <p>Instructions: {{ instructions }}</p>
      <common-app-list :ingredients="ingredients" />
    </div>
  </div>
</template>

<style scoped>
  .card-img-wrapper {
    min-width: 180px;
    height: 200px;
  }

  .card-img {
    object-fit: cover;
  }

  .skeleton-image {
    height: 200px;
    min-width: 200px;
  }

  @media (max-width: 744px) {
    .card {
      max-width: 100%;
      flex-direction: column;
    }

    .skeleton-image {
      min-width: 100%;
    }
  }
</style>

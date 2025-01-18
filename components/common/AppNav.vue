<script setup lang="ts">
  import { links } from '~/utils/constants/links'
</script>

<template>
  <nav>
    <ul class="d-flex flex-col gap-4">
      <li v-for="link in links" :key="link.name">
        <NuxtLink class="link text-colored" :to="link.root">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .router-link-active {
    font-weight: bold;
    color: var(--color-text);
  }
</style>

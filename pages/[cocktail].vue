<script setup lang="ts">
  import { useCocktailsStore } from '~/store/cocktailsStore'

  const { cocktails, loadCocktails } = useCocktailsStore()
  const cocktailCode = useRoute().params.cocktail as string
  const DEFAULT_SKELETON_AMOUNT = 5

  const getCurrentCocktail = computed(() => cocktails[cocktailCode])

  onMounted(async () => {
    try {
      await loadCocktails(cocktailCode)
    } catch (error) {
      console.error(error)
      await useRouter().push('/404')
    }
  })
</script>

<template>
  <div>
    <div
      v-if="!getCurrentCocktail || !getCurrentCocktail.length"
      class="d-flex flex-col gap-6 full-w"
    >
      <common-app-skeleton
        v-for="(skeleton, index) in DEFAULT_SKELETON_AMOUNT"
        :key="`${skeleton}-${index}`"
        class="card-skeleton"
      />
    </div>

    <div v-else class="d-flex flex-col gap-6">
      <common-app-card
        v-for="cocktail in getCurrentCocktail"
        :key="cocktail.id"
        v-bind="cocktail"
      />
    </div>
  </div>
</template>

<style scoped>
  .card-skeleton {
    height: 200px;
  }
</style>

import { fetchCocktails } from '~/utils/fetchCocktails'
import type { Cocktail } from '~/types/cocktails'

export const useCocktailsStore = defineStore('cocktails', () => {
  const cocktails = ref<Record<string, Cocktail[]>>({})

  const loadCocktails = async (code: string) => {
    if (!cocktails.value[code]) {
      cocktails.value[code] = await fetchCocktails(code)
    }
  }

  return {
    cocktails,
    loadCocktails,
  }
})

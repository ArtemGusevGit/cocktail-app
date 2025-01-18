import type { Cocktail } from '~/types/cocktails'
import type { RawDrink } from '~/types/rawDrinks'
import { formatedCocktail } from '~/utils/formatedCocktail'
import { getApiBase } from '~/utils/getApiBase'

export async function fetchCocktails(code: string): Promise<Cocktail[]> {
  try {
    const url = `${getApiBase()}search.php?s=${code}`
    const { drinks }: { drinks: RawDrink[] } = await $fetch(url)

    if (!drinks || drinks.length === 0) {
      throw `No drinks found for code: ${code}`
    }

    return drinks.map((drink: RawDrink) => formatedCocktail(drink))
  } catch (e) {
    const error = `Could not fetch drinks for code: ${code}`
    console.error(error, e)
    throw error
  }
}

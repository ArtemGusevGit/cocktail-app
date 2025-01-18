import type { RawDrink } from '~/types/rawDrinks'
import type { Cocktail } from '~/types/cocktails'

export const formatedCocktail = (drink: RawDrink) => {
  return {
    id: drink.idDrink,
    name: drink.strDrink,
    category: drink.strCategory,
    isAlcoholic: drink.strAlcoholic === 'Alcoholic',
    glass: drink.strGlass,
    instructions: drink.strInstructions,
    image: drink.strDrinkThumb,
    ingredients: Array.from({ length: 15 })
      .map((_, i) => ({
        measure: drink[`strMeasure${i + 1}`],
        ingredient: drink[`strIngredient${i + 1}`],
      }))
      .filter(({ ingredient }) => ingredient),
  } as Cocktail
}

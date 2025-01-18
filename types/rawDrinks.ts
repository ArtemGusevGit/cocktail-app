export interface RawDrink {
  idDrink: string
  strDrink: string
  strCategory: string | null
  strAlcoholic: string | null
  strGlass: string | null
  strInstructions: string | null
  strDrinkThumb: string | null

  [key: `strMeasure${number}`]: string | null

  [key: `strIngredient${number}`]: string | null
}

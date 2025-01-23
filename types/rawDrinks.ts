export type RawDrink = {
  idDrink: string
  strDrink: string
  strCategory: string
  strAlcoholic: string
  strGlass: string
  strInstructions: string
  strDrinkThumb: string

  [key: `strMeasure${number}`]: string

  [key: `strIngredient${number}`]: string
}

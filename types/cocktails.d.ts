export type Cocktail = {
  id: string
  name: string
  category: string
  isAlcoholic: boolean
  glass: string
  instructions: string
  image: string
  ingredients: Array<{ measure: string; ingredient: string }>
}

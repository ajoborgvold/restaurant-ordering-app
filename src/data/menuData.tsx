import { MenuObj } from "../interfaces/interfaces"

const menuData: MenuObj[] = [
  {
    name: "coffee",
    price: 8,
    image: "☕️",
    ingredients: ["water", "coffee beans"],
    isBeverage: true,
  },
  {
    name: "croissant",
    price: 5,
    image: "🥐",
    ingredients: ["vegan butter", "flour", "sugar", "salt", "yeast", "oat milk"],
    isBeverage: false
  },
]

export { menuData }
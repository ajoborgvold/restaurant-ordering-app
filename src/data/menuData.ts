import { MenuObj } from "../interfaces/interfaces"

const menuData: MenuObj[] = [
  {
    name: "Pizza",
    price: 14,
    image: "🍕",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    isBeverage: false,
  },
  {
    name: "Hamburger",
    price: 12,
    image: "🍔",
    ingredients: ["beef", "cheese", "lettuce"],
    isBeverage: false,
  },
  {
    name: "French fries",
    price: 5,
    image: "🍟",
    ingredients: ["potato", "vegetable oil", "salt"],
    isBeverage: false,
  },
  {
    name: "Beer",
    price: 12,
    image: "🍺",
    ingredients: ["grain, hops, yeast, water"],
    isBeverage: true,
  },
  {
    name: "Coffee",
    price: 8,
    image: "☕️",
    ingredients: ["water", "coffee beans"],
    isBeverage: true,
  },
  {
    name: "Croissant",
    price: 7,
    image: "🥐",
    ingredients: [
      "vegan butter",
      "flour",
      "sugar",
      "salt",
      "yeast",
      "oat milk",
    ],
    isBeverage: false,
  },
]

export { menuData }

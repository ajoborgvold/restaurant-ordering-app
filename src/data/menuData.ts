import { MenuObj } from "../interfaces/interfaces"

const menuData: MenuObj[] = [
  {
    name: "Pizza",
    price: 14,
    image: "🍕",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    isMealDeal: true,
  },
  {
    name: "Hamburger",
    price: 12,
    image: "🍔",
    ingredients: ["beef", "cheese", "lettuce"],
    isMealDeal: true,
  },
  {
    name: "French fries",
    price: 5,
    image: "🍟",
    ingredients: ["potato", "vegetable oil", "salt"],
    isMealDeal: true,
  },
  {
    name: "Beer",
    price: 9,
    image: "🍺",
    ingredients: ["grain, hops, yeast, water"],
    isMealDeal: true,
  },
  {
    name: "Coffee",
    price: 5,
    image: "☕️",
    ingredients: ["water", "coffee beans"],
    isMealDeal: false,
  },
  {
    name: "Croissant",
    price: 4,
    image: "🥐",
    ingredients: [
      "vegan butter",
      "flour",
      "sugar",
      "salt",
      "yeast",
      "oat milk",
    ],
    isMealDeal: false,
  },
]

export { menuData }

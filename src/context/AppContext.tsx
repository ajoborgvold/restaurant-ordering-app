import { createContext, useEffect, useState } from "react"
import { menuData } from "../data/menuData"
import {
  AppContextData,
  AppContextProviderProps,
  MenuObj,
} from "../interfaces/interfaces"

const AppContext = createContext<AppContextData>({
  cartCount: 0,
  cartItems: [],
  itemCounts: {},
  addToCart: () => {},
  removeOneFromItem: () => {},
  addOneToItem: () => {},
})

function AppContextProvider({
  children,
}: AppContextProviderProps): JSX.Element {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState<MenuObj[]>([])
  const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    setCartItems(prevCartItems => prevCartItems.filter(item => itemCounts[item.name] !== 0))
  }, [itemCounts])

  function addToCart(index: number): void {
    const targetItem = menuData[index]
    const isItemInArray = cartItems.find(
      (item) => item.name === targetItem.name
    )

    !isItemInArray &&
      setCartItems((prevCartItems) => [...prevCartItems, targetItem])

    addOneToItem(targetItem.name)
  }

  function addOneToItem(itemName: string): void {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [itemName]: (prevItemCounts[itemName] || 0) + 1,
    }))
    setCartCount((prevCartCount) => prevCartCount + 1)
  }

  function removeOneFromItem(itemName: string): void {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [itemName]: prevItemCounts[itemName] - 1,
    }))
    setCartCount((prevCartCount) => prevCartCount - 1)
  }

  return (
    <AppContext.Provider
      value={{
        cartCount,
        cartItems,
        itemCounts,
        addToCart,
        addOneToItem,
        removeOneFromItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

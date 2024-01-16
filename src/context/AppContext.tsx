import { createContext, useState } from "react"
import { menuData } from "../data/menuData"
import { AppContextData, AppContextProviderProps, MenuObj } from "../interfaces/interfaces"

const AppContext = createContext<AppContextData>({
  cartCount: 0,
  cartItems: [],
  itemCounts: {},
  addToCart: () => { },
  removeOneFromItem: () => { },
  addOneToItem: () => {}
})

function AppContextProvider({ children }: AppContextProviderProps): JSX.Element {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState<MenuObj[]>([])
  const [itemCounts, setItemCounts] = useState<{[key: string]: number}>({})

  function addToCart(index: number): void {
    const targetItem = menuData[index]
    const isItemInArray = cartItems.find(
      (item) => item.name === targetItem.name
    )

    !isItemInArray && setCartItems((prevCartItems) => [...prevCartItems, targetItem])

    addOneToItem(index)
  }

  function addOneToItem(index: number): void {
    const targetItem = menuData[index]

    setItemCounts(prevItemCounts => ({
      ...prevItemCounts,
      [targetItem.name]: (prevItemCounts[targetItem.name] || 0) + 1
    }))
    setCartCount((prevCartCount) => prevCartCount + 1)
  }

  function removeOneFromItem(index: number): void {
    const targetItem = menuData[index]

    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [targetItem.name]: prevItemCounts[targetItem.name] - 1,
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

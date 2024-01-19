import { ChangeEvent, SyntheticEvent, createContext, useEffect, useState } from "react"
import { menuData } from "../data/menuData"
import { formFieldsArray } from "../data/formFieldsArray"
import {
  AppContextData,
  AppContextProviderProps,
  MenuObj,
  FormData,
} from "../interfaces/interfaces"

const AppContext = createContext<AppContextData>({
  cartCount: 0,
  cartItems: [],
  itemCounts: {},
  addToCart: () => {},
  removeOneFromItem: () => {},
  addOneToItem: () => {},
  isModalOpen: false,
  openPaymentModal: () => {},
  closePaymentModal: () => { },
  formData: {
    "name": "",
    "card-number": "",
    "ccv": ""
  },
  handleInputChange: () => {},
  validateFormFields: () => {},
})

function AppContextProvider({
  children,
}: AppContextProviderProps): JSX.Element {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState<MenuObj[]>([])
  const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    "name": "",
    "card-number": "",
    "ccv": "",
  })

  useEffect(() => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => itemCounts[item.name] !== 0)
    )
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

  function addOneToItem(targetItem: string): void {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [targetItem]: (prevItemCounts[targetItem] || 0) + 1,
    }))
    setCartCount((prevCartCount) => prevCartCount + 1)
  }

  function removeOneFromItem(targetItem: string): void {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [targetItem]: prevItemCounts[targetItem] - 1,
    }))
    setCartCount((prevCartCount) => prevCartCount - 1)
  }

  function openPaymentModal() {
    setIsModalOpen(true)
  }

  function closePaymentModal() {
    setIsModalOpen(false)
  }
  
  function handleInputChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: e.target.value
    }))
  }
  
  function validateFormFields(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault()
    formFieldsArray.map(item => console.log(item.pattern))
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
        isModalOpen,
        openPaymentModal,
        closePaymentModal,
        formData,
        handleInputChange,
        validateFormFields,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

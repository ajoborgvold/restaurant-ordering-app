import {
  ChangeEvent,
  SyntheticEvent,
  createContext,
  useEffect,
  useState,
} from "react"
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
  closePaymentModal: () => {},
  formData: {
    name: "",
    "card-number": "",
    ccv: "",
  },
  handleInputChange: () => {},
  validateUserInput: () => { },
  handleSubmitForm: () => {}
})

function AppContextProvider({
  children,
}: AppContextProviderProps): JSX.Element {
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState<MenuObj[]>([])
  const [itemCounts, setItemCounts] = useState<{ [key: string]: number }>({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    "card-number": "",
    ccv: "",
  })
  // const [inputError, setInputError] = useState(false)
  // const [errorMessage, setErrorMessage] = useState({
  //   name: "",
  //   "card-number": "",
  //   ccv: ""
  // })

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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: e.target.value,
    }))
  }

  function validateUserInput(id: string) {
    const targetInput = formFieldsArray.find(item => item.id === id)

    if (targetInput) {
      const isValid = new RegExp(targetInput.pattern).test(formData[id])

      if (!isValid) {
        // setErrorMessage(prevErrorMessage => ({...prevErrorMessage, targetInput: "Error"}))

        console.log("Invalid input")
      }
    }

  }
  
  function handleSubmitForm(e: SyntheticEvent<HTMLButtonElement>) {
    e.preventDefault()

    if (e.type === "click" || e.type === "keydown" && (e as React.KeyboardEvent<HTMLButtonElement>).keyCode === 13) {
      const isValid = formFieldsArray.every((item) =>
        new RegExp(item.pattern).test(formData[item.id])
      )
    
      if (isValid) {
        setIsModalOpen(false)
      } else {
        console.log("Invalid inputs")
      }
    }
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
        validateUserInput,
        handleSubmitForm,
        // errorMessage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

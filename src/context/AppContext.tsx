import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
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
  validFormInputs: {},
  handleFormButtonClick: () => {},
  handleFormButtonKeyPress: () => {},
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
  const [validFormInputs, setValidFormInputs] = useState({
    name: false,
    "card-number": false,
    ccv: false
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
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: e.target.value,
    }))
    validateUserInput(id, e.target.value)
  }

  function validateUserInput(id: string, inputValue: string) {
    const targetInput = formFieldsArray.find((item) => item.id === id)

    if (targetInput) {
      const isValid = new RegExp(targetInput.pattern).test(inputValue)
        setValidFormInputs((prevValidFormInputs) => ({
          ...prevValidFormInputs,
          [id]: isValid,
        }))
        console.log(
          "Invalid input. Input does not match the pattern defined in formFieldsArray."
        )
    }
  }

  function handleFormButtonClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    handleSubmitForm()
  }

  function handleFormButtonKeyPress(e: KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Enter") {
      handleSubmitForm()
    }
  }

  function handleSubmitForm() {
    const isValid = formFieldsArray.every((item) =>
      new RegExp(item.pattern).test(formData[item.id])
    )

    if (isValid) {
      setIsModalOpen(false)
      console.log(formData.name)
    } else {
      setIsModalOpen(true)
      console.log("Invalid inputs")
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
        validFormInputs,
        handleFormButtonClick,
        handleFormButtonKeyPress,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

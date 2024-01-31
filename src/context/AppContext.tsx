import {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  FocusEvent,
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
  isInputFocused: {},
  handleEmptyInput: () => {},
  validFormInputs: {},
  handleFormButtonClick: () => {},
  handleFormButtonKeyPress: () => {},
  isOrderCompleted: false,
  resetCart: () => {},
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
    ccv: false,
  })
  const [isInputFocused, setIsInputFocused] = useState<{
    [key: string]: boolean
  }>({})
  const [isOrderCompleted, setIsOrderCompleted] = useState(false)
  const [isCartReset, setIsCartReset] = useState(false)


  //=== Reset cart when user returns to menu after completing order ===//
  useEffect(() => {
    if (isCartReset) {
      setCartCount(0)
      setCartItems([])
      setItemCounts({})
      setIsModalOpen(false)
      setFormData({ name: "", "card-number": "", ccv: "" })
      setValidFormInputs({ name: false, "card-number": false, ccv: false })
      setIsCartReset(false)
      setIsOrderCompleted(false)
    }
  }, [isCartReset])

  //=== Update the cart item count when the user adds/subtracts 1 from item ===//
  useEffect(() => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => itemCounts[item.name] !== 0)
    )
  }, [itemCounts])

  //=== Handle focus on form elements to determine when to display a message to the user about the required form input pattern ===//
  useEffect(() => {
    setIsInputFocused({})
  }, [formData])


  //=== HANDLE SHOPPING CART LOGIC ===//

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


  //=== HANDLE PAYMENT LOGIC ===//

  /* Open/close modal */
  function openPaymentModal() {
    setIsModalOpen(true)
  }

  function closePaymentModal() {
    setIsModalOpen(false)
  }

  /* Handle payment form input, validation and submission */
  function handleInputChange(e: ChangeEvent<HTMLInputElement>, id: string) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: e.target.value,
    }))
    // validateUserInput(id, e.target.value)
    setTimeout(() => {
      validateUserInput(id, e.target.value)
    }, 500);
  }

  function handleEmptyInput(e: FocusEvent<HTMLInputElement>, id: string) {
    setIsInputFocused((prevIsInputFocused) => ({
      ...prevIsInputFocused,
      [id]: true,
    }))

    if (!e.target.value) {
      validateUserInput(id, "")
    }
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
      setIsOrderCompleted(true)
      console.log(formData.name)
    } else {
      setIsModalOpen(true)
      console.log("Invalid inputs")
    }
  }


  //=== Reset shopping cart when the user returns to menu after completing order ===//
  function resetCart() {
    setIsCartReset(true)
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
        isInputFocused,
        handleEmptyInput,
        validFormInputs,
        handleFormButtonClick,
        handleFormButtonKeyPress,
        isOrderCompleted,
        resetCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider }

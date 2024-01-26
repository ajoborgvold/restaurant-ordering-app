import { ChangeEvent, ReactNode, MouseEvent, KeyboardEvent, ReactEventHandler, FocusEvent } from "react";

interface MenuObj {
  name: string;
  price: number;
  image: string;
  ingredients: string[];
  isBeverage: boolean;
}

interface AppContextData {
  cartCount: number
  cartItems: MenuObj[]
  itemCounts: { [key: string]: number }
  addToCart: (index: number) => void
  removeOneFromItem: (targetItem: string) => void
  addOneToItem: (targetItem: string) => void
  isModalOpen: boolean
  openPaymentModal: () => void
  closePaymentModal: () => void
  formData: FormData
  handleInputChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void
  isInputFocused: { [key: string]: boolean }
  handleEmptyInput: (e: FocusEvent<HTMLInputElement>, id: string) => void
  validFormInputs: { [key: string]: boolean }
  handleFormButtonClick: (e: MouseEvent<HTMLButtonElement>) => void
  handleFormButtonKeyPress: (e: KeyboardEvent<HTMLButtonElement>) => void
  isOrderCompleted: boolean
  resetCart: () => void
}

interface AppContextProviderProps {
  children: ReactNode;
}

interface FormField {
  id: string;
  type: string;
  text: string;
  autoComplete: string;
  pattern: RegExp;
  errorMessage: string;
}

interface FormData {
  [key: string]: string
  "name": string;
  "card-number": string;
  "ccv": string;
}
  
interface LinkProps {
  path: string;
  children: string | [JSX.Element, string];
  onClick?: ReactEventHandler<HTMLAnchorElement>;
}

interface ButtonProps {
  handleClick: (targetItem: string) => void;
  targetItem: string;
  children: JSX.Element;
}

export type { MenuObj, AppContextData, AppContextProviderProps, FormField, FormData, LinkProps, ButtonProps }
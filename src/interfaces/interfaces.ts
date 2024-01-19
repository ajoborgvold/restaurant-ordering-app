import { ChangeEvent, ReactNode, SyntheticEvent } from "react";

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
  validateUserInput: (id: string) => void
  handleSubmitForm: (e: SyntheticEvent<HTMLButtonElement>) => void
  
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
}

interface ButtonProps {
  handleClick: (targetItem: string) => void;
  targetItem: string;
  children: JSX.Element;
}

export type { MenuObj, AppContextData, AppContextProviderProps, FormField, FormData, LinkProps, ButtonProps }
import { ReactNode } from "react";

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
}

interface AppContextProviderProps {
  children: ReactNode;
}

interface FormField {
  id: string;
  type: string;
  text: string;
  autoComplete: string;
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

export type { MenuObj, AppContextData, AppContextProviderProps, FormField, LinkProps, ButtonProps }
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
  removeOneFromItem: (index: number) => void
  addOneToItem: (index: number) => void
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
  itemCountFunction: (index: number) => void;
  index: number;
  children: JSX.Element;
}

export type { MenuObj, AppContextData, AppContextProviderProps, FormField, LinkProps, ButtonProps }
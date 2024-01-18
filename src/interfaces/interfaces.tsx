import { ReactNode } from "react";

interface MenuObj {
  name: string;
  price: number;
  image: string;
  ingredients: string[];
  isBeverage: boolean;
}

interface AppContextData {
  cartCount: number;
  cartItems: MenuObj[];
  itemCounts: {[key: string]: number};
  addToCart: (index: number) => void;
  removeOneFromItem: (itemName: string) => void;
  addOneToItem: (itemName: string) => void;
  isModalOpen: boolean;
  openPaymentModal: () => void;
  closePaymentModal: () => void;
}

interface AppContextProviderProps {
  children: ReactNode;
}

export type { MenuObj, AppContextData, AppContextProviderProps }
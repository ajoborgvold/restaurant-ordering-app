import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function OrderCard(): JSX.Element {
  const { cartItems, itemCounts } =
    useContext(AppContext)

  const orderCardEl = cartItems.map((item) => {
    const itemQuantity = itemCounts[item.name]
    const itemPrice = itemQuantity * item.price

    return (
      <li
        key={item.name}
        className="grid grid-cols-3 gap-8 odd:bg-amber-200 dark:odd:bg-slate-700 even:bg-amber-100 dark:even:bg-slate-800 dark:text-slate-50 p-4 first:rounded-t last:rounded-b"
      >
        <p className="font-semibold text-lg sm:text-xl md:text-2xl">{item.name}</p>
        <div className="flex gap-4 sm:text-lg md:text-xl">
          <p>Quant:</p>
          <p>{itemQuantity}</p>
        </div>
        <p className="ml-auto text-lg sm:text-xl md:text-2xl font-semibold">$ {itemPrice}</p>
      </li>
    )
  })

  return <ul>{orderCardEl}</ul>
}

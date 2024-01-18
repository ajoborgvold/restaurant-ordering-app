import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function OrderCard(): JSX.Element {
  const { cartItems, itemCounts } =
    useContext(AppContext)

  const orderCardEl = cartItems.map((item) => {
    const itemQuantity = itemCounts[item.name]
    const itemPrice = itemQuantity * item.price

    return (
      <div
        key={item.name}
        className="grid grid-cols-3 gap-8 odd:bg-amber-200 even:bg-amber-100 p-4 first:rounded-t last:rounded-b"
      >
        <p className="font-semibold text-xl md:text-2xl">{item.name}</p>
        <div className="flex gap-4 text-lg md:text-xl">
          <p className="">Quant:</p>
          <p className="">{itemQuantity}</p>
        </div>
        <p className="ml-auto text-xl md:text-2xl">$ {itemPrice}</p>
      </div>
    )
  })

  return <>{orderCardEl}</>
}

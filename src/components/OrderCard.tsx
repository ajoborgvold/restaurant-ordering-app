import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { FaPlus, FaMinus } from "react-icons/fa6"


export default function OrderCard(): JSX.Element {
  const { cartItems, itemCounts, removeOneFromItem, addOneToItem } = useContext(AppContext)

  const orderCardEl = cartItems.map((item) => {
    const itemQuantity = itemCounts[item.name]
    const itemPrice = itemQuantity * item.price

    return (
      <div key={item.name} className="grid grid-cols-3 gap-4 text-2xl">
        <p>{item.name}</p>
        {/* <p className="">Quant: {itemQuantity}</p> */}
        <div className="ml-auto flex items-center gap-4">
          <button
            className="flex justify-center items-center border-2 border-amber-950 rounded-xl py-1 px-2 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
            aria-label="Add 1"
            onClick={() => removeOneFromItem(item.name)}
          >
            <FaMinus aria-hidden="false" />
          </button>
          <p className="text-xl font-semibold">{itemQuantity}</p>
          <button
            className="flex justify-center items-center border-2 border-amber-950 rounded-xl py-1 px-2 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
            aria-label="Remove 1"
            onClick={() => addOneToItem(item.name)}
          >
            <FaPlus aria-hidden="false" />
          </button>
        </div>
        <p className="ml-auto">$ {itemPrice}</p>
      </div>
    )
  })

  return <>{orderCardEl}</>
}

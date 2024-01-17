import { menuData } from "../data/menuData"
import { AppContext } from "../context/AppContext"
import { useContext } from "react"
import { FaPlus, FaMinus } from "react-icons/fa6"

export default function MenuCard(): JSX.Element {
  const { itemCounts, addToCart, removeOneFromItem, addOneToItem } = useContext(AppContext)

  const menuCardEl = menuData.map((item, index) => {
    const countForItem = itemCounts[item.name] || 0

    return (
      <div
        key={index}
        className="w-full flex items-center gap-3 md:gap-6 border-b border-amber-200 last:border-none py-6"
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl md:text-3xl capitalize font-semibold tracking-wide">
            {item.name}
          </h3>
          <p className="md:text-lg italic">{item.ingredients.join(", ")}</p>
          <p className="text-xl md:text-2xl mt-4">${item.price}</p>
        </div>
        {countForItem ? (
          <div className="ml-auto flex items-center gap-4">
            <button
              className="flex justify-center items-center border-2 border-amber-950 rounded-xl py-1 px-2 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
              aria-label="Add 1"
              onClick={() => removeOneFromItem(item.name)}
            >
              <FaMinus aria-hidden="false" />
            </button>
            <p className="text-xl font-semibold">{countForItem}</p>
            <button
              className="flex justify-center items-center border-2 border-amber-950 rounded-xl py-1 px-2 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
              aria-label="Remove 1"
              onClick={() => addOneToItem(item.name)}
            >
              <FaPlus aria-hidden="false" />
            </button>
          </div>
        ) : (
          <button
            className="ml-auto text-xl md:text-2xl font-semibold tracking-wider border-2 border-amber-950 rounded-lg py-2 px-8 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
            onClick={() => addToCart(index)}
          >
            Add
          </button>
        )}
        <div className="order-first flex items-center text-7xl md:text-8xl">
          {item.image}
        </div>
      </div>
    )
  })

  return <>{menuCardEl}</>
}

import { menuData } from "../data/menuData"

export default function MenuCard(): JSX.Element {
  const menuCardEl = menuData.map((item, index) => {
    return (
      <div
        key={index}
        className="w-full flex gap-3 md:gap-6 items-center border-b border-amber-200 last:border-none py-6"
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl md:text-3xl capitalize font-semibold tracking-wide">
            {item.name}
          </h3>
          <p className="md:text-lg italic">{item.ingredients.join(", ")}</p>
          <p className="text-xl md:text-2xl mt-4">${item.price}</p>
        </div>
        <button className="ml-auto text-xl md:text-2xl tracking-wider border border-amber-950 rounded-lg py-2 px-8 hover:bg-gradient-to-r from-amber-900 to-amber-600 hover:text-amber-50">
          Add
        </button>
        <div className="order-first flex items-center text-7xl md:text-8xl">
          {item.image}
        </div>
      </div>
    )
  })

  return <>{menuCardEl}</>
}

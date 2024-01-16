import { menuData } from "../data/menuData"

export default function MenuCard(): JSX.Element {
  const menuCardEl = menuData.map((item, index) => {
    return (
      <div
        key={index}
        className="w-full grid grid-cols-2 items-center border-b border-slate-50 p-2"
      >
        <h3 className="capitalize font-semibold tracking-wide">{item.name}</h3>
        <p>{item.ingredients.join(', ')}</p>
        <p className="font-bold">${item.price}</p>
        <div className="order-first row-span-2 flex items-center text-7xl">
          {item.image}
        </div>
      </div>
    )
  })

  return <>{menuCardEl}</>
}

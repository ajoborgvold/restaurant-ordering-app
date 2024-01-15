import { menuData } from "../data/menuData"

export default function MenuCard(): JSX.Element {
  const menuCardEl = menuData.map((item, index) => {
    return (
      <div
        key={index}
        className="w-56 grid grid-cols-2 items-center border border-slate-50 rounded-lg p-2"
      >
        <h3 className="capitalize font-semibold tracking-wide">{item.name}</h3>
        <p className="font-bold">${item.price}</p>
        <div className="order-first row-span-2 flex items-center text-7xl">
          {item.image}
        </div>
      </div>
    )
  })

  return <>{menuCardEl}</>
}

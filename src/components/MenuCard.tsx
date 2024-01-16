import { menuData } from "../data/menuData"

export default function MenuCard(): JSX.Element {
  const menuCardEl = menuData.map((item, index) => {
    return (
      <div
        key={index}
        className="w-full flex gap-6 items-center border-b border-slate-50 last:border-none py-8"
      >
        <div className="flex flex-col gap-1">
          <h3 className="capitalize font-semibold tracking-wide">
            {item.name}
          </h3>
          <p className="">{item.ingredients.join(", ")}</p>
          <p className="font-bold mt-4">${item.price}</p>
        </div>
        <button className="ml-auto border border-slate-50 rounded-md py-2 px-4 hover:bg-slate-50 hover:tracking-widest hover:font-bold">
          Add
        </button>
        <div className="order-first flex items-center text-7xl">
          {item.image}
        </div>
      </div>
    )
  })

  return <>{menuCardEl}</>
}

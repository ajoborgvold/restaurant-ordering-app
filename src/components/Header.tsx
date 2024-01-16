import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { FaShoppingCart } from "react-icons/fa"

export default function Header(): JSX.Element {
  const { cartCount } = useContext(AppContext)

  return (
    <header className="flex items-center gap-2 bg-gradient-to-r from-amber-900 to-amber-500 text-slate-50 py-10 px-8 md:px-24">
      <div>
        <h1 className="text-4xl md:text-6xl tracking-wide">Ajo's Diner</h1>
        <p className="text-xl md:text-2xl tracking-wide">
          The best burgers and pizzas in town
        </p>
      </div>
      <div className="relative ml-auto">
        <FaShoppingCart className="text-amber-950 text-6xl" aria-label="Show shopping cart" aria-hidden="false" />
        <p className="absolute top-2 right-5 flex justify-center items-center text-amber-100 text-xl rounded-full">
          {cartCount}
        </p>
      </div>
    </header>
  )
}

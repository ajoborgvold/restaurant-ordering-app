import { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { FaShoppingCart } from "react-icons/fa"
import { FaArrowLeft } from "react-icons/fa6"

export default function Header(): JSX.Element {
  const { cartCount } = useContext(AppContext)
  const [isAnimated, setIsAnimated] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsAnimated(true)
    
    const timeOut = setTimeout(() => {
      setIsAnimated(false)
    }, 1000)

    return () => clearTimeout(timeOut)
  }, [cartCount])

  return (
    <header className="flex items-center gap-2 bg-gradient-to-r from-amber-900 to-amber-500 text-slate-50 py-10 px-8 md:px-24">
      <div>
        <h1 className="text-amber-100 text-4xl md:text-6xl">
          Ajo's Diner
        </h1>
        <p className="text-amber-100 text-xl md:text-2xl">
          The best burgers and pizzas in town
        </p>
      </div>
      {location.pathname === "/" ? (
        <Link to="/order" className="relative ml-auto group">
          <FaShoppingCart
            className="text-amber-100 text-5xl md:text-6xl group-hover:text-amber-950 group-focus:text-amber-950"
            aria-label="Show shopping cart"
            aria-hidden="false"
          />
          {cartCount !== 0 && (
            <p
              className={`absolute top-1 right-4 md:top-2 md:right-5 flex justify-center items-center text-amber-950 group-hover:text-amber-100 group-focus:text-amber-100 text-lg md:text-xl ${
                isAnimated ? "scale-150" : ""
              }`}
            >
              {cartCount}
            </p>
          )}
        </Link>
      ) : (
        <Link
          to="/"
          className="ml-auto flex items-center gap-2 bg-amber-100 text-amber-950 text-lg md:text-xl p-2 border-2 border-amber-950 rounded-lg hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
        >
          <FaArrowLeft />
          Menu
        </Link>
      )}
    </header>
  )
}

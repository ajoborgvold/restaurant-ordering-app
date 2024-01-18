import { Link } from "react-router-dom"
import MenuCard from "../components/MenuCard"

export default function Menu(): JSX.Element {
  return (
    <main className="flex-1 flex flex-col items-center gap-6 py-8">
      <h2 className="text-4xl font-semibold">Menu</h2>
      <section className="sm:w-2/3 lg:w-1/2 flex flex-col px-4">
        <MenuCard />
        <Link
          to="/order"
          className="mt-12 text-2xl md:text-3xl p-4  border-2 border-amber-950 rounded-2xl hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50 text-center"
        >
          Check out
        </Link>
      </section>
    </main>
  )
}

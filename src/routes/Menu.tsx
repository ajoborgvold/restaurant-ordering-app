import MenuCard from "../components/MenuCard"
import RouteLink from "../components/RouteLink"

export default function Menu(): JSX.Element {
  return (
    <main className="flex-1 flex flex-col items-center gap-6 py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Menu</h2>
      <section className="sm:w-2/3 lg:w-1/2 flex flex-col px-4">
        <MenuCard />
        <RouteLink path="/order" children="Check out"/>
      </section>
    </main>
  )
}

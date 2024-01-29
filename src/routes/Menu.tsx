import Footer from "../components/Footer"
import MenuCard from "../components/MenuCard"
import RouteLink from "../components/RouteLink"

export default function Menu(): JSX.Element {
  return (
    <>
      <main className="flex-1 flex flex-col items-center gap-2 py-14">
        <div className="w-full flex justify-center relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Menu
          </h2>
          <div className="absolute -top-12 sm:-top-8 left-4 sm:left-6 md:left-12 lg:left-20 xl:left-40 min-w-max bg-amber-200 dark:bg-slate-700 dark:text-slate-50 text-lg sm:text-xl md:text-2xl lg:text-3xl py-1 px-2 sm:py-2 sm:px-6 md:py-3 md:px-8 border border-amber-950 dark:border-slate-50 rounded -rotate-6">
            <p>Meal deal:</p>
            <p>
              15 % discount! <span className="text-xs align-top">*</span>
            </p>
          </div>
        </div>
        <section className="sm:w-2/3 lg:w-1/2 flex flex-col px-4">
          <MenuCard />
          <RouteLink path="/order" children="Check out" />
        </section>
      </main>
      <Footer />
    </>
  )
}

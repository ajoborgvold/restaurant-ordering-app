import MenuCard from "../components/MenuCard"
import RouteLink from "../components/RouteLink"

export default function Menu(): JSX.Element {
  return (
    <main className="flex-1 flex flex-col items-center gap-2 pt-14 pb-4">
      <div className="w-full flex justify-center relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Menu</h2>
        <div className="absolute -top-10 sm:-top-8 left-2 sm:left-6 md:left-12 lg:left-20 xl:left-40 min-w-max bg-amber-200 dark:bg-slate-700 dark:text-slate-50 sm:text-lg md:text-xl py-1 px-2 sm:py-2 sm:px-6 border border-amber-950 dark:border-slate-50 rounded -rotate-6">
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
      <p className="mt-8 ml-2 self-start">
        <span className="text-xs align-top">*</span> The discount applies when you order
        french fries and beer together with either pizza or hamburger. Maximum
        three meal deals per order.
      </p>
    </main>
  )
}

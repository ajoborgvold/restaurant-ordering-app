import Nav from "./Nav"

export default function Header(): JSX.Element {
  return (
    <header className="flex flex-col justify-center gap-2 bg-gradient-to-r from-amber-900 to-amber-500 text-slate-50 py-10 pl-8 md:pl-24">
      <h1 className="text-4xl md:text-6xl tracking-wide">Ajo's Diner</h1>
      <p className="text-xl md:text-2xl tracking-wide">The best burgers and pizzas in town</p>
      {/* <Nav /> */}
    </header>
  )
}

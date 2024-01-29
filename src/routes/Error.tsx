import RouteLink from "../components/RouteLink";

export default function Error(): JSX.Element {
  return (
    <main className="flex-1 flex flex-col justify-center items-center gap-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl">Sorry, something went wrong</h1>
      <p className="text-xl sm:text-2xl md:text-3xl">We apologize for the inconvenience.</p>
      <RouteLink path="/" children="Return to the menu" />
    </main>
  )
}
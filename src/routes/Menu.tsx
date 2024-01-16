import MenuCard from "../components/MenuCard"

export default function Menu(): JSX.Element {
  return (
    <main className="flex-1 flex justify-center">
      <div className="sm:w-2/3 lg:w-1/2 flex flex-col px-4">
        <MenuCard />
      </div>
    </main>
  )
}

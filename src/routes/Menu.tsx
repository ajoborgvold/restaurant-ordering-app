import MenuCard from "../components/MenuCard"

export default function Menu(): JSX.Element {
  return (
    <main className="flex-1">
      <h1>Menu page goes here</h1>
      <div className="flex flex-col gap-8">
        <MenuCard />
      </div>
    </main>
  )
}

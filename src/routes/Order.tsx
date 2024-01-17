import OrderCard from "../components/OrderCard";

export default function Order(): JSX.Element {
  return (
    <main className="flex-1 flex flex-col gap-6 items-center">
      <h1 className="mt-6 text-4xl font-semibold">Your order</h1>
      <section className="sm:w-2/3 lg:w-1/2 flex flex-col gap-4 px-4">
        <OrderCard />
      </section>
    </main>
  )
}
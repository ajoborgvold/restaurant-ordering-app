import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import OrderCard from "../components/OrderCard"
import Modal from "../components/Modal"
import RouteLink from "../components/RouteLink"

export default function Order(): JSX.Element {
  const { cartItems, itemCounts, openPaymentModal, isModalOpen } =
    useContext(AppContext)

  const totalPrice = cartItems
    .map((item) => item.price * itemCounts[item.name])
    .reduce((prev, current) => {
      return prev + current
    }, 0)

  return (
    <>
      <main className="flex-1 flex flex-col gap-8 items-center py-8">
        {cartItems.length ? (
          <>
            <h2 className="text-4xl font-semibold">Your order</h2>
            <section className="sm:w-2/3 lg:w-1/2 flex flex-col px-4">
              <OrderCard />
              <div className="mt-8 flex justify-between bg-amber-300 text-amber-950 text-2xl md:text-3xl p-4 rounded">
                <p>Total price:</p>
                <p>$ {totalPrice}</p>
              </div>
              <button
                className="mt-12 text-2xl md:text-3xl p-4  border-2 border-amber-950 rounded-2xl hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
                onClick={openPaymentModal}
              >
                Complete order
              </button>
            </section>
          </>
        ) : (
          <>
            <h2 className="text-4xl font-semibold">
              Your shopping cart is empty
            </h2>
            <RouteLink path="/" children="Return to menu" />
          </>
        )}
      </main>
      {isModalOpen && <Modal />}
    </>
  )
}

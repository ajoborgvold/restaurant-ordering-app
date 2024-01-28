import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import OrderCard from "../components/OrderCard"
import Modal from "../components/Modal"
import RouteLink from "../components/RouteLink"

export default function Order(): JSX.Element {
  const {
    formData,
    cartItems,
    itemCounts,
    openPaymentModal,
    isModalOpen,
    isOrderCompleted,
    resetCart
  } = useContext(AppContext)

  const totalPrice = cartItems
    .map((item) => item.price * itemCounts[item.name])
    .reduce((prev, current) => {
      return prev + current
    }, 0)

  const userFirstName = formData.name.trim().split(" ")[0]

  return (
    <>
      <main className="flex-1 flex flex-col gap-8 items-center py-8">
        {cartItems.length ? (
          <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Your order</h2>
            <section className="w-full sm:w-3/4 lg:w-1/2 flex flex-col px-8">
              <OrderCard />
              <div className="mt-8 flex justify-between bg-amber-300 dark:bg-slate-400 text-amber-950 dark:text-slate-950 text-xl font-semibold sm:text-2xl md:text-3xl p-4 rounded">
                <p>Total price:</p>
                <p>$ {totalPrice}</p>
              </div>
              {!isOrderCompleted ? (
                <button
                  className="mt-12 text-2xl md:text-3xl p-4  border-2 border-amber-950 dark:border-slate-300 rounded-2xl hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 dark:from-slate-500 to-amber-700 dark:to-slate-300 hover:text-amber-50 focus:text-amber-50 dark:hover:text-slate-950 dark:focus:text-slate-950"
                  onClick={openPaymentModal}
                >
                  Complete order
                </button>
              ) : (
                <div className="self-center mt-14 flex flex-col gap-4">
                  <p className="bg-amber-700 dark:bg-slate-400 text-amber-50 dark:text-slate-950 text-xl sm:text-2xl md:text-3xl text-center py-2 px-4 md:py-4 md:px-8 rounded-2xl">
                    Thanks {userFirstName}, your order is on its way!
                  </p>
                  <RouteLink
                    path="/"
                    children="Place new order"
                    onClick={resetCart}
                  />
                </div>
              )}
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

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

  const { mealDealCount, totalDiscount } = countMealDealsAndDiscount()

  function countMealDealsAndDiscount() {
    if (!cartItems.length) { return {mealDealCount: 0, totalDiscount: 0}}

    const mealDealLimit = 3
    const discountPct = 15
    let mealDealCount = 0
    let totalDiscount = 0

    const beer = cartItems.find(item => item.name === "Beer") ?? {price: 0}
    const fries = cartItems.find(item => item.name === "French fries") ?? {price: 0}
    const hamburger = cartItems.find(item => item.name === "Hamburger") ?? {price: 0}
    const pizza = cartItems.find(item => item.name === "Pizza") ?? {price: 0}

    let remainingBeer = itemCounts.Beer ?? 0
    let remainingFries = itemCounts["French fries"] ?? 0
    let remainingHamburger = itemCounts.Hamburger ?? 0
    let remainingPizza = itemCounts.Pizza ?? 0

    const potentialMealDeals = Math.min(
      remainingBeer,
      remainingFries,
      remainingPizza + remainingHamburger
    )

    for (let i = 0; i < potentialMealDeals; i++) {
      if (mealDealCount >= mealDealLimit) {break}

      if (
        remainingBeer >= 1 &&
        remainingFries >= 1 &&
        remainingHamburger >= 1
      ) {
        remainingBeer--
        remainingFries--
        remainingHamburger--

        mealDealCount++
        totalDiscount += (beer.price + fries.price + hamburger.price) * discountPct / 100
      } else if (
        remainingBeer >= 1 &&
        remainingFries >= 1 &&
        remainingPizza >= 1
      ) {
        remainingBeer--
        remainingFries--
        remainingPizza--

        mealDealCount++
        totalDiscount +=
          ((beer.price + fries.price + pizza.price) * discountPct) / 100
      }
    }

    totalDiscount = parseFloat(totalDiscount.toFixed(2))

    return { mealDealCount, totalDiscount }
  }
  
  const userFirstName = formData.name.trim().split(" ")[0]

  return (
    <>
      <main className="flex-1 flex flex-col gap-8 items-center py-8">
        {cartItems.length ? (
          <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
              Your order
            </h2>
            <section className="w-full sm:w-3/4 lg:w-1/2 flex flex-col px-2 sm:px-8">
              <OrderCard />
              <div className="mt-8 flex flex-col bg-amber-300 dark:bg-slate-400 text-amber-950 dark:text-slate-950 text-xl  p-4 rounded">
                {mealDealCount > 0 && (
                  <div className="w-full flex justify-between text-lg sm:text-base md:text-xl">
                    <p>Meal deal discount x {mealDealCount}</p>
                    <p>-$ {totalDiscount}</p>
                  </div>
                )}
                <div className="w-full flex justify-between font-semibold sm:text-2xl md:text-3xl">
                  <p>Total price:</p>
                  <p>$ {totalPrice - totalDiscount}</p>
                </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold px-4">
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

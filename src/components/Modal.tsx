import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "../context/AppContext"
import Input from "./Input"

export default function Modal(): JSX.Element {
  const {
    formData,
    isModalOpen,
    closePaymentModal,
    handleFormButtonClick,
    handleFormButtonKeyPress,
    validFormInputs,
  } = useContext(AppContext)
  const [isDisabled, setIsDisabled] = useState(true)
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    isModalOpen ? modalRef.current?.showModal() : modalRef.current?.close()
  }, [isModalOpen])

  useEffect(() => {
    const areAllInputsValid = Object.values(validFormInputs).every(
      (value) => typeof value === "boolean" && value === true
    )

    if (areAllInputsValid) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [formData, validFormInputs, isDisabled])

  function closeModalOnClickOutside(e: React.MouseEvent) {
    const dialogDimensions = modalRef.current?.getBoundingClientRect()
    if (
      dialogDimensions &&
      (e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom)
    ) {
      modalRef.current?.close()
      closePaymentModal()
    }
  }

  return (
    <dialog
      ref={modalRef}
      onClick={closeModalOnClickOutside}
      onCancel={closePaymentModal}
      className="w-96 flex flex-col bg-amber-100 dark:bg-slate-400 text-amber-950 dark:text-slate-950 font-sans p-4 sm:py-6 sm:px-8"
    >
      <button
        className="ml-auto bg-amber-50 dark:bg-slate-100 text-amber-950 dark:text-slate-950 border border-amber-950 dark:border-slate-950 hover:bg-gradient-to-r from-amber-950 to-amber-700 dark:from-slate-900 dark:to-slate-600 hover:text-amber-50 dark:hover:text-slate-50 py-1 px-3 rounded"
        onClick={closePaymentModal}
      >
        Close
      </button>
      <form method="dialog" className="flex flex-col bg-inherit">
        <Input />
        <div className="relative">
          {isDisabled && (
            <p className="absolute bottom-12 left-0 right-0 mx-auto max-w-max text-center bg-amber-700 dark:bg-slate-700 text-amber-50 dark:text-slate-50 text-sm font-semibold py-1 px-2 rounded">
              Please complete the form
            </p>
          )}
          <button
            type="submit"
            onClick={handleFormButtonClick}
            onKeyDown={handleFormButtonKeyPress}
            disabled={isDisabled}
            className="w-full mt-14 text-lg md:text-xl font-semibold tracking-widest p-1 border-2 border-amber-950 dark:border-slate-950 rounded-2xl disabled:bg-slate-300 disabled:border-slate-500 disabled:text-slate-500 dark:enabled:bg-slate-100 enabled:hover:bg-gradient-to-r enabled:focus:bg-gradient-to-r from-amber-950 dark:from-slate-950 to-amber-700 dark:to-slate-600 enabled:hover:text-amber-50 enabled:focus:text-amber-50 dark:enabled:hover:text-slate-50 dark:enabled:focus:text-slate-50"
          >
            Pay
          </button>
        </div>
      </form>
    </dialog>
  )
}

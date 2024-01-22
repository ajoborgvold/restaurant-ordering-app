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
      className="w-96 bg-amber-100 text-amber-950 text-xl py-6"
    >
      <form method="dialog" className="flex flex-col gap-12 p-8 bg-inherit">
        <Input />
        <button
          type="submit"
          onClick={handleFormButtonClick}
          onKeyDown={handleFormButtonKeyPress}
          disabled={isDisabled}
          className="text-lg md:text-xl p-1 border-2 border-amber-950 rounded-2xl disabled:bg-slate-300 disabled:border-slate-500 disabled:text-slate-500 enabled:hover:bg-gradient-to-r enabled:focus:bg-gradient-to-r from-amber-950 to-amber-700 enabled:hover:text-amber-50 enabled:focus:text-amber-50"
        >
          Pay
        </button>
      </form>
    </dialog>
  )
}

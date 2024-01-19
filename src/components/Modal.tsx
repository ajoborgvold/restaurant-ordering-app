import { useContext, useEffect, useRef } from "react"
import { AppContext } from "../context/AppContext"
import Input from "./Input"

export default function Modal(): JSX.Element {
  const { isModalOpen, closePaymentModal, validateFormFields } = useContext(AppContext)
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    isModalOpen ? modalRef.current?.showModal() : modalRef.current?.close()
  }, [isModalOpen])

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
      <form method="dialog" className="flex flex-col gap-8 p-8 bg-inherit">
        <Input />
        <button
          className="text-lg md:text-xl p-1  border-2 border-amber-950 rounded-2xl hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
          onClick={validateFormFields}
        >
          Pay
        </button>
      </form>
    </dialog>
  )
}

import { ButtonProps } from "../interfaces/interfaces";

export default function ButtonSmall({itemCountFunction, index, children}: ButtonProps): JSX.Element {
  return (
    <button
      className="flex justify-center items-center border-2 border-amber-950 rounded-xl py-1 px-2 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
      aria-label="Remove 1"
      onClick={() => itemCountFunction(index)}
    >
      {children}
    </button>
  )
}
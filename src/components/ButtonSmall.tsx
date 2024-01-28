import { ButtonProps } from "../interfaces/interfaces";

export default function ButtonSmall({handleClick, targetItem, children, aria}: ButtonProps): JSX.Element {
  return (
    <button
      className="flex justify-center items-center border-2 border-amber-950 dark:border-slate-300 rounded-xl py-1 px-2 hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 dark:from-slate-500 to-amber-700 dark:to-slate-300 hover:text-amber-50 focus:text-amber-50 dark:hover:text-slate-950 dark:focus:text-slate-950"
      aria-label={aria}
      onClick={() => handleClick(targetItem)}
    >
      {children}
    </button>
  )
}
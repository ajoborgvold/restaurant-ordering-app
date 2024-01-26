import { Link } from "react-router-dom";
import { LinkProps } from "../interfaces/interfaces";

export default function RouteLink({ path, children, onClick }: LinkProps): JSX.Element {
  return (
    <Link
      to={path}
      className="mt-8 sm:mt-12 text-xl sm:text-2xl md:text-3xl text-center p-2 sm:p-4 border-2 border-amber-950 dark:border-slate-300 rounded-2xl hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 dark:from-slate-500 to-amber-700 dark:to-slate-300 hover:text-amber-50 focus:text-amber-50 dark:hover:text-slate-950 dark:focus:text-slate-950"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
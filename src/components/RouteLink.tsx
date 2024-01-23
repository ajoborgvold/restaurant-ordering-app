import { Link } from "react-router-dom";
import { LinkProps } from "../interfaces/interfaces";

export default function RouteLink({ path, children, onClick }: LinkProps): JSX.Element {
  return (
    <Link
      to={path}
      className="mt-12 text-2xl md:text-3xl text-center p-4 border-2 border-amber-950 rounded-2xl hover:bg-gradient-to-r focus:bg-gradient-to-r from-amber-950 to-amber-700 hover:text-amber-50 focus:text-amber-50"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
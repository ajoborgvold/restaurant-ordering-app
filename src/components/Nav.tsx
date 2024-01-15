import { NavLink } from "react-router-dom"

export default function Nav(): JSX.Element {
  const navItems = [
    {
      name: "Menu",
      path: "/",
    },
    {
      name: "Order",
      path: "/order",
    },
  ]

  return (
    <nav>
      <ul className="flex gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

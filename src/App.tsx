// import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Menu from "./routes/Menu"
import Order from "./routes/Order"

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Menu />
        },
        {
          path: "order",
          element: <Order />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App

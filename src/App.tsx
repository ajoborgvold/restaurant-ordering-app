// import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppContextProvider } from "./context/AppContext"
import Layout from "./components/Layout"
import Menu from "./routes/Menu"
import Order from "./routes/Order"
import Error from "./routes/Error"

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
    },
    {
      path: "*",
      element: <Error />
    }
  ])

  return (
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  )
}

export default App

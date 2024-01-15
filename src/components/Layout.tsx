import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(): JSX.Element {
  return (
    <div className="min-h-full flex flex-col justify-between flex-1">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
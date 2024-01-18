import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="min-h-screen flex flex-col bg-amber-50 text-amber-950 font-smythe tracking-wide">
      <App />
    </div>
  </React.StrictMode>
)

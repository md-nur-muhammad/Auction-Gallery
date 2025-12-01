
import { Toaster } from "react-hot-toast"
import Home from "./components/Home/Home"

export default function App() {
  return (
    <div>
      <Home></Home>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

import { Outlet } from "react-router-dom";
import Footer from "./component/Footer"
import BeautifulNavbar from "./component/Navbar"

const App = () => {
  return (
    <div>
      <BeautifulNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App


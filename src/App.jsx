import { Outlet } from "react-router-dom";
import Footer from "./component/Footer"
import BeautifulNavbar from "./component/Navbar"
import ScrollToTop from "./component/ScrollToTop";

const App = () => {
  return (
    <div>
      <ScrollToTop />
      <BeautifulNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App


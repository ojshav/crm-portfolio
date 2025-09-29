import { Outlet } from "react-router-dom";
import Footer from "./component/Footer"
import BeautifulNavbar from "./component/Navbar"
import ScrollToTop from "./component/ScrollToTop";
import ChatbotUI from "./component/ChatbotUI";

const App = () => {
  return (
    <div>
      <ChatbotUI />
      <ScrollToTop />
      <BeautifulNavbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App


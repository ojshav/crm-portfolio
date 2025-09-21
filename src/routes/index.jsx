import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "@/pages/Services/Services";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Contact from "@/pages/Contact/Contact";
import PricingSection from "@/pages/Pricing/PricingSection";
import Emailautomation from "@/pages/Emailautomation/Email";
import BookAppointment from "@/pages/BookAppointment/BookAppointment";
import Chatbot from "@/pages/Chatbot/Chatbot";
import Helpdesk from "@/pages/HelpDesk/Helpdesk";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "pricing",
        element: <PricingSection />
      } ,
      {
        path: "email-automation",
        element: <Emailautomation />
      },
      {
        path: "book-appointment",
        element: <BookAppointment />
      },
      {
        path: "chat-bot",
        element: <Chatbot />

      },
      {
        path: "help-desk",
        element: <Helpdesk />

      }
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "@/pages/Services/Services";
import Portfolio from "@/pages/Portfolio/Portfolio";
import Contact from "@/pages/Contact/Contact";


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
      }
    ],
  },
]);

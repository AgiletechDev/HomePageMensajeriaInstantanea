import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Donate from "../pages/Donate";
import Careers from "../pages/Careers";
import Developers from "../pages/Developers";
import Blog from "../pages/Blog";
import Help from "../pages/Help";
import GetMessenger from "../pages/GetMessenger";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/getmessenger",
        element: <GetMessenger />,
      },

      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "/careers",
        element: <Careers />,
      },
      {
        path: "/donate",
        element: <Donate />,
      },
    ],
  },
]);

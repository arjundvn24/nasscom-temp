import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Result from "./routes/Result";
import Working from "./routes/working";
import Landing from "./routes/Landing"
import Home1 from "./routes/Home1"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path:"/",
        element:<Landing/>
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path:"/Home1",
        element:<Home1/>

      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/working",
        element: <Working />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

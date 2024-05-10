import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import {Home,Contactus,Aboutus} from "./components/index.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"aboutus",
        element:<Aboutus/>
      },
      {
        path:"contactus",
        element:<Contactus/>
      },
      {
        path:"academics",
        element:<Home/>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

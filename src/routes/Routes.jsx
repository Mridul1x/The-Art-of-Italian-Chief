import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ChefCards from "../chefSection/ChefCards/ChefCards";
import Blog from "../component/Blog/Blog";
import LoginLayout from "../layout/LoginLayout";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import About from "../component/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ChefCards></ChefCards>,
      }
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;

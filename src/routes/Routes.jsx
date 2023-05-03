import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../component/Blog/Blog";
import LoginLayout from "../layout/LoginLayout";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import About from "../component/About/About";
import ChefCards from "../chefSection/ChefCards/ChefCards";
import ViewChefDetails from "../chefSection/ViewChefDetails/ViewChefDetails";
import ChefLayout from "../layout/chefLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <ChefCards></ChefCards>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
    ],
  },
  {
    path: "chef",
    element: <ChefLayout></ChefLayout>,
    children: [
      {
        path: ":id",
        element: <ViewChefDetails></ViewChefDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
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

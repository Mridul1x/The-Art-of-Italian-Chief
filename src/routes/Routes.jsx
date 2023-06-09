import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../component/Blog/Blog";
import LoginLayout from "../layout/LoginLayout";
import Login from "../component/Login/Login";
import Register from "../component/Register/Register";
import About from "../component/About/About";
import ChefCards from "../chefSection/ChefCards/ChefCards";
import ViewChefDetails from "../chefSection/ViewChefDetails/ViewChefDetails";
import ChefLayout from "../layout/chefLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Navigate to="/home"></Navigate>,
      },
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
  {
    path: "/home",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <ChefCards></ChefCards>,
        loader: () => fetch("https://assignment-server-one.vercel.app/chef"),
      },
    ],
  },
  {
    path: "chef",
    element: (
      <PrivateRoute>
        <ChefLayout></ChefLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ViewChefDetails></ViewChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-server-one.vercel.app/chef/${params.id}`),
      },
    ],
  },
]);

export default router;

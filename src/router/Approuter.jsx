import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import PublicRoute from "../Layouts/PublicRoute";
import Register from "../components/Register";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";

const Approuter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approuter;

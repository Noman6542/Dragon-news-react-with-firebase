import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoreNews from "../Components/CategoreNews";
import AuthLayouts from "../Layouts/AuthLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/categores/:id",
        Component: CategoreNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children:[
      {
        path:'/auth/login',
        Component:Login
      },
      {
        path:'/auth/register',
        Component:Register
      }
    ]
  },
]);
export default router;

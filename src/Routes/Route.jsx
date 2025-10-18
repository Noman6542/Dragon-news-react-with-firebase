import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import CategoreNews from '../Components/CategoreNews';

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
      {
        path:'/',
        Component:Home

      },
      {
          path:'/categores/:id',
          Component:CategoreNews,
          loader:()=>fetch('/news.json')
      }
    ]
  },
]);
export default router;
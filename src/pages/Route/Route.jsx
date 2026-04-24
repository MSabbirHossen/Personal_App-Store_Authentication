import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../../components/Root/Root";
import Home from "../../components/Home/Home";
import Error404 from "../Error/Error404";
import AllApps from "../AllApps/AllApps";
import AppDetails from "../AppDetails/AppDetails";
import Installation from "../Installation/Installation";
import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";
import Profile from "../../components/Profile/Profile";
import PrivateRoute from "../../Provider/PrivateRoute";
import Developer from "../../components/Developer/Developer";

const appsLoader = async () => {
  try {
    const response = await fetch("/appsData.json");
    if (!response.ok) {
      throw new Error("Failed to fetch apps data");
    }
    return await response.json();
  } catch (error) {
    console.error("Loader error:", error);
    throw error;
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        loader: appsLoader,
        Component: Home,
      },
      {
        path: "/apps",
        loader: appsLoader,
        Component: AllApps,
      },
      {
        path: "/apps/:id",
        loader: appsLoader,
        element: <PrivateRoute><AppDetails/></PrivateRoute>
      },
      {
        path: "/installation",
        loader: appsLoader,
        element: <PrivateRoute><Installation/></PrivateRoute>
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/profile",
        // loader: profileLoader,
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: "/developer",
        element: <PrivateRoute><Developer/></PrivateRoute>
      }
    ],
  },
]);

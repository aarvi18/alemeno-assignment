import { createBrowserRouter } from "react-router-dom";

import Layout from "./assets/Layout";
import Course from "./pages/CourseItemPages";
import Dashboard from "./pages/Dashboard";


export const ROOT = "/";
export const COURSE = "/Course";
export const COURSEDETAILS = "/details";
export const DASHBOARD = "/Dashboard";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: ROOT,
        element: <Course />,
      },
      {
        path: COURSE,
        element: <Course />,
      },
      
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
    ],
  },
]);

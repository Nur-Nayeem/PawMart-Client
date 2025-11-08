import { createBrowserRouter } from "react-router";
import MainLayout from "../Layoutes/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: <MainLayout />,
    children: [
      {
        index: true,
        Component: <Home />,
      },
    ],
  },
]);

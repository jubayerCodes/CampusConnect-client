import { createBrowserRouter, Outlet } from "react-router";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Colleges from "../../Pages/Colleges/Colleges";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      }
    ],
  },
]);

export default router;

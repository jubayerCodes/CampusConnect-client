import { createBrowserRouter, Outlet } from "react-router";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Colleges from "../../Pages/Colleges/Colleges";
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import CollegeDetails from "../../Pages/CollegeDetails/CollegeDetails";
import Admission from "../../Pages/Admission/Admission";
import BookAdmission from "../../Pages/BookAdmission/BookAdmission";
import MyCollege from "../../Pages/MyCollege/MyCollege";
import PrivateRoute from "../../Routes/PrivateRoute";

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
        path: "/admission",
        element: <Admission />
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/my-college",
        element: <PrivateRoute><MyCollege /></PrivateRoute>
      },
      {
        path: "/colleges/:id",
        element: <CollegeDetails />,
        loader: async ({ params }) => fetch(`${import.meta.env.VITE_API}/colleges/${params.id}`)
      },
      {
        path: "/admission/:id",
        element: <BookAdmission />
      }
    ],
  },
]);

export default router;

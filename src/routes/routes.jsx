import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import AllProducts from "../components/Dashboard/AllProducts";
import AddProduct from "../components/Dashboard/AddProduct";
import Register from "../pages/Register";
import UserDetails from "../components/UserDetails";
import PrivateRoute from "./private/PrivateRoute";
import SingleProductCardDash from "../components/Dashboard/SingleProductCardDash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <UserDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      { path: "/dashboard/allProducts", element: <AllProducts /> },
      {
        path: "/dashboard/productDetails/:id",
        element: <SingleProductCardDash />,
      },
      { path: "/dashboard/addProduct", element: <AddProduct /> },
    ],
  },
]);

export default router;

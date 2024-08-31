import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/index.jsx";
import DashboardLayout from "./components/dashboardLayout/index.jsx";
import Dashboard from "./pages/dashboard/index.jsx";
import Help from "./pages/help/index.jsx";
import Edit from "./pages/edit/index.jsx";
import AirtimeToCash from "./pages/cash/index.jsx";
import TransactionHistory from "./pages/history/index.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "/dashboard/_", element: <Dashboard /> },
      { path: "/dashboard/_/edit", element: <Edit /> },
      { path: "/dashboard/airtime-to-cash", element: <AirtimeToCash /> },
      { path: "/dashboard/history", element: <TransactionHistory /> },
      { path: "/dashboard/help", element: <Help /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

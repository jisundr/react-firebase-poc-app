import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../components/AuthGuard";

import ROUTES from "../constants/routes";
import Login from "./auth/login/Login";
import Register from "./auth/register/Register";
import ResetPassword from "./auth/resetPassword/ResetPassword";
import Dashboard from "./dashboard/Dashboard";
import RootRoute from "./root/RootRoute";

const createRouter = () => {
  return createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <RootRoute />,
      children: [
        {
          path: ROUTES.LOGIN,

          element: (
            <AuthGuard isGuest>
              <Login />
            </AuthGuard>
          ),
        },
        {
          path: ROUTES.REGISTER,
          element: (
            <AuthGuard isGuest>
              <Register />
            </AuthGuard>
          ),
        },
        {
          path: ROUTES.RESET_PASSWORD,
          element: (
            <AuthGuard isGuest>
              <ResetPassword />
            </AuthGuard>
          ),
        },
        {
          path: ROUTES.DASHBOARD,
          element: (
            <AuthGuard>
              <Dashboard />
            </AuthGuard>
          ),
        },
      ],
    },
  ]);
};

export default createRouter;

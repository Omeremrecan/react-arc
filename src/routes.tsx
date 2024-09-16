import MainLayout from "pages/layouts/main/MainLayout";
import SecurityLayout from "pages/layouts/security/SecurityLayout";
import HomePage from "pages/main/home/HomePage";
import ProfilePage from "pages/main/profile/ProfilePage";
import LoginPage from "pages/security/login/LoginPage";
import RegisterPage from "pages/security/register/RegisterPage";
import { useRoutes } from "react-router-dom";

export default () => useRoutes([
  {
    path: "/auth/",
    element: <SecurityLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

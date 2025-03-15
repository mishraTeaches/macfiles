import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import SignUp from "./components/singup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

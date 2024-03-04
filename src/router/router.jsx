import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Login from "../page/Login";
import Register from "../page/Register";
import Inbox from "../page/Inbox";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/inbox",
        element: <Inbox />,
      },
    ],
  },
]);

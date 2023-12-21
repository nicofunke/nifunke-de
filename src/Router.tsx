import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/home/Home.page";
import ImprintPage from "./pages/Imprint.page";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "imprint",
        element: <ImprintPage />,
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;

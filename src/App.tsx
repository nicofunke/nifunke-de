import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.scss";
import "./Flies.sass";
import "./ImageFont.scss";
import "./Waves.scss";
import HomePage from "./pages/Home.page";
import Footer from "./sections/Footer";
import ImprintPage from "./pages/Imprint.page";

function App() {
  return <RouterProvider router={router} />;
}

const Root = () => {
  return (
    <ParallaxProvider>
      <div id="app">
        <Outlet />
      </div>
      <Footer />
    </ParallaxProvider>
  );
};

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

export default App;

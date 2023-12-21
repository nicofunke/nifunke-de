import { Outlet } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import CustomThemeProvider from "./ThemeProvider";
import Footer from "./layout/Footer";

const Root = () => {
  return (
    <CustomThemeProvider>
      <ParallaxProvider>
        <div>
          <Outlet />
        </div>
        <Footer />
      </ParallaxProvider>
    </CustomThemeProvider>
  );
};

export default Root;

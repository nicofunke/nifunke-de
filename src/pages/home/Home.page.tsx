import { useMediaQuery, useTheme } from "@mui/material";
import Header from "./Header";
import { MouseFriend } from "../../components/mouseFriend/Mousefriend";
import ContactSection from "./Contact";
import Introduction from "./Introduction";
import Fireflies from "../../components/fireflies/Fireflies";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id="home-page">
      <Fireflies />
      {!isSmallScreen && <MouseFriend />}
      <Header />
      <Introduction />
      <ContactSection />
    </div>
  );
};

export default HomePage;

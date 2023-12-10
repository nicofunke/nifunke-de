import Header from "../Header";
import { BgContainer } from "../Layout";
import { MouseFriend } from "../mouseFriend/Mousefriend";
import ContactSection from "../sections/Contact";
import Introduction from "../sections/Introduction";
import { useMediaQuery, useTheme } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id="home-page">
      {!isSmallScreen && <MouseFriend />}
      <Header />
      <BgContainer>
        <Introduction />
        <ContactSection />
      </BgContainer>
    </div>
  );
};

export default HomePage;

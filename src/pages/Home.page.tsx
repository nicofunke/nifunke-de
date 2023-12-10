import Header from "../Header";
import { BgContainer } from "../Layout";
import { MouseFriend } from "../mouseFriend/Mousefriend";
import ContactSection from "../sections/Contact";
import Introduction from "../sections/Introduction";
import { useMediaQuery, useTheme } from "@mui/material";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const numberOfFireFlies = isSmallScreen ? 10 : 20;

  return (
    <div id="home-page">
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100vw",
          pointerEvents: "none",
        }}
      >
        {Array.apply(null, Array(numberOfFireFlies)).map((_, index) => (
          <div className="firefly" key={index} />
        ))}
      </div>
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

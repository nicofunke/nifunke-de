import { Fade, Grow, useMediaQuery, useTheme } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { MouseFriend } from "./mouseFriend/Mousefriend";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const numberOfFireFlies = isSmallScreen ? 10 : 20;
  return (
    <header style={{ zIndex: 34 }} id="header">
      {!isSmallScreen && <MouseFriend />}
      <section style={{ minHeight: "100vh" }}>
        <div className="text-container">
          <Fade in timeout={1000}>
            <div style={{ fontSize: "2rem" }}>Hello there, I'm</div>
          </Fade>
          <Parallax speed={-15}>
            <Grow in timeout={2000}>
              <h1>Nico Funke</h1>
            </Grow>
          </Parallax>
          {Array.apply(null, Array(numberOfFireFlies)).map((_, index) => (
            <div className="firefly" key={index} />
          ))}
        </div>
        <div className="air air1"></div>
        <div className="air air2"></div>
        <div className="air air3"></div>
        <div className="air air4"></div>
      </section>
    </header>
  );
};

export default Header;

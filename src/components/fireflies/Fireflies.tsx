import { styled, useMediaQuery, useTheme } from "@mui/material";
import "./Fireflies.sass";

const FixedFullscreen = styled("div")(() => ({
  position: "fixed",
  height: "100vh",
  width: "100vw",
  pointerEvents: "none",
}));

const Fireflies = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const numberOfFireFlies = isSmallScreen ? 10 : 20;

  return (
    <FixedFullscreen>
      {Array.apply(null, Array(numberOfFireFlies)).map((_, index) => (
        <div className="firefly" key={index} />
      ))}
    </FixedFullscreen>
  );
};

export default Fireflies;

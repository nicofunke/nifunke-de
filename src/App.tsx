import { Box, Collapse, Fade, Grow, Paper, Slide, Stack } from "@mui/material";
import "./App.scss";
import "./Flies.sass";
import "./ImageFont.scss";
import "./Waves.scss";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { RotatingImage } from "./rotatingImage/RotatingImage";
import { MouseFriend } from "./mouseFriend/Mousefriend";
import { MarkedText } from "./markedText/MarkedText";

function App() {
  return (
    <div className="App">
      <header id="app-header" style={{ zIndex: 34 }}>
        <MouseFriend />
        <section>
          <div className="text-container">
            <Fade in timeout={1000}>
              <div style={{ fontSize: "2rem" }}>Hello there, I'm</div>
            </Fade>
            <Grow in timeout={2000}>
              <h1>Nico Funke</h1>
            </Grow>
            {Array.apply(null, Array(35)).map((_, index) => (
              <div className="firefly" key={index} />
            ))}
          </div>
          <div className="air air1"></div>
          <div className="air air2"></div>
          <div className="air air3"></div>
          <div className="air air4"></div>
        </section>
      </header>
      <Stack
        id="app-section-1"
        style={{
          minHeight: "100vh",
          // width: "100vw",
          color: "var(--color-3)",
          background: "linear-gradient(#a1969a, var(--color-4))",
        }}
        direction={{ xs: "column", lg: "row" }}
        justifyContent={"space-evenly"}
        alignItems={{ xs: "center", lg: "center" }}
        p={2}
      >
        <Box className="font-display-2" maxWidth={800}>
          <p>
            I am an experienced <MarkedText>software developer</MarkedText> with
            a focus on <MarkedText variant="gray">front-end </MarkedText>{" "}
            development and a passion for{" "}
            <MarkedText variant="pink">UI/UX.</MarkedText>
          </p>
        </Box>
        <RotatingImage />
      </Stack>
    </div>
  );
}

export default App;

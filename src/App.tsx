import {
  Box,
  Collapse,
  Fade,
  Grow,
  IconButton,
  Paper,
  Stack,
} from "@mui/material";
import "./App.scss";
import "./Flies.sass";
import "./ImageFont.scss";
import "./Waves.scss";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { RotatingImage } from "./rotatingImage/RotatingImage";
import { MouseFriend } from "./mouseFriend/Mousefriend";
import { MarkedText } from "./markedText/MarkedText";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
  useParallax,
} from "react-scroll-parallax";
import darkWave from "./wave-dark.png";
import mainImg from "./main.png";
import profile from "./assets/profile.png";
import { CustomizedTimeline } from "./CustomizedTimeline";
import { Bounce, Fade as RevealFade, Slide } from "react-awesome-reveal";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <header id="app-header" style={{ zIndex: 34 }}>
          <MouseFriend />
          <section>
            <div className="text-container">
              <Fade in timeout={1000}>
                <div style={{ fontSize: "2rem" }}>Hello there, I'm</div>
              </Fade>
              <Parallax speed={-15}>
                <Grow in timeout={2000}>
                  <h1>Nico Funke</h1>
                </Grow>
              </Parallax>
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
            color: "var(--color-3)",
            background: "linear-gradient(#a1969a, var(--color-4))",
          }}
          minHeight="100vh"
          direction={{ xs: "column", lg: "row" }}
          justifyContent={"space-evenly"}
          alignItems={{ xs: "center", lg: "center" }}
          p={2}
        >
          <Box className="font-display-2" maxWidth={800}>
            <p>
              I am an experienced <MarkedText>software developer</MarkedText>{" "}
              with a focus on <MarkedText variant="gray">front-end </MarkedText>{" "}
              development and a passion for{" "}
              <MarkedText variant="pink">UI/UX.</MarkedText>
            </p>
          </Box>
          {/* <RotatingImage /> */}
          <ProfilePicture />
        </Stack>
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

const ProfilePicture = () => {
  return (
    <RevealFade direction="down" triggerOnce delay={300}>
      <Box
        bgcolor="var(--color-3)"
        border="2px solid var(--color-1)"
        borderRadius={4}
        width={300}
        height={400}
        color="white"
        sx={{
          filter: "grayscale(0.5)",
          background: `url(${profile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: "4px 4px 8px black",
        }}
      />
    </RevealFade>
  );
};

function AboutMe() {
  return (
    <>
      <ParallaxBanner
        style={{ height: "500px" }}
        layers={[{ image: mainImg, speed: -20 }]}
      >
        <Stack
          sx={{
            position: "absolute",
          }}
          px={8}
          justifyContent="center"
          className="something"
        >
          <h1>ABOUT ME</h1>
          <img src={darkWave} alt="Logo" />
        </Stack>
      </ParallaxBanner>
      {/* <Box width="100%" sx={{ backgroundImage: `url(${darkWave})` }} /> */}
      <Stack
        sx={{
          backgroundColor: "var(--color-3)",
          width: "100%",
        }}
        py={8}
        alignItems="center"
        justifyContent="center"
      >
        <CustomizedTimeline />
      </Stack>
    </>
  );
}

const Footer = () => {
  return (
    <Box height={200} component="footer" p={8}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="end"
        height="100%"
      >
        <Box>Imprint</Box>
      </Stack>
    </Box>
  );
};

const Contact = () => {
  return (
    <ParallaxBanner
      style={{ height: "500px" }}
      layers={[{ image: mainImg, speed: -20 }]}
    >
      <ContactBox />
    </ParallaxBanner>
  );
};

const ContactBox = () => {
  return (
    <Stack alignItems="center" py={8}>
      <Box
        sx={{
          background: "linear-gradient(#a1969a, var(--color-4))",
          position: "absolute",
        }}
        py={4}
        px={24}
        mt={0}
        color="black"
        borderRadius={2}
        width={300}
      >
        <Stack direction="row" justifyContent="center" spacing={4} my={8}>
          <h1>Contact me!</h1>
        </Stack>
        <Stack direction="row" justifyContent="center" spacing={4} my={8}>
          <Bounce triggerOnce cascade damping={0.3}>
            <IconButton
              color="inherit"
              href={"https://www.linkedin.com/in/nicofunke/"}
              target="_blank"
            >
              <LinkedInIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
              color="inherit"
              href={"https://github.com/nicofunke"}
              target="_blank"
            >
              <GitHubIcon sx={{ fontSize: 60 }} />
            </IconButton>
            <IconButton
              color="inherit"
              href={"mailto:contact@nifunke.de"}
              target="_blank"
            >
              <EmailIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Bounce>
        </Stack>
      </Box>
    </Stack>
  );
};
export default App;

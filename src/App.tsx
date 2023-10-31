import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Fade,
  Grow,
  IconButton,
  Stack
} from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider
} from "react-scroll-parallax";
import "./App.scss";
import { CustomizedTimeline } from "./CustomizedTimeline";
import "./Flies.sass";
import "./ImageFont.scss";
import "./Waves.scss";
import mainImg from "./main.png";
import { MouseFriend } from "./mouseFriend/Mousefriend";
import darkWave from "./wave-dark.png";
import Introduction from "./Introduction";
import Header from "./Header";
import { PropsWithChildren } from "react";

const ContentContainer = ({ children }: PropsWithChildren) => {
  return <Box
    sx={{
      padding: 2,
      color: "var(--color-3)",
      background: "linear-gradient(#a1969a, var(--color-4))",
    }}
  >
    {children}
  </Box>
}

function App() {
  return (
    <ParallaxProvider>
      <div id="app">
        <MouseFriend />
        <Header />
        <ContentContainer>
          <Introduction />
          <h2 style={{ color: "var(--color-2)", textAlign: "right" }}>Contact me!</h2>
          <ContactBox />
        </ContentContainer>
      </div>
      <Box bgcolor="white">

        <Footer />
      </Box>
    </ParallaxProvider>
  );
}


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
    <Box height={200} p={8} width="100%" mb={5} mt={5} sx={{ backgroundColor: "var(--color-3)" }}>
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

const ContactBox = () => {
  return (
    <Stack alignItems="center" py={8}>
      <Box
        sx={{
          background: "rgba(255,255,255, 0.8)",
          // position: "absolute",
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

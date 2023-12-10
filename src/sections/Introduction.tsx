import { Stack, Box, Typography } from "@mui/material";
import { MarkedText } from "../markedText/MarkedText";
import profile from "../assets/profile.png";
import { Fade } from "react-awesome-reveal";
import { PropsWithChildren } from "react";
import { Section } from "../Layout";

const MainRow = ({ children }: PropsWithChildren) => (
  <Stack
    direction={{ xs: "column", lg: "row" }}
    justifyContent={"space-evenly"}
    alignItems={{ xs: "center", lg: "center" }}
  >
    {children}
  </Stack>
);

const Introduction = () => {
  return (
    <Section>
      <Box>
        <Box alignSelf="start">
          <h2>
            <span
              style={{
                WebkitTextStroke: "2px var(--color-4)",
                color: "var(--color-3)",
                display: "inline-block",
              }}
            >
              About{" "}
            </span>
            <span
              style={{
                display: "inline-block",
                marginLeft: "1rem",
              }}
            >
              {" "}
              Me
            </span>
          </h2>
        </Box>
        <MainRow>
          <Description />
          <ProfilePicture />
        </MainRow>
      </Box>
    </Section>
  );
};

const Description = () => {
  return (
    <Box className="font-display-2" maxWidth={800}>
      <p>
        I am an experienced <MarkedText>software developer</MarkedText> with a
        focus on <MarkedText variant="gray">front-end </MarkedText> development
        and a passion for <MarkedText variant="pink">UI/UX.</MarkedText>
      </p>
    </Box>
  );
};

const ProfilePicture = () => {
  return (
    <Fade direction="down" triggerOnce delay={300}>
      <Box
        bgcolor="var(--color-3)"
        border="2px solid var(--color-4)"
        borderRadius={1}
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
    </Fade>
  );
};

export default Introduction;

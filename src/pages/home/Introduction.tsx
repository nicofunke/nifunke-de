import { Box, Stack, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import { Container } from "../../layout/Container";
import profile from "../../assets/profile.png";
import { MarkedText } from "../../components/markedText/MarkedText";

const Introduction = () => {
  return (
    <Container horizontallyCentered limitedWidth fullHeight>
      <Title />
      <Content />
    </Container>
  );
};

const Title = () => {
  return (
    <Typography
      component="h2"
      fontSize="min(max(12vw, 64px), 80px)"
      fontWeight={900}
      textTransform="uppercase"
    >
      <Box
        sx={({ palette }) => ({
          WebkitTextStroke: `2px ${palette.salmon.main}`,
          color: palette.background.default,
          display: "inline-block",
        })}
      >
        About{" "}
      </Box>
      <span
        style={{
          display: "inline-block",
          marginLeft: "1rem",
        }}
      >
        {" "}
        Me
      </span>
    </Typography>
  );
};

const Content = () => {
  return (
    <Stack
      spacing={8}
      direction={{ xs: "column", lg: "row" }}
      justifyContent={"space-evenly"}
      alignItems={{ xs: "center", lg: "center" }}
    >
      <Description />
      <ProfilePicture />
    </Stack>
  );
};

const Description = () => {
  return (
    <Typography
      fontSize="min(max(6vw, 32px), 56px)"
      fontWeight="700"
      maxWidth={800}
      lineHeight={1.125}
    >
      I am an experienced <MarkedText>software developer</MarkedText> with a
      focus on <MarkedText variant="gray">front-end </MarkedText> development
      and a passion for <MarkedText variant="pink">UI/UX.</MarkedText>
    </Typography>
  );
};

const ProfilePicture = () => {
  return (
    <Fade direction="down" triggerOnce delay={300}>
      <Box
        borderRadius={1}
        width={{ lg: 300, xs: 225 }}
        height={{ lg: 400, xs: 300 }}
        sx={({ palette }) => ({
          borderRadius: 1,
          border: `2px solid ${palette.salmon.main}`,
          filter: "grayscale(0.5)",
          background: `url(${profile})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          boxShadow: "4px 4px 8px black",
        })}
      />
    </Fade>
  );
};

export default Introduction;

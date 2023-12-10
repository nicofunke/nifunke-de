import { Stack, Box, IconButton, styled } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Section } from "../Layout";

const ContactBox = () => {
  return (
    <Stack direction="row" justifyContent="center" spacing={4} my={8}>
      <Bounce triggerOnce cascade damping={0.3}>
        <IconButton
          color="inherit"
          href={"https://www.linkedin.com/in/nicofunke/"}
          target="_blank"
        >
          <LinkedInIcon sx={{ fontSize: 56 }} />
        </IconButton>
        <IconButton
          color="inherit"
          href={"https://github.com/nicofunke"}
          target="_blank"
        >
          <GitHubIcon sx={{ fontSize: 56 }} />
        </IconButton>
        <IconButton
          color="inherit"
          href={"mailto:contact@nifunke.de"}
          target="_blank"
        >
          <EmailIcon sx={{ fontSize: 56 }} />
        </IconButton>
      </Bounce>
    </Stack>
  );
};

const MainRow = styled(Stack)(() => ({
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
}));

const ContactSection = () => {
  return (
    <Section>
      <MainRow>
        <h2 style={{ color: "var(--color-2)", textAlign: "center" }}>
          Contact
        </h2>
        <ContactBox />
      </MainRow>
    </Section>
  );
};

export default ContactSection;

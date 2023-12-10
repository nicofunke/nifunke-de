import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import { Section } from "../Layout";
import WavingHandIcon from "@mui/icons-material/WavingHand";

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

const ContactSection = () => {
  return (
    <Section>
      <Stack
        direction="row"
        alignItems="stretch"
        bgcolor="var(--color-3)"
        border="1px solid white"
        color="var(--color-4)"
        height="64px"
        borderRadius="4px"
      >
        <Stack
          height="64px"
          width="64px"
          alignItems="center"
          justifyContent="center"
          color="var(--color-2)"
        >
          <WavingHandIcon />
        </Stack>
        <Typography alignSelf="center" paddingRight={16}>
          Contact me
        </Typography>
        <Stack direction="row" alignItems="center">
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "var(--color-4)" }}
          />
          <IconButton
            color="inherit"
            href={"https://www.linkedin.com/in/nicofunke/"}
            target="_blank"
            sx={{
              height: "64px",
              width: "64px",
            }}
          >
            <LinkedInIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "var(--color-4)" }}
          />
          <IconButton
            color="inherit"
            href={"https://github.com/nicofunke"}
            target="_blank"
            sx={{
              height: "64px",
              width: "64px",
            }}
          >
            <GitHubIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ bgcolor: "var(--color-4)" }}
          />
          <IconButton
            color="inherit"
            href={"mailto:contact@nifunke.de"}
            target="_blank"
            sx={{
              height: "64px",
              width: "64px",
            }}
          >
            <EmailIcon sx={{ fontSize: "2rem" }} />
          </IconButton>
        </Stack>
      </Stack>
      {/* <h2 style={{ color: "var(--color-2)", textAlign: "center" }}>Contact</h2>
      <ContactBox /> */}
    </Section>
  );
};

export default ContactSection;

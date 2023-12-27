import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { Bounce } from "react-awesome-reveal";
import { Container } from "../../layout/Container";

const ContactBar = ({ children }: PropsWithChildren) => (
  <Stack
    direction={"row"}
    alignItems="stretch"
    width={{ xs: "100%", sm: "auto" }}
    minHeight="64px"
    maxWidth="400px"
    sx={{
      backgroundColor: "rgba(255,255,255,0.05)",
      backdropFilter: "blur(30px)",
      border: "2px solid rgba(255,255,255,0.03)",
      borderRadius: "4px",
    }}
  >
    {children}
  </Stack>
);

const ContactDivider = () => (
  <Divider
    orientation="vertical"
    flexItem
    sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
  />
);

const ContactButton = ({
  href,
  children,
}: PropsWithChildren<{ href: string }>) => (
  <Button
    color="inherit"
    href={href}
    target="_blank"
    sx={{
      height: "64px",
      width: "64px",
      fontSize: "2rem",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "rgba(200, 157, 184, 0.1)",
        transition: "background 0.3s ease",
      },
    }}
  >
    {children}
  </Button>
);

const ContactSection = () => {
  return (
    <Container limitedWidth horizontallyCentered>
      <Bounce triggerOnce>
        <ContactBar>
          <Typography alignSelf="center" minWidth="140px" paddingX={2}>
            Contact me
          </Typography>
          <Stack direction="row" alignItems="center">
            <ContactDivider />
            <ContactButton href="https://www.linkedin.com/in/nicofunke/">
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </ContactButton>
            <ContactDivider />
            <ContactButton href={"https://github.com/nicofunke"}>
              <GitHubIcon sx={{ fontSize: "2rem" }} />
            </ContactButton>
            <ContactDivider />
            <ContactButton href={"mailto:contact@nifunke.de"}>
              <EmailIcon sx={{ fontSize: "2rem" }} />
            </ContactButton>
          </Stack>
        </ContactBar>
      </Bounce>
    </Container>
  );
};

export default ContactSection;

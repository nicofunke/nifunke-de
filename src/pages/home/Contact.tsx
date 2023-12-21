import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { Bounce } from "react-awesome-reveal";
import { Container } from "../../layout/Container";

const ContactSection = () => {
  return (
    <Container limitedWidth horizontallyCentered>
      <Bounce triggerOnce>
        <Stack
          direction={"row"}
          alignItems="stretch"
          bgcolor="rgba(255,255,255,0.05)"
          width={{ xs: "100%", sm: "auto" }}
          minHeight="64px"
          borderRadius="4px"
          maxWidth="400px"
        >
          <Typography alignSelf="center" minWidth="140px" paddingX={2}>
            Contact me
          </Typography>
          <Stack direction="row" alignItems="center">
            <Divider
              orientation="vertical"
              flexItem
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
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
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
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
              sx={{ bgcolor: "rgba(255,255,255,0.1)" }}
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
      </Bounce>
    </Container>
  );
};

export default ContactSection;
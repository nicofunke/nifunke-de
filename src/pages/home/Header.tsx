import { Fade, Grow, Typography } from "@mui/material";
import { Parallax } from "react-scroll-parallax";
import { Container } from "../../layout/Container";
import ImageFont from "../../components/imageFont/ImageFont";

const Header = () => {
  return (
    <header>
      <Container fullHeight verticallyCentered horizontallyCentered>
        <Fade in timeout={1000}>
          <Typography fontSize="2rem" textAlign="center">
            Hello there, I'm
          </Typography>
        </Fade>
        <Parallax speed={-5}>
          <Grow in timeout={2000}>
            <div>
              <ImageFont>Nico Funke</ImageFont>
            </div>
          </Grow>
        </Parallax>
      </Container>
    </header>
  );
};

export default Header;

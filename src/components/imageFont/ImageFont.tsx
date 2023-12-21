import { styled } from "@mui/material";
import backgroundImage from "../../assets/main.png";

const ImageFont = styled("h1")(({ theme }) => ({
  margin: "0 1rem",
  fontSize: "6rem",
  textTransform: "uppercase",
  fontWeight: "900",
  WebkitTextStroke: `1px ${theme.palette.salmon.main}`,

  color: "rgba(225, 225, 225, 0.01)",
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "repeat",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  animation: "animate 50s linear infinite",
  textAlign: "center",
  "@keyframes animate": {
    "0%,100%": {
      backgroundPosition: "left top",
    },
    "50%": {
      backgroundPosition: "right bottom",
    },
  },
}));

export default ImageFont;

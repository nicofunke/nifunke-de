import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      height={100}
      p={8}
      mt={10}
      sx={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0), var(--color-5));",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="end"
        height="100%"
      >
        <Stack direction="row" spacing={2}>
          <Link to="/imprint">Imprint</Link>
          <Link to="/">Home</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;

import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      height={200}
      p={8}
      mb={5}
      mt={5}
      sx={{ backgroundColor: "var(--color-3)" }}
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

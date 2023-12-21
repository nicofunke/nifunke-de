import { ThemeProvider, createTheme } from "@mui/material";
import { PropsWithChildren } from "react";

let theme = createTheme({
  palette: {
    primary: {
      main: "#56b6ce",
    },
    secondary: {
      main: "#c89db8",
    },
    background: {
      default: "#0b0d1a",
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
        }
      `,
    },
  },
});

theme = createTheme(theme, {
  palette: {
    gray: theme.palette.augmentColor({
      color: {
        main: "#171926",
      },
      name: "gray",
    }),
    salmon: theme.palette.augmentColor({
      color: {
        main: "#e3d3d4",
      },
      name: "salmon",
    }),
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    gray: Palette["primary"];
    salmon: Palette["primary"];
  }
  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    salmon?: PaletteOptions["primary"];
  }
}

const CustomThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
